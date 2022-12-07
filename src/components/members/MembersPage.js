import { useEffect, useState } from "react"
import { BourbonsTried } from "./BourbonsTried"
import { CocktailsTried } from "./CocktailsTried"
import { DistilleriesVisited } from "./DistilleriesVisited"
import { getBourbonUsers } from "../../managers/BourbonUsersManager"


export const MembersPage = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getBourbonUsers().then(data => setUser(data))
    }, 
        []
    )

    return(<>
    <h2>Welcome Back {user.first_name}</h2>
    <h3>My Bourbons</h3>
        <article className="myBourbons">
             < BourbonsTried />   
        </article>
        <h3>My Cocktails</h3>
        <article className="myCocktails">
            < CocktailsTried /> 
        </article>
        <h3>My Distilleries</h3>
        <article className="myDistilleries">
            < DistilleriesVisited /> 
        </article>
    </>

    )
}