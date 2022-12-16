import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createCocktailTried } from "../../managers/CocktailsTriedManager"
import { getCocktails } from "../../managers/CocktailManager"

export const AddCocktail = () => {
    const navigate = useNavigate()
    const [cocktails, setCocktails] = useState([])
    const [triedNewCocktail, updateNewCocktail] = useState({
        cocktail: 0,
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getCocktails().then(setCocktails)
    }, []
    )

    const changeTriedCocktailState = (domEvent) => {
        const value = domEvent.target.value
        updateNewCocktail({
            ...triedNewCocktail,
            [domEvent.target.name]: value
        })
    }

    return (
        <form className="cocktailForm">
            <h1 id="mTitle2">Add A New Cocktail</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="cocktail">Cocktail:</label></h2>
                    <select name="cocktail" className="drop_down" value={triedNewCocktail.name}
                        onChange={changeTriedCocktailState}>

                        <option value={0}>Select Cocktail</option>
                        {
                            cocktails.map((cocktail) => {
                                return <option value={`${cocktail.id}`} key={`cocktail--${cocktail.id}`}>{cocktail.name}</option>
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
                        name="comments"
                        required autoFocus
                        className="formControl"
                        placeholder="What did you think?"
                        value={triedNewCocktail.comments}
                        onChange={changeTriedCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="rating">Rating: </label></h2>
                    <input type="number"
                        name="rating"
                        required autoFocus
                        className="formControl1"
                        min="0" max="5"
                        value={triedNewCocktail.rating}
                        onChange={changeTriedCocktailState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Cocktail has been added!")

                    const newTriedCocktail = {
                        cocktail: parseInt(triedNewCocktail.cocktail),
                        comments: triedNewCocktail.comments,
                        rating: triedNewCocktail.rating
                    }

                    createCocktailTried(newTriedCocktail)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="addNew">Add Cocktail</button>
        </form>
    )
}