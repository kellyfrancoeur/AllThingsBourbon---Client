import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { isStaff } from "../../utils/isStaff"
import { getDistilleries, deleteDistillery } from "../../managers/DistilleriesManager.js"


export const DistilleryList = (props) => {
    const [distilleries, setDistilleries] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    // useEffect(
    //     () => {
    //         const searchedDistilleries = distilleries.filter(distillery => {
    //             return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
    //                 || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
    //         })
    //         setDistilleries(searchedDistilleries)
    //     },
    //     [searchTermState]
    // )

    useEffect(() => {
        getDistilleries().then(data => setDistilleries(data))
    }, []
    )


    return (<>
        <h2>Distilleries</h2>
        <div>
            {
                bourbonUserObject.staff
                    ? <button className="add_distillery" onClick={() =>
                        {navigate({ pathname: "/distilleries/add" })
                    }}>Add A Distillery</button>
                    : ""
            }
        </div>
        <article className="distilleries">
            {
                distilleries.map(distillery => {
                    return <section key={`distillery--${distillery.id}`} className="distillery">
                        <div className="distillery_name">{distillery.name}</div>
                        <div className="distillery_location">{distillery.location}</div>
                        <div className="distillery_description">{distillery.description}</div>
                        <div className="distillery_linkToSite">{distillery.link_to_site}</div>
                        <div className="distillery_distilleryImg">{distillery.distillery_img}</div>

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
                                        const distilleryDelete = {
                                        id: distillery.id
                                    }
                                    deleteDistillery(distilleryDelete)
                                        .then(() => {window.location.reload()})
                                }}
                                >Delete Distillery</button>
                                : ""
                        }</div>
                    </section>
                })
            }
        </article>
    </>
    )
}