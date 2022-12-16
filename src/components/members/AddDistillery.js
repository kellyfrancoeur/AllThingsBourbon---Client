import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createDistilleryVisited } from "../../managers/DistilleriesVisitedManager"
import { getDistilleries } from "../../managers/DistilleriesManager"

export const AddDistillery = () => {
    const navigate = useNavigate()
    const [distilleries, setDistilleries] = useState([])
    const [triedNewDistillery, updateNewDistillery] = useState({
        distillery: 0,
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getDistilleries().then(setDistilleries)
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
                    <select name="distillery" className="drop_down" value={triedNewDistillery.name}
                        onChange={changeTriedDistilleryState}>

                        <option value={0}>Select Distillery</option>
                        {
                            distilleries.map((distillery) => {
                                return <option value={`${distillery.id}`} key={`distillery--${distillery.id}`}>{distillery.name}</option>
                            }

                            )

                        }
                    </select>
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
                        distillery: parseInt(triedNewDistillery.distillery),
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