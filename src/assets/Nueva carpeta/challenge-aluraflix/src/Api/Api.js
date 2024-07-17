import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data);
}

export const post = async (url, datosEnviar) => {
    await api.post(url, datosEnviar);
}

export const borrar = async (url, id) => {
    await api.delete(`${url}/${id}`);
}

export const actualizar = async (url, datosEnviar) => {
    await api.put(url, datosEnviar);
}
