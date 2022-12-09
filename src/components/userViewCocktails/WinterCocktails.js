import React, { useEffect, useState } from "react"
import { getCocktails } from "../../managers/CocktailManager.js"

export const WinterCocktails = (props) => {
    const [cocktails, setCocktails] = useState([])


    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
    }, []
    )

    return (<>
        <h2>Winter Cocktails</h2>
        <article className="cocktails">
            {
                cocktails.map((cocktail) => {
                    if (cocktail.type_of_cocktail.id === 3) {
                        return <section key={`cocktail--${cocktail.id}`} className="cocktail">
                            <div className="cocktail_name"><b><u>{cocktail.name}</u></b></div>
                            <div className="cocktail_ingredients"><b>Ingredients:</b> {cocktail.ingredients}</div>
                            <div className="cocktail_howToMake"><b>How to Make It:</b> {cocktail.how_to_make}</div>
                            <div className="cocktail_cocktailImg">
                                <img src={cocktail.cocktail_img} height="205" width="175" /></div>
                        </section>
                    }
                })
            }
        </article>
    </>
    )
}