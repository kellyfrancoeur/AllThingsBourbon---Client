export const getDescriptors = () => {
    return fetch("http://localhost:8000/descriptors", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getDescriptorsById = (id) => {
    return fetch(`http://localhost:8000/descriptors/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

// export const createBourbon = (bourbon) => {
//     return fetch("http://localhost:8000/descriptors", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
//         },
//         body: JSON.stringify(bourbon)
//     })
// }

// export const updateBourbon = (bourbon) => {
//     return fetch (`http://localhost:8000/descriptors/${bourbon.id}`, {
//         method: "PUT",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
//         },
//         body: JSON.stringify(bourbon)
//     })
// }

// export const deleteBourbon = (bourbon) => {
//     return fetch(`http://localhost:8000/descriptors/${bourbon.id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
//         }
//     })
// }