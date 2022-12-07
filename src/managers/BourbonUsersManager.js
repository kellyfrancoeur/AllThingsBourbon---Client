export const getBourbonUsers = () => {
    return fetch("http://localhost:8000/bourbonusers", {
        headers:{
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const getBourbonUsersById = (id) => {
    return fetch(`http://localhost:8000/bourbonusers/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const deleteBourbonUser = (bourbon) => {
    return fetch(`http://localhost:8000/bourbonusers/${bourbon.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}