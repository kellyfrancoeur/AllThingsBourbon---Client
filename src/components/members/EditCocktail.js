import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateCocktailTried, getCocktailTriedById } from "../../managers/CocktailsTriedManager"
import { getCocktails } from "../../managers/CocktailManager"
import "./MemberPage.css"

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
            <h1 id="mTitle2">Update Cocktail</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="cocktail">Cocktail:</label></h2>
                    <select id="cocktail" className="drop_down" value={updateTriedCocktail.cocktails}
                        onChange={changeTriedCocktailState}>

                        <option value={0}>Select Cocktail</option>
                        {
                            cocktails.map((cocktail) => {
                                const isSelected = cocktail.id === updateTriedCocktail.cocktail.id
                                return <option selected={isSelected ? true : false} value={`${cocktail.id}`} key={`cocktail--${cocktail.id}`}>{cocktail.name}</option>
                            }

                            )

                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Comments: </label></h2>
                    <input type="text"
                        id="comments"
                        required autoFocus
                        className="formControl"
                        value={updateTriedCocktail.comments}
                        onChange={changeTriedCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="rating">Rating: </label></h2>
                    <input type="number"
                        id="rating"
                        required autoFocus
                        className="formControl1"
                        min="0" max="5"
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
                className="addNew">Update Cocktail</button>
        </form>
    )
}