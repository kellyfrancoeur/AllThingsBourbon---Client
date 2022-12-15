import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"

export const Register = () => {
    const [member, setMember] = useState({ "account_type": "member" })
    const [serverFeedback, setFeedback] = useState("")
    const conflictDialog = useRef()
    let navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(member)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                return res.json().then((json) => {
                    throw new Error(JSON.stringify(json))
                });
            })
            .then(createdUser => {
                localStorage.setItem("bourbon_user", JSON.stringify(createdUser))
                navigate("/")
            })
            .catch(error => {
                setFeedback(JSON.parse(error.message).message)
            })
    }

    useEffect(() => {
        if (serverFeedback !== "") {
            conflictDialog.current.showModal()
        }
    }, [serverFeedback])

    const updateMember = (evt) => {
        const copy = { ...member }
        copy[evt.target.id] = evt.target.value
        setMember(copy)
    }

 
    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>{ serverFeedback }</div>
                <button className="button--close"
                    onClick={e => {
                        conflictDialog.current.close()
                        setFeedback("")
                    }}>Close</button>
            </dialog>

            <form className="registerLogin" onSubmit={handleRegister}>
                <h1 className="rTitle1">Register New Account</h1>
                <section className="register">
                <fieldset>
                    <label htmlFor="first_name">  </label>
                    <input onChange={updateMember}
                        type="text" id="first_name"
                        placeholder="First Name"
                        className="formControl" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="last_name"> </label>
                    <input onChange={updateMember}
                        type="text" id="last_name"
                        placeholder="Last Name"
                        className="formControl" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="birthday"> </label>
                    <input onChange={updateMember}
                        type="text"
                        id="birthday"
                        placeholder="Birthday (YYYY-MM-DD)"
                        className="formControl" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">  </label>
                    <input onChange={updateMember}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="formControl" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="username"> </label>
                    <input onChange={updateMember}
                        type="username"
                        id="username"
                        placeholder="Create A Username"
                        className="formControl" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">  </label>
                    <input onChange={updateMember}
                        type="password"
                        id="password"
                        placeholder="Create A Password"
                        className="formControl" required />
                </fieldset>
                </section>
                <fieldset>
                    <button type="submit"> Register New Member </button>
                </fieldset>
            </form>
        </main>
    )
}
