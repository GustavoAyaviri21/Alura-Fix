import { create } from "zustand";
import {
    getCategories,
    getVideos,
    deleteVideo as deleteVideoAPI,
    updateVideoInfo as updateVideoInfoAPI,
    createNewVideo as createNewVideoAPI,
  } from "../services/fetch";

export const useVideosStore = create((set) => ({
    videos: [],
    fetchVideos: async () => {
        const videos = await getVideos();
        set({ videos });
    },

    categories: [],
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    // Actions for CRUD operations
    deleteVideo: async (id) => {
        await deleteVideoAPI(id);
        set((state) => ({
            videos: state.videos.filter((video) => video.id !== id),
            popup: {
                show: true,
                message: "video eliminado con éxito",
                type: "success",
            },
        }));
        setTimeout(() => {
            set({ popup: { show: false, message: "", type: "" } });
        }, 3000);
    },
    updateVideoInfo: async (data) => {
        const updatedVideoFromServer = await updateVideoInfoAPI(data);
        set((state) => ({
            videos: state.videos.map((video) =>
                video.id === data.id ? updatedVideoFromServer : video
            ),
            popup: {
                show: true,
                message: "video Actualizado con éxito",
                type: "success",
            },
        }));
        setTimeout(() => {
            set({ popup: { show: false, message: "", type: "" } });
        }, 3000);
    },
    createNewVideo: async (data) => {
        const newVideo = await createNewVideoAPI(data);
        set((state) => ({
            videos: [...state.videos, newVideo],
            popup: {
                show: true,
                message: `Se ha agregado con exito el video: ${newVideo.titulo}`,
                type: "success",
            },
        }));
        setTimeout(() => {
            set({ popup: { show: false, message: "", type: "" } });
        }, 3000);
    },
    // Form validation and handling
    title: "",
    category: "",
    image: "",
    videoLink: "",
    description: "",
    selectedVideo: null,
    popup: { show: false, message: "", type: "" },
    errorMessages: {},
    formFields: {},
    isFormValid: false,
    clearInputs: () => {
        set({
            title: "",
            category: "",
            image: "",
            videoLink: "",
            description: "",
            isFormValid: false,
        });
    },
    verifyField: (field) => {
        let message = "";
        const { typeError, messages } = get().typeError;
        field.setCustomValidity("");
        typeError.forEach((error) => {
            if (field.validity[error]) {
                message = messages[field.name][error] || "Campo invalido";
            }
        });
        set((state) => ({
            errorMessages: {
                ...state.errorMessages,
                [field.name]: message,
            },
        }));
    },
    handleInputChange: (name, value) => {
        const formField = document.querySelector(`[name=${name}]`);
        set((state) => ({
            [name]: value,
            formFields: {
                ...state.formFields,
                [name]: {
                    ...state.formFields[name],
                    value: value,
                    validity: formField.validity,
                },
            },
            isFormValid: Object.values(state.formFields).every(
                (field) => field.validity.valid
            ),
        }));
    },

}))