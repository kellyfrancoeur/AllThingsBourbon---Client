import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getBourbonById, updateBourbon } from "../../managers/BourbonManager";
import { getBourbonTypes } from "../../managers/BourbonTypeManager"


export const UpdateBourbon = () => {
    const navigate = useNavigate()
    const { bourbonId } = useParams()
    const [bourbonTypes, setBourbonTypes] = useState([])
    const [updatedBourbon, setUpdatedBourbon] = useState({
        id: 0,
        name: "",
        proof: 0,
        aroma: "",
        taste: "",
        finish: "",
        description: "",
        made_in: "",
        link_to_buy: "",
        bourbon_img:"",
        type_of_bourbon: 0
    })

    useEffect(() => {
        getBourbonById(bourbonId).then(setUpdatedBourbon)
    },
        [])

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
            <h2 className="bourbonForm__description">Update Bourbon</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Bourbon: </label>
                    <input type="text" 
                        id="name" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.name}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="proof">Proof: </label>
                    <input type="number" 
                        id="proof" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.proof}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="aroma">Aroma: </label>
                    <input type="text" 
                        id="aroma" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.aroma}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taste">Taste: </label>
                    <input type="text" 
                        id="taste" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.taste}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="finish">Finish: </label>
                    <input type="text" 
                        id="finish" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.finish}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of Bourbon: </label>
                    <input type="text" 
                        id="description" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.description}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="made_in">Made In: </label>
                    <input type="text" 
                        id="made_in" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.made_in}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="link_to_buy">Purchase Bourbon: </label>
                    <input type="text" 
                        id="link_to_buy" 
                        required autoFocus 
                        value={updatedBourbon.link_to_buy}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bourbon_img">Image of Bourbon: </label>
                    <input type="text" 
                        id="bourbon_img" 
                        required autoFocus 
                        className="form-control"
                        value={updatedBourbon.bourbon_img}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type of Bourbon:</label>
                    <select id="type" className="drop_down" value={updatedBourbon.type}
                    onChange={changeBourbonState}>
                        
                        <option value={0}>Select Type</option>
                        {
                            bourbonTypes.map((bourbonType) =>{
                                return <option value={`${bourbonType.id}`} key={`bourbonType--${bourbonType.id}`}>{bourbonType.type}</option>
                            }

                            )
                            
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const bourbon = {
                        id: updatedBourbon.id,
                        name: updatedBourbon.name,
                        proof: updatedBourbon.proof,
                        aroma: updatedBourbon.aroma,
                        taste: updatedBourbon.taste,
                        finish: updatedBourbon.finish,
                        description: updatedBourbon.description,
                        made_in: updatedBourbon.made_in,
                        link_to_buy: updatedBourbon.link_to_buy,
                        bourbon_img: updatedBourbon.bourbon_img,
                        type_of_bourbon: parseInt(updatedBourbon.type)
                    }

                    updateBourbon(bourbon)
                        .then(() => navigate("/bourbons"))
                }}
                className="btn btn-primary">Update Bourbon</button>
        </form>
    )
}