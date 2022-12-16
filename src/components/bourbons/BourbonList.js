import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteBourbon } from "../../managers/BourbonManager.js"
import "./BourbonList.css"

export const BourbonList = ({ searchTermState }) => {
    const [bourbons, setBourbons] = useState([])
    const [filterBourbons, setFiltered] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    useEffect(
        () => {
            const searchedBourbons = bourbons.filter(bourbon => {
                return bourbon?.name?.toLowerCase().includes(searchTermState.toLowerCase())
                    || bourbon?.type_of_bourbon?.type.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFiltered(searchedBourbons)
        },
        [searchTermState]
    )

    const getAllBourbons = () => {
        fetch("http://localhost:8000/bourbons", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
            }
        })
            .then(response => response.json())
            .then((bourbonArray) => {
                setFiltered(bourbonArray)
                setBourbons(bourbonArray)
            })

    }


    useEffect(
        () => {
            getAllBourbons()
        },
        []
    )

    return (<>
        <h1 id="bTitle1">Bourbons</h1>
        <div className="add_bourbon">
            {
                bourbonUserObject.staff
                    ? <button onClick={() => {
                        navigate({ pathname: "/bourbons/add" })
                    }}>Add A Bourbon</button>
                    : ""
            }
        </div>
        <article className="bourbons">
            {
                filterBourbons.map(bourbon => {
                    return <section key={`bourbon--${bourbon.id}`} className="bourbon">
                        <div className="bourbonView">
                            <div className="bourbonImg">
                                <img src={bourbon.bourbon_img} height="400" width="275" />
                            </div>
                            <div className="bourbonInfo">
                                <h3 id="bTitle3"><u><b>{bourbon.name}</b></u></h3>
                                <div className="bourbonType"><b><u>Type of Bourbon:</u></b></div>
                                <div>{bourbon?.type_of_bourbon?.type}</div>
                                <div className="bourbonProof"><b><u>Proof:</u></b></div>
                                <div>{bourbon.proof}</div>
                                <div className="bourbonAroma"><b><u>Aroma:</u></b></div>
                                <div>{bourbon.aroma}</div>
                                <div className="bourbonTaste"><b><u>Taste:</u></b></div>
                                <div>{bourbon.taste}</div>
                                <div className="bourbonFinish"><b><u>Finish:</u></b></div>
                                <div>{bourbon.finish}</div>
                                <div className="bourbonDescription"><b><u>Description:</u></b></div>
                                <div>{bourbon.description}</div>
                                <div className="bourbonMadeIn"><b><u>Made In:</u></b></div>
                                <div>{bourbon.made_in}</div>
                                <div className="buyBourbon"><a target="_blank" href={bourbon.link_to_buy}>Buy Bourbon</a></div>
                                <div>
                                    {
                                        bourbonUserObject.staff
                                            ? <button className="update_bourbon" onClick={() => {
                                                navigate({ pathname: `/bourbons/${bourbon.id}/update` })
                                            }}>Update Bourbon</button>
                                            : ""
                                    }
                                </div>
                                <div>
                                    {
                                        bourbonUserObject.staff
                                            ? <button className="delete_bourbon" onClick={() => {
                                                window.alert("Bourbon has been deleted!")
                                                const bourbonDelete = {
                                                    id: bourbon.id
                                                }
                                                deleteBourbon(bourbonDelete)
                                                    .then(() => { window.location.reload() })
                                            }}
                                            >Delete Bourbon</button>
                                            : ""
                                    }</div>
                            </div>
                        </div>
                    </section>
                })
            }
        </article>
    </>
    )
}