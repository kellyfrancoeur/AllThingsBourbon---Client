import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const MemberNav = () => {
    const navigate = useNavigate()

    // return (
    //     <ul className="navbar">
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/bourbons">Bourbons</Link>
    //         </li>
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/typeofbourbons">Type of Bourbons</Link>
    //         </li>
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/articles">Articles</Link>
    //         </li>
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/cocktails">Cocktails</Link>
    //         </li>
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/distilleries">Distilleries</Link>
    //         </li>
    //         <li className="navbar__item active">
    //             <Link className="navbar__link" to="/mybourbons">My Bourbons</Link>
    //         </li>


    //         {
    //             localStorage.getItem("bourbon_user")
    //                 ? <li className="navbar__item navbar__logout">
    //                     <Link className="navbar__link" to="" onClick={() => {
    //                         localStorage.removeItem("bourbon_user")
    //                         navigate("/login", {replace: true})
    //                     }}>Logout</Link>
    //                 </li>
    //                 : ""
    //         }
    //     </ul>
    // )
    return (
        <nav id="main-navbar">
            <ul id="links">
                <div class="dropdown">
                        <button class="dropbtn">Bourbons
                        </button>
                        <div class="dropdown-content">
                               <ul><Link to="/standardbourbon">Standard Bourbon</Link></ul>
                               <ul> <Link to="/kentuckybourbon">Kentucky Bourbon</Link></ul>
                               <ul> <Link to="/straightbourbon">Straight Bourbon</Link></ul>
                               <ul> <Link to="/smallsinglebourbon">Small Batch & Single Barrel Bourbon</Link></ul>
                               <ul><Link to="/sourmashbourbon">Sour Mash Bond Bourbon</Link></ul>
                               <ul><Link to="/bottledbourbon">Bottled in Bond Bourbon</Link></ul>
                               <ul><Link to="/blendedbourbon">Blended Bourbon</Link></ul>
                               <ul><Link to="/ryewheatedbourbon">High-Rye & Wheated Bourbon</Link></ul>
                        </div>
                    </div>
                <Link to="/bourbontypes">Types of Bourbons</Link>
                    <div class="dropdown">
                        <button class="dropbtn">Articles
                        </button>
                        <div class="dropdown-content">
                               <ul><Link to="/history">History of Bourbon</Link></ul>
                               <ul> <Link to="/howitsmade">How Bourbon is Made</Link></ul>
                               <ul> <Link to="/howtoserve">How to Serve Bourbon</Link></ul>
                               <ul> <Link to="/booksonbourbon">Books on Bourbon</Link></ul>
                        </div>
                    </div>
                <div class="dropdown">
                        <button class="dropbtn">Cocktails
                        </button>
                        <div class="dropdown-content">
                               <ul><Link to="/classiccocktails">Classic Cocktails</Link></ul>
                               <ul> <Link to="/summercocktails">Summer Cocktails</Link></ul>
                               <ul> <Link to="/wintercocktails">Winter Cocktails</Link></ul>
                               <ul> <Link to="/creativetwist">Creative Twists on Classics</Link></ul>
                        </div>
                    </div>
                <Link to="/distilleries">Distilleries</Link>
                <Link to="/mybourbons">My Bourbons</Link>
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
        </nav>
    )
}
