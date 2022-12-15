import React, { useEffect, useState } from "react"
import { getBourbonUsers, deleteBourbonUser } from "../../managers/BourbonUsersManager.js"
import "./ManageBourbonUsers.css"

export const MemberList = (props) => {
    const [bourbonUsers, setBourbonUsers] = useState([])

    useEffect(() => {
        getBourbonUsers().then(data => setBourbonUsers(data))
    }, []
    )

    return (<>
        <h1 id="uTitle1">All Things Bourbon Members</h1>
        <article className="bourbonMembers">
            {
                bourbonUsers.map(bourbonUser => {
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