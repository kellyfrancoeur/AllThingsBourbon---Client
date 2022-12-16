import React, { useEffect, useState } from "react"
import { getCocktails } from "../../managers/CocktailManager.js"
import "./userView.css"

export const CreativeTwists = (props) => {
    const [cocktails, setCocktails] = useState([])


    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
    }, []
    )

    return (<>
        <h1 id="cTitle2">Creative Twists on Classic Cocktails</h1>
        <article className="cocktails">
            {
                cocktails.map((cocktail) => {
                    if (cocktail.type_of_cocktail.id === 4) {
                        return <section key={`cocktail--${cocktail.id}`} className="cocktail">
                            <div className="cocktailView">
                                <div className="cocktailImg">
                                    <img src={cocktail.cocktail_img} height="400" width="275" />
                                </div>
                                <div className="cocktailInfo">
                                    <h3 id="cTitle3"><u>{cocktail.name}</u></h3>
                                    <div className="cocktailIngredients"><b><u>What You Need:</u></b></div>
                                    <div>{cocktail.ingredients}</div>
                                    <div className="cocktailHowToMake"><b><u>How to Make it:</u></b></div>
                                    <div>{cocktail.how_to_make}</div>
                                </div>
                            </div>
                        </section>
                    }
                })
            }
        </article>
    </>
    )
}