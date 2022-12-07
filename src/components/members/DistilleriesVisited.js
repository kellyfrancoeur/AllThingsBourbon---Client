import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getDistilleriesVisited } from "../../managers/DistilleriesVisitedManager";

export const DistilleriesVisited = () => {
    const [visitedDistilleries, setVisitedDistilleries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getDistilleriesVisited().then(data => setVisitedDistilleries(data))
    }, []
    )

    return (<>
        <h2>My Distilleries</h2>
        <article className="myDistilleries">
            <div>
                <button className="add_distillery" onClick={() => {
                    navigate({ pathname: `/distilleries/${distillery.id}/add` })
                }}>Add A Distillery</button>
            </div>
            {
                visitedDistilleries.map(visitedDistillery => {
                    return <section key={`visitedDistillery--${visitedDistillery.id}`}>
                        <div>{visitedDistillery?.distillery?.name}</div>
                        <div>{visitedDistillery.comments}</div>
                        <div>{visitedDistillery.rating}</div>
                        <div>
                            <button className="edit_distillery" onClick={() => {
                                navigate({ pathname: `/distilleries/${distillery.id}/edit` })
                            }}>Edit</button>
                        </div>
                    </section>

                })
            }
        </article>

    </>

    )
}