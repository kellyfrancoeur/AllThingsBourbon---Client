export const getDistilleriesVisited = () => {
    return fetch("http://localhost:8000/distilleriesvisited", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getDistilleryVisitedById = (id) => {
    return fetch(`http://localhost:8000/distilleriesvisited/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createDistilleryVisited = (distilleryVisited) => {
    return fetch("http://localhost:8000/distilleriesvisited", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(distilleryVisited)
    })
}

export const updateDistilleryVisited = (distilleryVisited) => {
    return fetch (`http://localhost:8000/distilleriesvisited/${distilleryVisited.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(distilleryVisited)
    })
}

export const deleteDistilleryVisited = (distilleryVisited) => {
    return fetch(`http://localhost:8000/distilleriesvisited/${distilleryVisited.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}