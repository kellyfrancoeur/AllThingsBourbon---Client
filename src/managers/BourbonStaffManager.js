export const getBourbonStaff = () => {
    return fetch("http://localhost:8000/bourbonstaffs", {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const getBourbonStaffById = (id) => {
    return fetch(`http://localhost:8000/bourbonstaffs/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}