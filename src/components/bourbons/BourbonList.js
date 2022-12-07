import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getBourbons, deleteBourbon } from "../../managers/BourbonManager.js"


export const BourbonList = (props) => {
    const [bourbons, setBourbons] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    // useEffect(
    //     () => {
    //         const searchedBourbons = bourbons.filter(distillery => {
    //             return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
    //                 || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
    //         })
    //         setBourbons(searchedBourbons)
    //     },
    //     [searchTermState]
    // )

    useEffect(() => {
        getBourbons().then(data => setBourbons(data))
    }, []
    )

    return (<>
        <h2>Bourbons</h2>
        <div>
            {
                bourbonUserObject.staff
                    ? <button className="add_bourbon" onClick={() => {
                        navigate({ pathname: "/bourbons/add" })
                    }}>Add A Bourbon</button>
                    : ""
            }
        </div>
        <article className="bourbons">
            {
                bourbons.map(bourbon => {
                    return <section key={`bourbon--${bourbon.id}`} className="bourbon">
                        <div className="bourbon_name">{bourbon.name}</div>
                        <div className="bourbon_proof">{bourbon.proof}</div>
                        <div className="bourbon_aroma">{bourbon.aroma}</div>
                        <div className="bourbon_taste">{bourbon.taste}</div>
                        <div className="bourbon_finish">{bourbon.finish}</div>
                        <div className="bourbon_description">{bourbon.description}</div>
                        <div className="bourbon_madeIn">{bourbon.made_in}</div>
                        <div className="bourbon_linkToBuy">{bourbon.link_to_buy}</div>
                        <div className="bourbon_bourbonImg">{bourbon.bourbon_img}</div>
                        <div className="bourbon_type">{bourbon?.type_of_bourbon?.type}</div>
                         
                        <div>
                            {
                                bourbonUserObject.staff
                                    ? <button className="update_bourbon" onClick={() => {
                                        navigate({ pathname: `/bourbons/${bourbon.id}/update` })
                                    }}>Update Bourbon</button>
                                    : ""
                            }
                        </div>
                        <div>
                            {
                                bourbonUserObject.staff
                                    ? <button className="delete_bourbon" onClick={() => {
                                        const bourbonDelete = {
                                            id: bourbon.id
                                        }
                                        deleteBourbon(bourbonDelete)
                                            .then(() => { window.location.reload() })
                                    }}
                                    >Delete Bourbon</button>
                                    : ""
                            }</div>
                    </section>
                })
            }
        </article>
    </>
    )
}