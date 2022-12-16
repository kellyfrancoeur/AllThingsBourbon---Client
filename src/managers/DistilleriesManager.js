export const getDistilleries = () => {
    return fetch("http://localhost:8000/distilleries", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getDistilleryById = (id) => {
    return fetch(`http://localhost:8000/distilleries/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createDistillery = (distillery) => {
    return fetch("http://localhost:8000/distilleries", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(distillery)
    })
}

export const updateDistillery = (distillery) => {
    return fetch(`http://localhost:8000/distilleries/${distillery.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(distillery)
    })
}

export const deleteDistillery = (distillery) => {
    return fetch(`http://localhost:8000/distilleries/${distillery.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}