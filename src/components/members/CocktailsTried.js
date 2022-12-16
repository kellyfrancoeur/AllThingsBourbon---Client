import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getCocktailsTried, deleteCocktailTried } from "../../managers/CocktailsTriedManager";
import "./MemberPage.css"

export const CocktailsTried = () => {
    const [triedCocktails, setTriedCocktails] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCocktailsTried().then(data => setTriedCocktails(data))
    }, []
    )

    return (<>
        <article className="myCocktails">
            <div>
                <button className="addButton" onClick={() => {
                    navigate({ pathname: `/cocktailstried/add` })
                }}>Add A Cocktail</button>
            </div>
            {
                triedCocktails.map(triedCocktail => {
                    return <section key={`triedCocktail--${triedCocktail.id}`}>
                        <div className="triedInfo">
                            <div id="label">{triedCocktail?.cocktail?.name}</div>
                            <div id="comments">Thoughts:</div>
                            <div>{triedCocktail.comments}</div>
                            <div id="rating">Rating:</div>
                            <div>{triedCocktail.rating}</div>
                            <div>
                                <button className="edit_cocktail" onClick={() => {
                                    navigate({ pathname: `/cocktailstried/${triedCocktail.id}/edit` })
                                }}>Edit</button>
                            </div>
                            <div>
                                <button className="delete_cocktail" onClick={() => {
                                    window.alert("Cocktail has been deleted!")
                                    const cocktailTriedDelete = {
                                        id: triedCocktail.id
                                    }
                                    deleteCocktailTried(cocktailTriedDelete)
                                        .then(() => { window.location.reload() })
                                }}
                                >Delete</button>
                            </div>
                        </div>
                    </section>

                })
            }
        </article>

    </>

    )
}



