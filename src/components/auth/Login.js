import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const existDialog = useRef()
    let navigate = useNavigate()

    // const localBourbonUser = localStorage.getItem("bourbon_user")
    // const bourbonUserObject = JSON.parse(localBourbonUser)

    const handleLogin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(authInfo => {
                if (authInfo.valid) {
                    localStorage.setItem("bourbon_user", JSON.stringify(authInfo))
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="loginscreen">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="logincontainerleft"></section>
            <section className="logincontainerright">
            <div className="logincard">
                <form className="form--login" onSubmit={handleLogin}>
                <div className="loginlogo"></div>
                    <h2 id="signIn">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUsername"> Username </label>
                        <input type="username" id="info"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" id="info"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <div className="align-right">
                        <button type="submit">
                            Sign in
                        </button>
                        </div>
                    </fieldset>
                </form>
                </div>
            </section>
            <div className="loginLinks">
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
                <section className="link--register">
                    <Link to="/registerstaff">Register new staff member</Link>
                
                </section>
            </div>
        </main>
    )
}

