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
                        <a target="_blank" href={distillery.link_to_site}><b><u>{distillery.name}</u></b></a>
                        <div className="distillery_location"><i>{distillery.location}</i></div>
                        <div className="distillery_description">{distillery.description}</div>
                        <div className="distillery_distilleryImg">
                            <img src={distillery.distillery_img} height="205" width="175"/></div>

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
                    </section>
                })
            }
        </article>
    </>
    )
}