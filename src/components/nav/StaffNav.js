import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StaffNav = () => {
    const navigate = useNavigate()

    return (
        <nav id="main-navbar">
            <ul id="links">
            <div id="logo">
                <a id="logo2" href="/"><img src="https://i.postimg.cc/KYNtFxbB/logo3.png" height="100" width="100" /></a>
            </div> 
 
                {
                    localStorage.getItem("bourbon_user")
                        ? <li className="staffLogout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("bourbon_user")
                                navigate("/login", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </nav>
    )
}
