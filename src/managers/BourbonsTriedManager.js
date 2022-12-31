export const getBourbonsTried = () => {
    return fetch("http://localhost:8000/bourbonstried", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getBourbonTriedById = (id) => {
    return fetch(`http://localhost:8000/bourbonstried?bourbon=${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createBourbonTried = (bourbonTried) => {
    return fetch("http://localhost:8000/bourbonstried", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbonTried)
    })
}

export const updateBourbonTried = (bourbonTried) => {
    return fetch(`http://localhost:8000/bourbonstried/${bourbonTried.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(bourbonTried)
    })
}

// export const updateBourbonTried = (id, bourbonTried, chosenDescriptors) => {
//     return fetch(`http://localhost:8000/bourbonstried/${id}`, {
//         method: "PUT",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
//         },
//         body: JSON.stringify({ ...bourbonTried, descriptors: chosenDescriptors })
//     })
// }

export const deleteBourbonTried = (bourbonTried) => {
    return fetch(`http://localhost:8000/bourbonstried/${bourbonTried.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}

export const describedBourbon = (bourbonId) => {
    return fetch(`http://localhost:8000/bourbonstried/${bourbonId}/descriptors`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}