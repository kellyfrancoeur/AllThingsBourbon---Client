import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StaffNav = () => {
    const navigate = useNavigate()

    return (
        <nav id="main-navbar">
        <ul id="links">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/bourbons">Bourbons</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/cocktails">Cocktails</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/distilleries">Distilleries</Link>
            </li> */}
            <li className="staffHome">
                <Link to="/">Home</Link>
            </li>


            {
                localStorage.getItem("bourbon_user")
                    ? <li className="staffLogout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("bourbon_user")
                            navigate("/login", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
        </nav>
    )

  
}
