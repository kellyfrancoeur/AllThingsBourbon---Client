import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getBourbonById, updateBourbon } from "../../managers/BourbonManager";
import { getBourbonTypes } from "../../managers/BourbonTypeManager"
import "./StaffPage.css"

export const UpdateBourbon = () => {
    const navigate = useNavigate()
    const { bourbonId } = useParams()
    const [bourbonTypes, setBourbonTypes] = useState([])
    const [updatedBourbon, setUpdatedBourbon] = useState({
        name: "",
        proof: 0,
        aroma: "",
        taste: "",
        finish: "",
        description: "",
        made_in: "",
        link_to_buy: "",
        bourbon_img: "",
        type_of_bourbon: 0
    })

    useEffect(() => {
        getBourbonById(bourbonId).then(setUpdatedBourbon)
    },
        [bourbonId])

    useEffect(() => {
        getBourbonTypes().then(setBourbonTypes)
    }, []
    )

    const changeBourbonState = (evt) => {
        const copy = { ...updatedBourbon }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedBourbon(copy)
    }

    return (
        <form className="bourbonForm">
            <h1 id="mTitle2">Update Bourbon</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="name">Name of Bourbon: </label></h2>
                    <input type="text"
                        id="name"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.name}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="proof">Proof: </label></h2>
                    <input type="number"
                        id="proof"
                        required autoFocus
                        className="formControl1"
                        value={updatedBourbon.proof}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="aroma">Aroma: </label></h2>
                    <input type="text"
                        id="aroma"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.aroma}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="taste">Taste: </label></h2>
                    <input type="text"
                        id="taste"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.taste}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="finish">Finish: </label></h2>
                    <input type="text"
                        id="finish"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.finish}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="description">Description of Bourbon: </label></h2>
                    <input type="text"
                        id="description"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.description}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="made_in">Made In: </label></h2>
                    <input type="text"
                        id="made_in"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.made_in}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="link_to_buy">Purchase Bourbon: </label></h2>
                    <input type="text"
                        id="link_to_buy"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.link_to_buy}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="bourbon_img">Image of Bourbon: </label></h2>
                    <input type="text"
                        id="bourbon_img"
                        required autoFocus
                        className="formControl"
                        value={updatedBourbon.bourbon_img}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="type">Type of Bourbon:</label></h2>
                    <select id="types" className="drop_down" value={updatedBourbon.bourbonTypes}
                        onChange={changeBourbonState}>

                        <option value={0}>Select Type</option>
                        {
                            bourbonTypes.map((bourbonType) => {
                                const isSelected = bourbonType.id === updatedBourbon.type_of_bourbon.id
                                return <option selected={isSelected ? true : false} value={`${bourbonType.id}`} key={`bourbonType--${bourbonType.id}`}>{bourbonType.type}</option>
                            }

                            )

                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Bourbon has been updated!")

                    let selectedType = 0

                    updatedBourbon.type_of_bourbon.id
                        ? selectedType = updatedBourbon.type_of_bourbon.id
                        : selectedType = updatedBourbon.type_of_bourbon

                    const bourbon = {
                        name: updatedBourbon.name,
                        proof: updatedBourbon.proof,
                        aroma: updatedBourbon.aroma,
                        taste: updatedBourbon.taste,
                        finish: updatedBourbon.finish,
                        description: updatedBourbon.description,
                        made_in: updatedBourbon.made_in,
                        link_to_buy: updatedBourbon.link_to_buy,
                        bourbon_img: updatedBourbon.bourbon_img,
                        type_of_bourbon: selectedType
                    }

                    updateBourbon(bourbonId, bourbon)
                        .then(() => navigate("/bourbons"))
                }}
                className="addNew">Update Bourbon</button>
        </form>
    )
}