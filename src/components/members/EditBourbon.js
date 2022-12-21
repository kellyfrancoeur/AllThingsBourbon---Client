import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateBourbonTried, getBourbonTriedById } from "../../managers/BourbonsTriedManager"
import { getBourbons } from "../../managers/BourbonManager"
import { getDescriptors } from "../../managers/DescriptorsManager"
import "./MemberPage.css"

export const EditBourbon = () => {
    const navigate = useNavigate()
    const { bourbonTriedId } = useParams()
    const [bourbons, setBourbons] = useState([])
    const [chosenBourbon, setChosenBourbon] = useState(0)
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
        getBourbonTriedById(bourbonTriedId).then(data => {
            setUpdatedTriedBourbon(data)
            const selectedDescriptors = new Set()
            for (const descriptor of data.descriptors) {
                selectedDescriptors.add(descriptor.id)
            }
            setChosenDescriptors(selectedDescriptors)
        })
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

    useEffect(() => {
        setChosenBourbon(updateTriedBourbon.bourbon.id)
    }, [updateTriedBourbon]
    )

    const changeTriedBourbonState = (evt) => {
        const copy = { ...updateTriedBourbon }
        const propertyToModify = evt.target.id
        copy[propertyToModify] = evt.target.value
        setUpdatedTriedBourbon(copy)
    }

    return (
        <form className="bourbonForm" >
            <h1 id="mTitle2">Update Bourbon</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="bourbon">Bourbon:</label></h2>
                    <select
                        required autoFocus
                        id="bourbon"
                        className="drop_down"
                        value={chosenBourbon}
                        onChange={evt => setChosenBourbon(evt.target.value)}>

                        <option value={0}>Select Bourbon</option>
                        {
                            bourbons.map((bourbon) => {
                                return <option value={`${bourbon.id}`} key={`bourbon--${bourbon.id}`}>{bourbon.name}</option>
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
                        value={updateTriedBourbon.comments}
                        onChange={changeTriedBourbonState}
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
                        value={updateTriedBourbon.rating}
                        onChange={changeTriedBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="descriptor">Descriptors:</label></h2>
                    <div className="descriptorList">
                        {
                            descriptors.map((descriptor) => {
                                return <>
                                    <option value={`${descriptor.id}`} key={`descriptor--${descriptor.id}`}>{descriptor.label}</option>
                                    <input
                                        type="checkbox"
                                        className="addDescriptor"
                                        defaultChecked={chosenDescriptors.has(descriptor.id)}
                                        checked={chosenDescriptors.has(descriptor.id)}
                                        onChange={
                                            (evt) => {
                                                const copy = new Set(chosenDescriptors)
                                                if (copy.has(descriptor.id)) {
                                                    copy.delete(descriptor.id)
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
                className="addNew">Update Bourbon</button>
        </form>
    )
}
