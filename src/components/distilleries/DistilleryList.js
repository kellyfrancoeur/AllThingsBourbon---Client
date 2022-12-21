import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteDistillery } from "../../managers/DistilleriesManager.js"
import "./DistilleryList.css"

export const DistilleryList = ({ searchTermState }) => {
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

    const sortedDistilleries = filteredDistilleries.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })

    return (<>
        <h1 id="dTitle1">Distilleries</h1>
        <div>
            {
                bourbonUserObject.staff
                    ? <div className="container"> 
                    <img id="listimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dX9YZXbxAEPNQWeEklJtVygsisZKoyd1wQ&usqp=CAU" height="125" width="200"></img>
                    <div className="middle">
                        <div className="listtext">
                            <a href="/distilleries/add">Add A Distillery</a>
                        </div>
                    </div>
                    </div>
                    : ""
            }
        </div>
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
                                                    .then(() => { window.location.reload() })
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