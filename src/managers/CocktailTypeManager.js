export const getCocktailTypes = () => {
    return fetch("http://localhost:8000/cocktailtypes", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getCocktailTypesById = (id) => {
    return fetch(`http://localhost:8000/cocktailtypes/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createCocktailType = (cocktailtype) => {
    return fetch("http://localhost:8000/cocktailtypes", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktailtype)
    })
}

export const updateCocktailTypes = (cocktailtype) => {
    return fetch (`http://localhost:8000/cocktailtypes/${cocktailtype.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktailtype)
    })
}

export const deleteCocktailType = (cocktailtype) => {
    return fetch(`http://localhost:8000/cocktailtypes/${cocktailtype.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}