import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCocktails, deleteCocktail } from "../../managers/CocktailManager.js"


export const CocktailList = (props) => {
    const [cocktails, setCocktails] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    // useEffect(
    //     () => {
    //         const searchedBourbons = cocktails.filter(distillery => {
    //             return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
    //                 || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
    //         })
    //         setCocktails(searchedBourbons)
    //     },
    //     [searchTermState]
    // )

    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
    }, []
    )

    return (<>
        <h2>Cocktails</h2>
        <div>
            {
                bourbonUserObject.staff
                    ? <button className="add_cocktail" onClick={() => {
                        navigate({ pathname: "/cocktails/add" })
                    }}>Add A Cocktail</button>
                    : ""
            }
        </div>
        <article className="cocktails">
            {
                cocktails.map(cocktail => {
                    return <section key={`cocktail--${cocktail.id}`} className="cocktail">
                        <div className="cocktail_name">{cocktail.name}</div>
                        <div className="cocktail_ingredients">{cocktail.ingredients}</div>
                        <div className="cocktail_howToMake">{cocktail.how_to_make}</div>
                        <div className="cocktail_cocktailImg">{cocktail.cocktail_img}</div>
                        <div className="cocktail_type">{cocktail?.type_of_cocktail?.type}</div>
                         
                        <div>
                            {
                                bourbonUserObject.staff
                                    ? <button className="update_cocktail" onClick={() => {
                                        navigate({ pathname: `/cocktails/${cocktail.id}/update` })
                                    }}>Update Cocktail</button>
                                    : ""
                            }
                        </div>
                        <div>
                            {
                                bourbonUserObject.staff
                                    ? <button className="delete_cocktail" onClick={() => {
                                        const cocktailDelete = {
                                            id: cocktail.id
                                        }
                                        deleteCocktail(cocktailDelete)
                                            .then(() => { window.location.reload() })
                                    }}
                                    >Delete Cocktail</button>
                                    : ""
                            }</div>
                    </section>
                })
            }
        </article>
    </>
    )
}