export const getBourbonStaff = () => {
    return fetch("http://localhost:8000/bourbonstaffs", {
        headers:{
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}