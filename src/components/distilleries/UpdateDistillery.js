import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getDistilleryById, updateDistillery } from "../../managers/DistilleriesManager";
import "./StaffPage.css"

export const UpdateDistillery = () => {
    const navigate = useNavigate()
    const { distilleryId } = useParams()
    const [updatedDistillery, setUpdatedDistillery] = useState({
        id: 0,
        name: "",
        location: "",
        description: "",
        link_to_site: "",
        distillery_img: ""
    })

    useEffect(() => {
        getDistilleryById(distilleryId).then(setUpdatedDistillery)
    },
        [distilleryId])

    const changeDistilleryState = (evt) => {
        const copy = { ...updatedDistillery }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedDistillery(copy)
    }

    return (
        <form className="distilleryForm">
            <h1 id="mTitle2">Update Distillery</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Name of Distillery: </label></h2>
                    <input type="text"
                        id="name"
                        required autoFocus
                        className="formControl"
                        value={updatedDistillery.name}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="location">Location of Distillery: </label></h2>
                    <input type="text"
                        id="location"
                        required autoFocus
                        className="form-control"
                        value={updatedDistillery.location}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="description">Description of Distillery: </label></h2>
                    <input type="text"
                        id="description"
                        required autoFocus
                        className="form-control"
                        value={updatedDistillery.description}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="link_to_site">Distillery Website: </label></h2>
                    <input type="text"
                        id="link_to_site"
                        required autoFocus
                        className="form-control"
                        value={updatedDistillery.link_to_site}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="distillery_img">Image of Distillery: </label></h2>
                    <input type="text"
                        id="distillery_img"
                        required autoFocus
                        className="form-control"
                        value={updatedDistillery.distillery_img}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Distillery has been updated!")

                    const distillery = {
                        id: updatedDistillery.id,
                        name: updatedDistillery.name,
                        location: updatedDistillery.location,
                        description: updatedDistillery.description,
                        link_to_site: updatedDistillery.link_to_site,
                        distillery_img: updatedDistillery.distillery_img
                    }

                    updateDistillery(distillery)
                        .then(() => navigate("/distilleries"))
                }}
                className="addNew">Update Distillery</button>
        </form>
    )
}