import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateDistilleryVisited, getDistilleryVisitedById } from "../../managers/DistilleriesVisitedManager"
import { getDistilleries } from "../../managers/DistilleriesManager"

export const EditDistillery = () => {
    const navigate = useNavigate()
    const { distilleryVisitedId } = useParams()
    const [distilleries, setDistilleries ] = useState([])
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
        getDistilleries().then(setDistilleries )
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
            <h2 className="distilleryForm__description">Edit Distillery</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="distillery">Distillery:</label>
                    <select id="distillery" className="drop_down" value={updateTriedDistillery.name}
                    onChange={changeTriedDistilleryState}>
                        
                        <option value={0}>Select Distillery</option>
                        {
                            distilleries.map((distillery) =>{
                                return <option value={`${distillery.id}`} key={`distillery--${distillery.id}`}>{distillery.name}</option>
                            }

                            )
                            
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Comments: </label>
                    <input type="text" 
                        id="comments" 
                        required autoFocus 
                        className="form-control"
                        value={updateTriedDistillery.comments}
                        onChange={changeTriedDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rating: </label>
                    <input type="number" 
                        id="rating" 
                        required autoFocus 
                        className="form-control"
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
                className="btn btn-primary">Edit Distillery</button>
            </form>
            )
}