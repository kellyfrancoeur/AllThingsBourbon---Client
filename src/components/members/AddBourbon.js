import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createBourbonTried } from "../../managers/BourbonsTriedManager"
import { getBourbons } from "../../managers/BourbonManager"
import { getDescriptors } from "../../managers/DescriptorsManager"
import "./MemberPage.css"

export const AddBourbon = () => {
    const navigate = useNavigate()
    const [bourbons, setBourbons] = useState([])
    const [descriptors, setDescriptors] = useState([])
    const [chosenDescriptors, setChosenDescriptors] = useState(new Set())
    const [triedNewBourbon, updateNewBourbon] = useState({
        bourbon: 0,
        comments: "",
        rating: 0,
        descriptors: []
    })


    useEffect(() => {
        getBourbons().then(setBourbons)
    }, []
    )

    useEffect(() => {
        getDescriptors().then(setDescriptors)
    }, []
    )

    const changeTriedBourbonState = (domEvent) => {
        const value = domEvent.target.value
        updateNewBourbon({
            ...triedNewBourbon,
            [domEvent.target.name]: value
        })
    }

    const sortedBourbons = bourbons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })

    return (
        <form className="bourbonForm">
            <h1 id="mTitle2">Add A New Bourbon</h1>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="bourbon">Bourbon:</label></h2>
                    <select name="bourbon" className="drop_down" value={triedNewBourbon.name}
                        onChange={changeTriedBourbonState}>

                        <option value={0}>Select Bourbon</option>
                        {
                            sortedBourbons.map((bourbon) => {
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
                        name="comments"
                        required autoFocus
                        className="formControl"
                        placeholder="What did you think?"
                        value={triedNewBourbon.comments}
                        onChange={changeTriedBourbonState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <h2 id="mTitle4"><label htmlFor="rating">Rating: </label></h2>
                    <input type="number"
                        name="rating"
                        required autoFocus
                        className="formControl1"
                        min="0" max="5"
                        value={triedNewBourbon.rating}
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
                                        value={triedNewBourbon.descriptors}
                                        onChange={
                                            (evt) => {
                                                const copy = new Set(chosenDescriptors)
                                                if (copy.has(descriptor.id)) {
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
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    window.alert("Bourbon has been added!")

                    const newTriedBourbon = {
                        bourbon: parseInt(triedNewBourbon.bourbon),
                        comments: triedNewBourbon.comments,
                        rating: triedNewBourbon.rating,
                        descriptors: Array.from(chosenDescriptors)
                    }

                    createBourbonTried(newTriedBourbon)
                        .then(() => navigate({ pathname: "/mybourbons" }))
                }}
                className="addNew">Add Bourbon</button>
        </form>
    )
}
