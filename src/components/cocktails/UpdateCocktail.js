import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getCocktailById, updateCocktail } from "../../managers/CocktailManager";
import { getCocktailTypes } from "../../managers/CocktailTypeManager"
import "./StaffPage.css"

export const UpdateCocktail = () => {
    const navigate = useNavigate()
    const { cocktailId } = useParams()
    const [cocktailTypes, setCocktailTypes] = useState([])
    const [updatedCocktail, setUpdatedCocktail] = useState({
        name: "",
        ingredients: "",
        how_to_make: "",
        cocktail_img: "",
        type_of_cocktail: 0
    })

    useEffect(() => {
        getCocktailById(cocktailId).then(setUpdatedCocktail)
    },
        [cocktailId])

    useEffect(() => {
        getCocktailTypes().then(setCocktailTypes)
    }, []
    )

    const changeCocktailState = (evt) => {
        const copy = { ...updatedCocktail }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedCocktail(copy)
    }

    return (
        <form className="cocktailForm">
            <h1 id="mTitle2">Update Cocktail</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Name of Cocktail: </label></h2>
                    <input type="text"
                        id="name"
                        required autoFocus
                        className="formControl"
                        value={updatedCocktail.name}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="ingredients">Ingredients: </label></h2>
                    <input type="text"
                        id="ingredients"
                        required autoFocus
                        className="formControl"
                        value={updatedCocktail.ingredients}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="how_to_make">How to Make Cocktail: </label></h2>
                    <input type="text"
                        id="how_to_make"
                        required autoFocus
                        className="formControl"
                        value={updatedCocktail.how_to_make}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="cocktail_img">Image of Cocktail: </label></h2>
                    <input type="text"
                        id="cocktail_img"
                        required autoFocus
                        className="formControl"
                        value={updatedCocktail.cocktail_img}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="type">Type of Cocktail:</label></h2>
                    <select id="types" className="drop_down" value={updatedCocktail.cocktailTypes}
                        onChange={changeCocktailState}>

                        <option value={0}>Select Type</option>
                        {
                            cocktailTypes.map((cocktailType) => {
                                const isSelected = cocktailType.id === updatedCocktail.type_of_cocktail.id
                                return <option selected={isSelected ? true : false} value={`${cocktailType.id}`} key={`cocktailType--${cocktailType.id}`}>{cocktailType.type}</option>
                            }

                            )

                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Cocktail has been updated!")

                    let selectedCocktailType = 0

                    updatedCocktail.type_of_cocktail.id
                    ?selectedCocktailType = updatedCocktail.type_of_cocktail.id
                    :selectedCocktailType = updatedCocktail.type_of_cocktail

                    const cocktail = {
                        name: updatedCocktail.name,
                        ingredients: updatedCocktail.ingredients,
                        how_to_make: updatedCocktail.how_to_make,
                        cocktail_img: updatedCocktail.cocktail_img,
                        type_of_cocktail: selectedCocktailType
                    }

                    updateCocktail(cocktailId, cocktail)
                        .then(() => navigate("/cocktails"))
                }}
                className="addNew">Update cocktail</button>
        </form>
    )
}