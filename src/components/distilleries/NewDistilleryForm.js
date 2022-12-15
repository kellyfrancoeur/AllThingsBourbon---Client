import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createDistillery } from "../../managers/DistilleriesManager"
import "./StaffPage.css"

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
            <h1 id="mTitle2">Add A New Distillery</h1>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="name">Name of Distillery: </label></h2>
                    <input type="text" 
                        name="name" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Name of Distillery"
                        value={newDistillery.name}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="location">Location of Distillery: </label></h2>
                    <input type="text" 
                        name="location" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Location of Distillery"
                        value={newDistillery.location}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="description">Description of Distillery: </label></h2>
                    <input type="text" 
                        name="description" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Description of Distillery"
                        value={newDistillery.description}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="link_to_site">Distillery Website: </label></h2>
                    <input type="text" 
                        name="link_to_site" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Distillery Website"
                        value={newDistillery.link_to_site}
                        onChange={changeDistilleryState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="distillery_img">Image of Distillery: </label></h2>
                    <input type="text" 
                        name="distillery_img" 
                        required autoFocus 
                        className="formControl"
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
                className="addNew">Add New Distillery</button>
        </form>
    )
}