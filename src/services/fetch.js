export const getCategories = async () => {
    const response = await fetch("https://my-json-server.typicode.com/EdwardbotA/aluraflix-database/categorias");
    const data = await response.json();
    console.log(data);
    return data;
}

export const getVideos = async () => {
    const response = await fetch("https://my-json-server.typicode.com/EdwardbotA/aluraflix-database/videos");
    const data = await response.json();
    console.log(data);
    return data;
}

export const deleteVideo = async (id) => {
    const response = await fetch(`https://my-json-server.typicode.com/EdwardbotA/aluraflix-database/videos/${id}`, { method: "DELETE" });
    const data = await response.json();
    return data;
}

export const updateVideoInfo = async (data) => {
    const response = await fetch(`https://my-json-server.typicode.com/EdwardbotA/aluraflix-database/videos/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const updatedVideo = await response.json();
    return updatedVideo;
}

export const createNewVideo = async (data) => {
    const response = await fetch("https://my-json-server.typicode.com/EdwardbotA/aluraflix-database/videos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const newVideo = await response.json();
    return newVideo;
}