import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateBourbonTried, getBourbonTriedById } from "../../managers/BourbonsTriedManager"
import { getBourbons } from "../../managers/BourbonManager"
import { getDescriptors } from "../../managers/DescriptorsManager"

export const EditBourbon = () => {
    const navigate = useNavigate()
    const { bourbonTriedId } = useParams()
    const [bourbons, setBourbons] = useState([])
    const [descriptors, setDescriptors] = useState([])
    const [chosenDescriptors, setChosenDescriptors] = useState(new Set())
    const [updateTriedBourbon, setUpdatedTriedBourbon] = useState({
        id: 0,
        bourbon: 0,
        comments: "",
        rating: 0,
        descriptors: [] 
    })
    
    useEffect(() => {
        getBourbonTriedById(bourbonTriedId).then(setUpdatedTriedBourbon)
    },
        [bourbonTriedId])

    useEffect(() => {
        getBourbons().then(setBourbons)
    }, []
    )

    useEffect(() => {
        getDescriptors().then(setDescriptors)
    }, []
    )

    const changeTriedBourbonState = (evt) => {
        const copy = { ...updateTriedBourbon }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedTriedBourbon(copy)
    }

    return (
        <form className="bourbonForm">
            <h2 className="bourbonForm__description">Add A New Bourbon</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bourbon">Bourbon:</label>
                    <select id="bourbon" className="drop_down" value={updateTriedBourbon.name}
                    onChange={changeTriedBourbonState}>
                        
                        <option value={0}>Select Bourbon</option>
                        {
                            bourbons.map((bourbon) =>{
                                return <option value={`${bourbon.id}`} key={`bourbon--${bourbon.id}`}>{bourbon.name}</option>
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
                        value={updateTriedBourbon.comments}
                        onChange={changeTriedBourbonState}
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
                        value={updateTriedBourbon.rating}
                        onChange={changeTriedBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="descriptor">Descriptor:</label>
                    {
                        descriptors.map((descriptor) =>{
                            return<>
                            <option value={`${descriptor.id}`} key={`descriptor--${descriptor.id}`}>{descriptor.label}</option>
                            <input
                                type="checkbox"
                                className="addDescriptor"
                                value={updateTriedBourbon.descriptors}
                                onChange={
                                    (evt) => {
                                        const copy = new Set(chosenDescriptors)
                                        if(copy.has(descriptor.id)){
                                            copy.remove(descriptor.id)
                                        } else {
                                            copy.add(descriptor.id)
                                        }
                                        setChosenDescriptors(copy)
                                    }
                                }
                                />
                            </>
                        }
                        )
                    }
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Bourbon has been updated!")

                    const newTriedBourbon = {
                        id: updateTriedBourbon.id,
                        bourbon: parseInt(updateTriedBourbon.bourbon),
                        comments: updateTriedBourbon.comments,
                        rating: updateTriedBourbon.rating,
                        descriptors: Array.from(chosenDescriptors)
                    }

                    updateBourbonTried(newTriedBourbon)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="btn btn-primary">Add Bourbon</button>
            </form>
            )
}
