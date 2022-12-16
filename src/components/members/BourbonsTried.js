import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getBourbonsTried, deleteBourbonTried } from "../../managers/BourbonsTriedManager";
import "./MemberPage.css"

export const BourbonsTried = () => {
    const [triedBourbons, setTriedBourbons] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getBourbonsTried().then(data => setTriedBourbons(data))
    }, []
    )

    return (<>
        <article className="myBourbons">
            <div>
                <button className="addButton" onClick={() => {
                    navigate({ pathname: `/bourbonstried/add` })
                }}>Add A Bourbon</button>
            </div>
            {
                triedBourbons.map(triedBourbon => {
                    return <section key={`triedBourbon--${triedBourbon.id}`}>
                        <div className="triedInfo">
                            <div id="label">{triedBourbon?.bourbon?.name}</div>
                            <div id="comments">Thoughts:</div>
                            <div>{triedBourbon.comments}</div>
                            <div id="rating">Rating:</div>
                            <div>{triedBourbon.rating}</div>
                            <div id="descriptors">Descriptors:</div>
                            {
                                triedBourbon.descriptors.map(descriptor => {
                                    return <div key={`descriptor--${descriptor.id}`}>{descriptor.label}</div>
                                })
                            }
                            <div>
                                <button className="edit_bourbon" onClick={() => {
                                    navigate({ pathname: `/bourbonstried/${triedBourbon.id}/edit` })
                                }}>Edit</button>
                            </div>
                            <div>
                                <button className="delete_bourbon" onClick={() => {
                                    window.alert("Bourbon has been deleted!")
                                    const bourbonTriedDelete = {
                                        id: triedBourbon.id
                                    }
                                    deleteBourbonTried(bourbonTriedDelete)
                                        .then(() => { window.location.reload() })
                                }}
                                >Delete</button></div>
                        </div>
                    </section>

                })
            }
        </article>
    </>
    )
}
