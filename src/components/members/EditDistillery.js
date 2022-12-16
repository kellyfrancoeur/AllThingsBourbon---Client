import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateDistilleryVisited, getDistilleryVisitedById } from "../../managers/DistilleriesVisitedManager"
import { getDistilleries } from "../../managers/DistilleriesManager"
import "./MemberPage.css"

export const EditDistillery = () => {
    const navigate = useNavigate()
    const { distilleryVisitedId } = useParams()
    const [distilleries, setDistilleries] = useState([])
    const [updateTriedDistillery, setUpdatedTriedDistillery] = useState({
        id: 0,
        distillery: 0,
        comments: "",
        rating: 0
    })

    useEffect(() => {
        getDistilleryVisitedById(distilleryVisitedId).then(setUpdatedTriedDistillery)
    },
        [distilleryVisitedId])

    useEffect(() => {
        getDistilleries().then(setDistilleries)
    }, []
    )

    const changeTriedDistilleryState = (evt) => {
        const copy = { ...updateTriedDistillery }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedTriedDistillery(copy)
    }

    return (
        <form className="distilleryForm">
            <h1 id="mTitle2">Update Distillery</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="distillery">Distillery:</label></h2>
                    <select id="distillery" className="drop_down" value={updateTriedDistillery.distilleries}
                        onChange={changeTriedDistilleryState}>

                        <option value={0}>Select Distillery</option>
                        {
                            distilleries.map((distillery) => {
                                const isSelected = distillery.id === updateTriedDistillery.distillery.id
                                return <option selected={isSelected ? true : false} value={`${distillery.id}`} key={`distillery--${distillery.id}`}>{distillery.name}</option>
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
                        id="comments"
                        required autoFocus
                        className="formControl"
                        value={updateTriedDistillery.comments}
                        onChange={changeTriedDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="rating">Rating: </label></h2>
                    <input type="number"
                        id="rating"
                        required autoFocus
                        className="formControl1"
                        min="0" max="5"
                        value={updateTriedDistillery.rating}
                        onChange={changeTriedDistilleryState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Distillery has been updated!")

                    const newTriedDistillery = {
                        id: updateTriedDistillery.id,
                        distillery: parseInt(updateTriedDistillery.distillery),
                        comments: updateTriedDistillery.comments,
                        rating: updateTriedDistillery.rating
                    }

                    updateDistilleryVisited(newTriedDistillery)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="addNew">Update Distillery</button>
        </form>
    )
}