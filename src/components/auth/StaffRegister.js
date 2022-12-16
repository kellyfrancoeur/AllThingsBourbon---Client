import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


export const StaffRegister = (props) => {
    const [staff, setStaff] = useState({ "account_type": "staff" })
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
            body: JSON.stringify(staff)
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

    const updateStaff = (evt) => {
        const copy = { ...staff }
        copy[evt.target.id] = evt.target.value
        setStaff(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>{serverFeedback}</div>
                <button className="button--close"
                    onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="staffRegisterLogin" onSubmit={handleRegister}>
                <h1 className="rTitle1">Welcome to the team</h1>
                <section className="register">
                    <fieldset>
                        <label htmlFor="first_name"></label>
                        <input onChange={updateStaff}
                            type="text" id="first_name"
                            placeholder="First Name"
                            className="formControl" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="last_name"></label>
                        <input onChange={updateStaff}
                            type="text" id="last_name"
                            placeholder="Last Name"
                            className="formControl" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email"> </label>
                        <input onChange={updateStaff}
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="formControl" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="username"></label>
                        <input onChange={updateStaff}
                            type="username"
                            id="username"
                            placeholder="Create A Username"
                            className="formControl" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password"></label>
                        <input onChange={updateStaff}
                            type="password"
                            id="password"
                            placeholder="Create A Password"
                            className="formControl" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bio"></label>
                        <input onChange={updateStaff}
                            type="text"
                            id="bio"
                            placeholder="Tell Us A Little About Yourself & Your Love of Bourbon..."
                            className="formControl" required />
                    </fieldset>
                </section>
                <fieldset>
                    <button type="submit"> Register New Staff Member </button>
                </fieldset>
            </form>
        </main>
    )
}

