import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createDistilleryVisited } from "../../managers/DistilleriesVisitedManager"
import { getDistilleryById } from "../../managers/DistilleriesManager"

export const MemberAddDistilleryFromPage = () => {
    const navigate = useNavigate()
    const { distilleryId } = useParams()
    const [distillery, setDistillery] = useState([])
    const [triedNewDistillery, updateNewDistillery] = useState({
        distillery: "",
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getDistilleryById(distilleryId).then(setDistillery)
    }, []
    )

    const changeTriedDistilleryState = (domEvent) => {
        const value = domEvent.target.value
        updateNewDistillery({
            ...triedNewDistillery,
            [domEvent.target.name]: value
        })
    }

    return (
        <form className="distilleryForm">
            <h1 id="mTitle2">Add A New Distillery</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="distillery">Distillery:</label></h2>
                    <input name="text" className="formControl" value={distillery.name}
                        onChange={changeTriedDistilleryState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Comments: </label></h2>
                    <input type="text"
                        name="comments"
                        required autoFocus
                        className="formControl"
                        placeholder="What did you think?"
                        value={triedNewDistillery.comments}
                        onChange={changeTriedDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="rating">Rating: </label></h2>
                    <input type="number"
                        name="rating"
                        required autoFocus
                        className="formControl1"
                        min="0" max="5"
                        value={triedNewDistillery.rating}
                        onChange={changeTriedDistilleryState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Distillery has been added!")

                    const newTriedDistillery = {
                        distillery: distillery.id,
                        comments: triedNewDistillery.comments,
                        rating: triedNewDistillery.rating
                    }

                    createDistilleryVisited(newTriedDistillery)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="addNew">Add Distillery</button>
        </form>
    )
}