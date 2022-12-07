import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getBourbonsTried } from "../../managers/BourbonsTriedManager";

export const BourbonsTried = () => {
    const [triedBourbons, setTriedBourbons] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getBourbonsTried().then(data => setTriedBourbons(data))
    }, []
    )

    return (<>
        <h2>My Bourbons</h2>
        <article className="myBourbons">
            <div>
                <button className="add_bourbon" onClick={() => {
                    navigate({ pathname: `/bourbons/${bourbon.id}/add` })
                }}>Add A Bourbon</button>
            </div>
            {
                triedBourbons.map(triedBourbon => {
                    return <section key={`triedBourbon--${triedBourbon.id}`}>
                        <div>{triedBourbon?.bourbon?.name}</div>
                        <div>{triedBourbon.comments}</div>
                        <div>{triedBourbon.rating}</div>
                        <div>{triedBourbon?.descriptors?.label}</div>
                        <div>
                            <button className="edit_bourbon" onClick={() => {
                                navigate({ pathname: `/bourbons/${bourbon.id}/edit` })
                            }}>Edit</button>
                        </div>
                    </section>

                })
            }
        </article>

    </>

    )
}