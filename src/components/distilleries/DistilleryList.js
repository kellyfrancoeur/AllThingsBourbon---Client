import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getDistilleries, deleteDistillery } from "../../managers/DistilleriesManager.js"
import "./DistilleryList.css"

export const DistilleryList = ({searchTermState}) => {
    const [distilleries, setDistilleries] = useState([])
    const [filteredDistilleries, setFilteredDistilleries] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

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

    return (<>
        <h1 id="dTitle1">Distilleries</h1>
        <div className="add_distillery">
            {
                bourbonUserObject.staff
                    ? <button onClick={() =>
                        {navigate({ pathname: "/distilleries/add" })
                    }}>Add A Distillery</button>
                    : ""
            }
        </div>
        <article className="distilleries">
            {
                filteredDistilleries.map(distillery => {
                    return <section key={`distillery--${distillery.id}`} className="distillery">
                        <div className="distilleryView">
                        <div className="distilleryImg">
                            <img src={distillery.distillery_img} height="450" width="400"/>
                            </div>
                        <div className="distilleryInfo">
                        <h3 id="dTitle3"><a target="_blank" href={distillery.link_to_site}><b><u>{distillery.name}</u></b></a></h3>
                        <h4 id="dTitle4"><i>{distillery.location}</i></h4>
                        <div>{distillery.description}</div>
                        <div>
                            {
                                bourbonUserObject.staff
                                ? <button className="update_distillery" onClick={() => {
                                    navigate({ pathname: `/distilleries/${distillery.id}/update` })
                                }}>Update Distillery</button>
                                : ""
                            }
                        </div>
                        <div>
                            {
                                bourbonUserObject.staff
                                ? <button className="delete_distillery" onClick={() => {
                                    window.alert("Distillery has been deleted!")
                                    const distilleryDelete = {
                                        id: distillery.id
                                    }
                                    deleteDistillery(distilleryDelete)
                                    .then(() => {window.location.reload()})
                                }}
                                >Delete Distillery</button>
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