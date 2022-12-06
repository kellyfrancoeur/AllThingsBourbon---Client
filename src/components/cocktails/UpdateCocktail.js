import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getCocktailById, updateCocktail } from "../../managers/CocktailManager";
import { getCocktailTypes } from "../../managers/CocktailTypeManager"


export const UpdateCocktail = () => {
    const navigate = useNavigate()
    const { cocktailId } = useParams()
    const [cocktailTypes, setCocktailTypes] = useState([])
    const [updatedCocktail, setUpdatedCocktail] = useState({
        id: 0,
        name: "",
        ingredients: "",
        how_to_make: "",
        cocktail_img:"",
        type_of_cocktail: 0
    })

    useEffect(() => {
        getCocktailById(cocktailId).then(setUpdatedCocktail)
    },
        [])

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
            <h2 className="cocktailForm__description">Create A New Cocktail</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Cocktail: </label>
                    <input type="text" 
                        id="name" 
                        required autoFocus 
                        className="form-control"
                        value={updatedCocktail.name}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients: </label>
                    <input type="text" 
                        id="ingredients" 
                        required autoFocus 
                        className="form-control"
                        value={updatedCocktail.ingredients}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="how_to_make">How to Make Cocktail: </label>
                    <input type="text" 
                        id="how_to_make" 
                        required autoFocus 
                        className="form-control"
                        value={updatedCocktail.how_to_make}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cocktail_img">Image of Cocktail: </label>
                    <input type="text" 
                        id="cocktail_img" 
                        required autoFocus 
                        className="form-control"
                        value={updatedCocktail.cocktail_img}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type of Cocktail:</label>
                    <select id="type" className="drop_down" value={updatedCocktail.type}
                    onChange={changeCocktailState}>
                        
                        <option value={0}>Select Type</option>
                        {
                            cocktailTypes.map((cocktailType) =>{
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

                    const cocktail = {
                        id: updatedCocktail.id,
                        name: updatedCocktail.name,
                        ingredients: updatedCocktail.ingredients,
                        how_to_make: updatedCocktail.how_to_make,
                        cocktail_img: updatedCocktail.cocktail_img,
                        type_of_cocktail: parseInt(updatedCocktail.type)
                    }

                    updateCocktail(cocktail)
                        .then(() => navigate("/cocktails"))
                }}
                className="btn btn-primary">Update cocktail</button>
        </form>
    )
}