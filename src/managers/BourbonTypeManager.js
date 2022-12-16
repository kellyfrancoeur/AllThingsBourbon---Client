export const getBourbonTypes = () => {
    return fetch("http://localhost:8000/bourbontypes", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getBourbonTypesById = (id) => {
    return fetch(`http://localhost:8000/bourbontypes/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createBourbonType = (bourbonType) => {
    return fetch("http://localhost:8000/bourbontypes", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbonType)
    })
}

export const updateBourbonTypes = (bourbonType) => {
    return fetch(`http://localhost:8000/bourbontypes/${bourbonType.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbonType)
    })
}

export const deleteBourbonType = (bourbonType) => {
    return fetch(`http://localhost:8000/bourbontypes/${bourbonType.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}