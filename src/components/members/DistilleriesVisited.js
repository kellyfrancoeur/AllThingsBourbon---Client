import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getDistilleriesVisited, deleteDistilleryVisited } from "../../managers/DistilleriesVisitedManager";

export const DistilleriesVisited = () => {
    const [visitedDistilleries, setVisitedDistilleries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getDistilleriesVisited().then(data => setVisitedDistilleries(data))
    }, []
    )

    return (<>
        <article className="myDistilleries">
            <div>
                <button className="addButton" onClick={() => {
                    navigate({ pathname: `/distilleriesvisited/add` })
                }}>Add A Distillery</button>
            </div>
            {
                visitedDistilleries.map(visitedDistillery => {
                    return <section key={`visitedDistillery--${visitedDistillery.id}`}>
                        <div className="triedInfo">
                            <div id="label">{visitedDistillery?.distillery?.name}</div>
                            <div id="comments">Thoughts:</div>
                            <div>{visitedDistillery.comments}</div>
                            <div id="rating">Rating:</div>
                            <div>{visitedDistillery.rating}</div>
                            <div>
                                <button className="edit_distillery" onClick={() => {
                                    navigate({ pathname: `/distilleriesvisited/${visitedDistillery.id}/edit` })
                                }}>Edit</button>
                            </div>
                            <div>
                                <button className="delete_distillery" onClick={() => {
                                    window.alert("Distillery has been deleted!")
                                    const distilleryVisitedDelete = {
                                        id: visitedDistillery.id
                                    }
                                    deleteDistilleryVisited(distilleryVisitedDelete)
                                        .then(() => { window.location.reload() })
                                }}
                                >Delete</button>
                            </div>
                        </div>
                    </section>
                })
            }
        </article>

    </>

    )
}


