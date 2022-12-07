export const getBourbonDescriptors = () => {
    return fetch("http://localhost:8000/descriptors", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getBourbonDescriptorById = (id) => {
    return fetch(`http://localhost:8000/descriptors/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createBourbonDescriptor = (descriptor) => {
    return fetch("http://localhost:8000/descriptors", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(descriptor)
    })
}

export const updateBourbonDescriptor = (descriptor) => {
    return fetch (`http://localhost:8000/descriptors/${descriptor.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(descriptor)
    })
}

export const deleteBourbonDescriptor = (descriptor) => {
    return fetch(`http://localhost:8000/descriptors/${descriptor.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}