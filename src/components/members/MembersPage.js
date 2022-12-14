import { useEffect, useState } from "react"
import { BourbonsTried } from "./BourbonsTried"
import { CocktailsTried } from "./CocktailsTried"
import { DistilleriesVisited } from "./DistilleriesVisited"
import { getBourbonUsers } from "../../managers/BourbonUsersManager"
import "./MemberPage.css"

export const MembersPage = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getBourbonUsers().then(data => setUser(data))
    },
        []
    )

    return (<>
        <h1 id="mTitle2">Welcome Back!</h1>
        <section className="profile">
            <article className="myBourbons">
                <h3 id="mTitle3">My Bourbons</h3>
                <div className="container">
                    <img id="timg2" src="https://d3d7qmccklvqbw.cloudfront.net/wp-content/uploads/2017/05/bourbon.jpg" height="300" width="300"></img>
                    <div className="middle">
                        <div className="ttext">
                            <a href="/bourbonstried/add">Add A Bourbon</a>
                        </div>
                    </div>
                </div>
                < BourbonsTried />
            </article>
            <article className="myCocktails">
                <h3 id="mTitle3">My Cocktails</h3>
                <div className="container">
                    <img id="timg2" src="https://assets.epicurious.com/photos/5fb6c3f76b14bf583b9b1350/1:1/w_2560%2Cc_limit/BarChef_PG204.jpg" height="300" width="300"></img>
                    <div className="middle">
                        <div className="ttext">
                            <a href="/cocktailstried/add">Add A Cocktail</a>
                        </div>
                    </div>
                </div>
                < CocktailsTried />
            </article>
            <article className="myDistilleries">
                <h3 id="mTitle3">My Distilleries</h3>
                <div className="container">
                    <img id="timg2" src="https://media.istockphoto.com/id/1255944909/photo/whiskey-barrels-in-cellar.jpg?s=612x612&w=0&k=20&c=PCRqzH3JqMnHzQ7ZBk8Z4EDPNMOMucZZ1H21lk2pPrE=" height="300" width="300"></img>
                    <div className="middle">
                        <div className="ttext">
                            <a href="/distilleriesvisited/add">Add A Distillery</a>
                        </div>
                    </div>
                </div>
                < DistilleriesVisited />
            </article>
        </section>
    </>

    )
}