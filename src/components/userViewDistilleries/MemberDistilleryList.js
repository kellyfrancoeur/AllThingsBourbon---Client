import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDistilleryVisited } from "../../managers/DistilleriesVisitedManager"
import "./MemberDistillery.css"

export const MemberDistilleryList = ({ searchTermState }) => {
    const [distilleries, setDistilleries] = useState([])
    const [filteredDistilleries, setFilteredDistilleries] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            const searchedDistilleries = distilleries.filter(distillery => {
                return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
                    || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredDistilleries(searchedDistilleries)
        },
        [searchTermState]
    )

    const getAllDistilleries = () => {
        fetch("http://localhost:8000/distilleries", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
            }
        })
            .then(response => response.json())
            .then((distilleryArray) => {
                setFilteredDistilleries(distilleryArray)
                setDistilleries(distilleryArray)
            })

    }


    useEffect(
        () => {
            getAllDistilleries()
        },
        []
    )

    const sortedDistilleries = filteredDistilleries.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })

    return (<>
        <h1 id="dTitle1">Distilleries</h1>
        <article className="distilleries">
            {
                sortedDistilleries.map(distillery => {
                    return <section key={`distillery--${distillery.id}`} className="distillery">
                        <div className="distilleryView">
                            <div className="distilleryImg">
                                <img src={distillery.distillery_img} height="450" width="400" />
                            </div>
                            <div className="distilleryInfo">
                                <h3 id="dTitle3"><a target="_blank" href={distillery.link_to_site}><b><u>{distillery.name}</u></b></a></h3>
                                <h4 id="dTitle4"><i>{distillery.location}</i></h4>
                                <div>{distillery.description}</div>
                                <div>
                                <button className="addMyCocktail" onClick={() => {
                                                createDistilleryVisited()
                                                .then(res => res.json())
                                                .then(() =>{
                                                  getAllDistilleries()
                                                })
                                                    navigate({ pathname: `/distilleriesvisited/memberAdd/${distillery.id}`})
                                            }}>Add to My Distilleries</button>
                                    </div> 
                            </div>
                        </div>
                    </section>
                })
            }
        </article>
    </>
    )
}