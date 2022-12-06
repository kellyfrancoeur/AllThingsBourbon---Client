import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createBourbon } from "../../managers/BourbonManager"
import { getBourbonTypes } from "../../managers/BourbonTypeManager"

export const NewBourbonForm = () => {
    const navigate = useNavigate()
    const [bourbonTypes, setBourbonTypes] = useState([])
    const [newBourbon, updateBourbon] = useState({
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
        getBourbonTypes().then(setBourbonTypes)
    }, []
    )
   
    const changeBourbonState = (domEvent) => {
        const value = domEvent.target.value
        updateBourbon({
            ...newBourbon,
            [domEvent.target.name]: value
        })
    }


    return (
        <form className="bourbonForm">
            <h2 className="bourbonForm__description">Create A New Bourbon</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Bourbon: </label>
                    <input type="text" 
                        name="name" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Name of Bourbon"
                        value={newBourbon.name}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="proof">Proof: </label>
                    <input type="number" 
                        name="proof" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Proof of Bourbon"
                        value={newBourbon.proof}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="aroma">Aroma: </label>
                    <input type="text" 
                        name="aroma" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Aroma of Bourbon"
                        value={newBourbon.aroma}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taste">Taste: </label>
                    <input type="text" 
                        name="taste" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Taste of Bourbon"
                        value={newBourbon.taste}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="finish">Finish: </label>
                    <input type="text" 
                        name="finish" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Finish of Bourbon"
                        value={newBourbon.finish}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of Bourbon: </label>
                    <input type="text" 
                        name="description" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Description of Bourbon"
                        value={newBourbon.description}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="made_in">Made In: </label>
                    <input type="text" 
                        name="made_in" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Bourbon was Made In..."
                        value={newBourbon.made_in}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="link_to_buy">Purchase Bourbon: </label>
                    <input type="text" 
                        name="link_to_buy" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Link to Purchase Bourbon"
                        value={newBourbon.link_to_buy}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bourbon_img">Image of Bourbon: </label>
                    <input type="text" 
                        name="bourbon_img" 
                        required autoFocus 
                        className="form-control"
                        placeholder="Image of Bourbon"
                        value={newBourbon.bourbon_img}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type of Bourbon:</label>
                    <select name="type" className="drop_down" value={newBourbon.type}
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
                        name: newBourbon.name,
                        proof: newBourbon.proof,
                        aroma: newBourbon.aroma,
                        taste: newBourbon.taste,
                        finish: newBourbon.finish,
                        description: newBourbon.description,
                        made_in: newBourbon.made_in,
                        link_to_buy: newBourbon.link_to_buy,
                        bourbon_img: newBourbon.bourbon_img,
                        type_of_bourbon: parseInt(newBourbon.type)
                    }

                    createBourbon(bourbon)
                        .then(() => navigate("/bourbons"))
                }}
                className="btn btn-primary">Add New Bourbon</button>
        </form>
    )
}