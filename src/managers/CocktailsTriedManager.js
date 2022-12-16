export const getCocktailsTried = () => {
    return fetch("http://localhost:8000/cocktailstried", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}


export const getCocktailTriedById = (id) => {
    return fetch(`http://localhost:8000/cocktailstried/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
        .then(response => response.json())
}

export const createCocktailTried = (cocktailTried) => {
    return fetch("http://localhost:8000/cocktailstried", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktailTried)
    })
}

export const updateCocktailTried = (cocktailTried) => {
    return fetch(`http://localhost:8000/cocktailstried/${cocktailTried.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        },
        body: JSON.stringify(cocktailTried)
    })
}

export const deleteCocktailTried = (cocktailTried) => {
    return fetch(`http://localhost:8000/cocktailstried/${cocktailTried.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
}