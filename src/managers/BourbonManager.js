export const getBourbons = () => {
    return fetch("http://localhost:8000/bourbons", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getBourbonById = (id) => {
    return fetch(`http://localhost:8000/bourbons/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createBourbon = (bourbon) => {
    return fetch("http://localhost:8000/bourbons", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbon)
    })
}

export const updateBourbon = (id, bourbon) => {
    return fetch(`http://localhost:8000/bourbons/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbon)
    })
}

export const deleteBourbon = (bourbon) => {
    return fetch(`http://localhost:8000/bourbons/${bourbon.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}