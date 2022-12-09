import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createDistillery } from "../../managers/DistilleriesManager"

export const NewDistilleryForm = () => {
    const navigate = useNavigate()
    const [newDistillery, updateDistillery] = useState({
        name: "",
        location: "",
        description: "",
        link_to_site: "",
        distillery_img:""
    })

   
    const changeDistilleryState = (domEvent) => {
        const value = domEvent.target.value
        updateDistillery({
            ...newDistillery,
            [domEvent.target.name]: value
        })
    }


    return (
        <form className="distilleryForm">
            <h2 className="distilleryForm__description">Create A New Distillery</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Distillery: </label>
                    <input type="text" 
                        name="name" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Name of Distillery"
                        value={newDistillery.name}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location of Distillery: </label>
                    <input type="text" 
                        name="location" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Location of Distillery"
                        value={newDistillery.location}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of Distillery: </label>
                    <input type="text" 
                        name="description" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Description of Distillery"
                        value={newDistillery.description}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="link_to_site">Distillery Website: </label>
                    <input type="text" 
                        name="link_to_site" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Distillery Website"
                        value={newDistillery.link_to_site}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="distillery_img">Image of Distillery: </label>
                    <input type="text" 
                        name="distillery_img" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Image of Distillery"
                        value={newDistillery.distillery_img}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Distillery has been added!")

                    const distillery = {
                        name: newDistillery.name,
                        location: newDistillery.location,
                        description: newDistillery.description,
                        link_to_site: newDistillery.link_to_site,
                        distillery_img: newDistillery.distillery_img
                    }

                    createDistillery(distillery)
                        .then(() => navigate("/distilleries"))
                }}
                className="btn btn-primary">Add New Distillery</button>
        </form>
    )
}