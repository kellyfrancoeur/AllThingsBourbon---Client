import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getBourbonUsers, deleteBourbonUser } from "../../managers/BourbonUsersManager.js"


export const MemberList = (props) => {
    const [bourbonUsers, setBourbonUsers] = useState([])
    const navigate = useNavigate()

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    // useEffect(
    //     () => {
    //         const searchedBourbons = bourbonUsers.filter(distillery => {
    //             return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
    //                 || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
    //         })
    //         setBourbonUsers(searchedBourbons)
    //     },
    //     [searchTermState]
    // )

    useEffect(() => {
        getBourbonUsers().then(data => setBourbonUsers(data))
    }, []
    )

    return (<>
        <h2>All Things Bourbon Members</h2>
        <article className="bourbonMembers">
            {
                bourbonUsers.map(bourbonUser => {
                    return <section key={`bourbonUser--${bourbonUser.id}`} className="bourbonUser">
                        <div className="bourbon_name"><u><b>{bourbonUser.full_name}</b></u></div>
                        <div className="bourbon_type">{bourbonUser.birthday}</div>
                        <div>
                            {
                                bourbonUserObject.staff
                                    ? <button className="delete_member" onClick={() => {
                                        window.alert("Member has been deleted")
                                        const memberDelete = {
                                            id: bourbonUser.id
                                        }
                                        deleteBourbonUser(memberDelete)
                                            .then(() => { window.location.reload() })
                                    }}
                                    >Delete Member</button>
                                    : ""
                            }</div>
                    </section>
                })
            }
        </article>
    </>
    )
}