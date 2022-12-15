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
            <div className="welcome">
            <div className="allThings">
            <h1 id="wTitle1">All Things</h1> 
            <h2 id="wTitle2">Bourbon</h2>
            </div>
            <h3 id="wTitle3">For the Bourbon Aficionado</h3></div>
            {/* <section className="logincontainerleft"></section> */}
            <div className="logincard">
                <form className="form--login" onSubmit={handleLogin}>
                <div className="loginlogo"></div>
                    <fieldset>
                        <label htmlFor="inputUsername"></label>
                        <input type="username" id="info"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"></label>
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
            <div className="loginLinks">
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
                <section className="link--register">
                    <Link to="/registerstaff">Register new staff member</Link>
                
                </section>
            </div>
            <section className="logincontainerright">
            </section>
        </main>
    )
}

