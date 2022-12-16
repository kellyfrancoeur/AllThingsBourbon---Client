export const getCocktails = () => {
    return fetch("http://localhost:8000/cocktails", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getCocktailById = (id) => {
    return fetch(`http://localhost:8000/cocktails/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createCocktail = (cocktail) => {
    return fetch("http://localhost:8000/cocktails", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktail)
    })
}

export const updateCocktail = (cocktail) => {
    return fetch(`http://localhost:8000/cocktails/${cocktail.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktail)
    })
}

export const deleteCocktail = (cocktail) => {
    return fetch(`http://localhost:8000/cocktails/${cocktail.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}