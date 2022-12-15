import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createBourbon } from "../../managers/BourbonManager"
import { getBourbonTypes } from "../../managers/BourbonTypeManager"
import "./StaffPage.css"

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
            <h1 id="mTitle2">Add A New Bourbon</h1>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="name">Name of Bourbon: </label></h2>
                    <input type="text" 
                        name="name" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Name of Bourbon"
                        value={newBourbon.name}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="proof">Proof: </label></h2>
                    <input type="number" 
                        name="proof" 
                        required autoFocus 
                        className="formControl1"
                        placeholder="Proof of Bourbon"
                        value={newBourbon.proof}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="aroma">Aroma: </label></h2>
                    <input type="text" 
                        name="aroma" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Aroma of Bourbon"
                        value={newBourbon.aroma}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="taste">Taste: </label></h2>
                    <input type="text" 
                        name="taste" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Taste of Bourbon"
                        value={newBourbon.taste}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="finish">Finish: </label></h2>
                    <input type="text" 
                        name="finish" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Finish of Bourbon"
                        value={newBourbon.finish}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="description">Description of Bourbon: </label></h2>
                    <input type="text" 
                        name="description" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Description of Bourbon"
                        value={newBourbon.description}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="made_in">Made In: </label></h2>
                    <input type="text" 
                        name="made_in" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Bourbon was Made In..."
                        value={newBourbon.made_in}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="link_to_buy">Purchase Bourbon: </label></h2>
                    <input type="text" 
                        name="link_to_buy" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Link to Purchase Bourbon"
                        value={newBourbon.link_to_buy}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="bourbon_img">Image of Bourbon: </label></h2>
                    <input type="text" 
                        name="bourbon_img" 
                        required autoFocus 
                        className="formControl"
                        placeholder="Link to Image of Bourbon"
                        value={newBourbon.bourbon_img}
                        onChange={changeBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <h2 id="mTitle4"><label htmlFor="type">Type of Bourbon:</label></h2>
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
                    window.alert("Bourbon has been added!")

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
                className="addNew">Add New Bourbon</button>
        </form>
    )
}