import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createCocktail } from "../../managers/CocktailManager"
import { getCocktailTypes } from "../../managers/CocktailTypeManager"

export const NewCocktailForm = () => {
    const navigate = useNavigate()
    const [cocktailTypes, setCocktailTypes] = useState([])
    const [newCocktail, updateCocktail] = useState({
        name: "",
        ingredients: "",
        how_to_make: "",
        cocktail_img: "",
        type_of_cocktail: 0
    })

    useEffect(() => {
        getCocktailTypes().then(setCocktailTypes)
    }, []
    )

    const changeCocktailState = (domEvent) => {
        const value = domEvent.target.value
        updateCocktail({
            ...newCocktail,
            [domEvent.target.name]: value
        })
    }


    return (
        <form className="cocktailForm">
            <h1 id="mTitle2">Add A New Cocktail</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Name of Cocktail: </label></h2>
                    <input type="text"
                        name="name"
                        required autoFocus
                        className="formControl"
                        placeholder="Name of Cocktail"
                        value={newCocktail.name}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="ingredients">Ingredients: </label></h2>
                    <input type="text"
                        name="ingredients"
                        required autoFocus
                        className="formControl"
                        placeholder="Ingredients of Cocktail"
                        value={newCocktail.ingredients}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="how_to_make">How to Make Cocktail: </label></h2>
                    <input type="text"
                        name="how_to_make"
                        required autoFocus
                        className="formControl"
                        placeholder="How to Make Cocktail"
                        value={newCocktail.how_to_make}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="cocktail_img">Image of Cocktail: </label></h2>
                    <input type="text"
                        name="cocktail_img"
                        required autoFocus
                        className="formControl"
                        placeholder="Image of Cocktail"
                        value={newCocktail.cocktail_img}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="type">Type of Cocktail:</label></h2>
                    <select name="type" className="drop_down" value={newCocktail.type}
                        onChange={changeCocktailState}>

                        <option value={0}>Select Type</option>
                        {
                            cocktailTypes.map((cocktailType) => {
                                return <option value={`${cocktailType.id}`} key={`cocktailType--${cocktailType.id}`}>{cocktailType.type}</option>
                            }

                            )

                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Cocktail has been added!")

                    const cocktail = {
                        name: newCocktail.name,
                        ingredients: newCocktail.ingredients,
                        how_to_make: newCocktail.how_to_make,
                        cocktail_img: newCocktail.cocktail_img,
                        type_of_cocktail: parseInt(newCocktail.type)
                    }

                    createCocktail(cocktail)
                        .then(() => navigate("/cocktails"))
                }}
                className="addNew">Add New Cocktail</button>
        </form>
    )
}