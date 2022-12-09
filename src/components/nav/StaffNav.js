import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StaffNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/bourbons">Bourbons</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/articles">Articles</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/cocktails">Cocktails</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/distilleries">Distilleries</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/bourbonusers">Users</Link>
            </li>


            {
                localStorage.getItem("bourbon_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("bourbon_user")
                            navigate("/login", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
  
}
