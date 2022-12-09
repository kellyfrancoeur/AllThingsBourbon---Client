import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateCocktailTried, getCocktailTriedById } from "../../managers/CocktailsTriedManager"
import { getCocktails } from "../../managers/CocktailManager"

export const EditCocktail = () => {
    const navigate = useNavigate()
    const { cocktailTriedId } = useParams()
    const [cocktails, setCocktails] = useState([])
    const [updateTriedCocktail, setUpdatedTriedCocktail] = useState({
        id: 0,
        cocktail: 0,
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getCocktailTriedById(cocktailTriedId).then(setUpdatedTriedCocktail)
    },
        [cocktailTriedId])

    useEffect(() => {
        getCocktails().then(setCocktails)
    }, []
    )

    const changeTriedCocktailState = (evt) => {
        const copy = { ...updateTriedCocktail }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedTriedCocktail(copy)
    }

    return (
        <form className="cocktailForm">
            <h2 className="cocktailForm__description">Edit Cocktail</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cocktail">Cocktail:</label>
                    <select id="cocktail" className="drop_down" value={updateTriedCocktail.name}
                    onChange={changeTriedCocktailState}>
                        
                        <option value={0}>Select Cocktail</option>
                        {
                            cocktails.map((cocktail) =>{
                                return <option value={`${cocktail.id}`} key={`cocktail--${cocktail.id}`}>{cocktail.name}</option>
                            }

                            )
                            
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Comments: </label>
                    <input type="text" 
                        id="comments" 
                        required autoFocus 
                        className="form-control"
                        value={updateTriedCocktail.comments}
                        onChange={changeTriedCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rating: </label>
                    <input type="number" 
                        id="rating" 
                        required autoFocus 
                        className="form-control"
                        value={updateTriedCocktail.rating}
                        onChange={changeTriedCocktailState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Cocktail has been updated!")

                    const newTriedCocktail = {
                        id: updateTriedCocktail.id,
                        cocktail: parseInt(updateTriedCocktail.cocktail),
                        comments: updateTriedCocktail.comments,
                        rating: updateTriedCocktail.rating
                    }

                    updateCocktailTried(newTriedCocktail)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="btn btn-primary">Add Cocktail</button>
            </form>
            )
}