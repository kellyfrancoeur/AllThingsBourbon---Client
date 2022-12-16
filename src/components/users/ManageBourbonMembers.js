import React, { useEffect, useState } from "react"
import { getBourbonUsers, deleteBourbonUser } from "../../managers/BourbonUsersManager.js"
import "./ManageBourbonUsers.css"

export const MemberList = ({ searchTermState }) => {
    const [bourbonUsers, setBourbonUsers] = useState([])
    const [filteredBourbonUsers, setFilteredBourbonUsers] = useState([])

    useEffect(
        () => {
            const searchedMembers = bourbonUsers.filter(user => {
                return user?.name?.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredBourbonUsers(searchedMembers)
        },
        [searchTermState]
    )

    const getAllMembers = () => {
        fetch("http://localhost:8000/bourbonusers", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem("bourbon_user")).token}`
            }
        })
            .then(response => response.json())
            .then((userArray) => {
                setFilteredBourbonUsers(userArray)
                setBourbonUsers(userArray)
            })

    }


    useEffect(
        () => {
            getAllMembers()
        },
        []
    )


    useEffect(() => {
        getBourbonUsers().then(data => setBourbonUsers(data))
    }, []
    )

    return (<>
        <h1 id="uTitle1">All Things Bourbon Members</h1>
        <article className="bourbonMembers">
            {
                filteredBourbonUsers.map(bourbonUser => {
                    return <section key={`bourbonUser--${bourbonUser.id}`} className="bourbonUser">
                        <div className="userInfo">
                            <div className="bourbonUserName"><u><b>{bourbonUser.full_name}</b></u></div>
                            <div className="bourbonUserBday">{bourbonUser.birthday}</div>
                        </div>
                        <div>
                            <button className="delete_member" onClick={() => {
                                window.alert("Member has been deleted")
                                const memberDelete = {
                                    id: bourbonUser.id
                                }
                                deleteBourbonUser(memberDelete)
                                    .then(() => { window.location.reload() })
                            }}
                            >Delete Member</button>
                        </div>
                    </section>
                })
            }
        </article>
        <div className="peepsAtBar">
            <img src="https://restaurantclicks.com/wp-content/uploads/2021/04/bar-manayunk.jpg" height="800" width="900"></img>
        </div>
    </>
    )
}