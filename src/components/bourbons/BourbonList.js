import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
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
                        <div className="bourbon_name"><u><b>{bourbon.name}</b></u></div>
                        <div className="bourbon_type"><b>Type of Bourbon:</b>{bourbon?.type_of_bourbon?.type}</div>
                        <div className="bourbon_proof"><b>Proof:</b>{bourbon.proof}</div>
                        <div className="bourbon_aroma"><b>Aroma:</b>{bourbon.aroma}</div>
                        <div className="bourbon_taste"><b>Taste:</b>{bourbon.taste}</div>
                        <div className="bourbon_finish"><b>Finish:</b>{bourbon.finish}</div>
                        <div className="bourbon_description"><b>Description:</b>{bourbon.description}</div>
                        <div className="bourbon_madeIn"><b>Made In:</b>{bourbon.made_in}</div>
                        <a.href to ={bourbon.link_to_buy}>Buy Bourbon</a.href>
                        <div className="bourbon_bourbonImg">
                            <img src={bourbon.bourbon_img} height="205" width="175"/></div>
                         
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