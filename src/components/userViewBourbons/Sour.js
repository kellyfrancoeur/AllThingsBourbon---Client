import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getBourbons } from "../../managers/BourbonManager"
import { createBourbonTried } from "../../managers/BourbonsTriedManager"
import "./userViewBourbon.css"

export const SourMashBourbons = ({ searchTermState }) => {
    const [bourbons, setBourbons] = useState([])
    const [filterBourbons, setFiltered] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getBourbons().then(data => setBourbons(data))
    }, []
    )

    useEffect(
        () => {
            const searchedBourbons = bourbons.filter(bourbon => {
                return bourbon?.name?.toLowerCase().includes(searchTermState.toLowerCase())
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

    const sortedBourbons = filterBourbons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })

    return (<>
        <h1 id="bTitle2">Sour Mash Bond Bourbons</h1>
        <article className="bourbons">
            {
                sortedBourbons.map((bourbon) => {
                    if (bourbon.type_of_bourbon.id === 5) {
                        return <section key={`bourbon--${bourbon.id}`} className="bourbon">
                            <div className="bourbonView">
                                <div className="bourbonImg">
                                    <img id="bimg" src={bourbon.bourbon_img} height="400" width="275" />
                                </div>
                                <div className="bourbonInfo">
                                    <h3 id="bTitle3"><u><b>{bourbon.name}</b></u></h3>
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
                                        <button className="addMyBourbon" onClick={() => {
                                            createBourbonTried()
                                                .then(res => res.json())
                                                .then(() => {
                                                    getAllBourbons()
                                                })
                                            navigate({ pathname: `/bourbonstried/memberAdd/${bourbon.id}` })
                                        }}>Add to My Bourbons</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                })
            }
        </article>
    </>
    )
}