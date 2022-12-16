import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteCocktail } from "../../managers/CocktailManager.js"
import "./CocktailList.css"

export const CocktailList = ({searchTermState}) => {
    const [cocktails, setCocktails] = useState([])
    const [filteredCocktails, setFilteredCocktails] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    useEffect(
        () => {
            const searchedCocktails = cocktails.filter(cocktail => {
                return cocktail?.name?.toLowerCase().includes(searchTermState.toLowerCase())
                    || cocktail?.type_of_cocktail?.type.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredCocktails(searchedCocktails)
        },
        [searchTermState]
    ) 

    const getAllCocktails = () => {
        fetch("http://localhost:8000/cocktails", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
        }
    })
            .then(response => response.json())
            .then((cocktailArray) => {
                setFilteredCocktails(cocktailArray)
                setCocktails(cocktailArray)
            })

    }


    useEffect(
        () => {
            getAllCocktails()
        },
        []
    )

    return (<>
        <h1 id="cTitle1">Cocktails</h1>
        <div className="add_cocktail">
            {
                bourbonUserObject.staff
                    ? <button onClick={() => {
                        navigate({ pathname: "/cocktails/add" })
                    }}>Add A Cocktail</button>
                    : ""
            }
        </div>
        <article className="cocktails">
            {
                filteredCocktails.map(cocktail => {
                    return <section key={`cocktail--${cocktail.id}`} className="cocktail">
                        <div className="cocktailView">
                            <div className="cocktailImg">
                                <img src={cocktail.cocktail_img} height="400" width="275" />
                            </div>
                            <div className="cocktailInfo">
                                <h3 id="cTitle3">{cocktail.name}</h3>
                                <div className="cocktailIngredients"><b><u>What You Need:</u></b></div>
                                <div>{cocktail.ingredients}</div>
                                <div className="cocktailHowToMake"><b><u>How to Make it:</u></b></div>
                                <div>{cocktail.how_to_make}</div>

                                <div className="cocktailType">{cocktail?.type_of_cocktail?.type}</div>

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
                                                window.alert("Cocktail has been deleted!")
                                                const cocktailDelete = {
                                                    id: cocktail.id
                                                }
                                                deleteCocktail(cocktailDelete)
                                                    .then(() => { window.location.reload() })
                                            }}
                                            >Delete Cocktail</button>
                                            : ""
                                    }</div>
                            </div>
                        </div>
                    </section>
                })
            }
        </article>
    </>
    )
}