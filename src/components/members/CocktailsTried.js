import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getCocktailsTried } from "../../managers/CocktailsTriedManager";

export const CocktailsTried = () => {
    const [triedCocktails, setTriedCocktails] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCocktailsTried().then(data => setTriedCocktails(data))
    }, []
    )

    return (<>
        <h2>My Cocktails</h2>
        <article className="myCocktails">
            <div>
                <button className="add_cocktail" onClick={() => {
                    navigate({ pathname: `/cocktails/${cocktail.id}/add` })
                }}>Add A Cocktail</button>
            </div>
            {
                triedCocktails.map(triedCocktail => {
                    return <section key={`triedCocktail--${triedCocktail.id}`}>
                        <div>{triedCocktail?.cocktail?.name}</div>
                        <div>{triedCocktail.comments}</div>
                        <div>{triedCocktail.rating}</div>
                        <div>
                            <button className="edit_cocktail" onClick={() => {
                                navigate({ pathname: `/cocktails/${cocktail.id}/edit` })
                            }}>Edit</button>
                        </div>
                    </section>

                })
            }
        </article>

    </>

    )
}