import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createCocktailTried } from "../../managers/CocktailsTriedManager"
import { getCocktailById } from "../../managers/CocktailManager"

export const MemberAddCocktailFromPage = () => {
    const navigate = useNavigate()
    const { cocktailId } = useParams()
    const [cocktail, setCocktail] = useState([])
    const [triedNewCocktail, updateNewCocktail] = useState({
        cocktail: "",
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getCocktailById(cocktailId).then(setCocktail)
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
                    <input type="text" name="cocktail" className="formControl" value={cocktail.name}
                        onChange={changeTriedCocktailState}/>

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
                        cocktail: cocktail.id,
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