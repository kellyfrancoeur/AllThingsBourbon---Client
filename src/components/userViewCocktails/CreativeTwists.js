import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCocktails } from "../../managers/CocktailManager.js"
import { createCocktailTried } from "../../managers/CocktailsTriedManager.js"
import "./userView.css"

export const CreativeTwists = ({ searchTermState }) => {
    const [cocktails, setCocktails] = useState([])
    const [filterCocktails, setFiltered] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getCocktails().then(data => setCocktails(data))
    }, []
    )

    useEffect(
        () => {
            const searchedCocktails = cocktails.filter(cocktail => {
                return cocktail?.name?.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFiltered(searchedCocktails)
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
                setFiltered(cocktailArray)
                setCocktails(cocktailArray)
            })

    }

    useEffect(
        () => {
            getAllCocktails()
        },
        []
    )

    const sortedCocktails = filterCocktails.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })

    return (<>
        <h1 id="cTitle2">Creative Twists on Classic Cocktails</h1>
        <article className="cocktails">
            {
                sortedCocktails.map((cocktail) => {
                    if (cocktail.type_of_cocktail.id === 4) {
                        return <section key={`cocktail--${cocktail.id}`} className="cocktail">
                            <div className="cocktailView">
                                <div className="cocktailImg">
                                    <img id="cimg" src={cocktail.cocktail_img} height="400" width="275" />
                                </div>
                                <div className="cocktailInfo">
                                    <h3 id="cTitle3"><u>{cocktail.name}</u></h3>
                                    <div className="cocktailIngredients"><b><u>What You Need:</u></b></div>
                                    <div>{cocktail.ingredients}</div>
                                    <div className="cocktailHowToMake"><b><u>How to Make it:</u></b></div>
                                    <div>{cocktail.how_to_make}</div>
                                    <div>
                                        <button className="addMyCocktail" onClick={() => {
                                            createCocktailTried()
                                                .then(res => res.json())
                                                .then(() => {
                                                    getAllCocktails()
                                                })
                                            navigate({ pathname: `/cocktailstried/memberAdd/${cocktail.id}` })
                                        }}>Add to My Cocktails</button>
                                    </div>
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