import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const MemberNav = () => {
    const navigate = useNavigate()

    return (
        <article>
            <div id="logo">
                <a className="logo2" href="/"><img id="nimg" src="https://i.postimg.cc/KYNtFxbB/logo3.png" height="100" width="100" /></a>
            </div>
            <nav id="main-navbar">
                <ul id="links">
                    <div className="dropdown">
                        <button className="dropbtn">Articles
                        </button>
                        <div className="dropdown-content">
                            <ul><Link to="/history">History of Bourbon</Link></ul>
                            <ul> <Link to="/howitsmade">How Bourbon is Made</Link></ul>
                            <ul> <Link to="/howtoserve">How to Serve Bourbon</Link></ul>
                            <ul> <Link to="/booksonbourbon">Books on Bourbon</Link></ul>
                        </div>
                    </div>
                    <Link to="/bourbontypes">Types of Bourbons</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Bourbons
                        </button>
                        <div className="dropdown-content">
                            <ul> <Link to="/kentuckybourbon">Kentucky Bourbon</Link></ul>
                            <ul> <Link to="/straightbourbon">Straight Bourbon</Link></ul>
                            <ul> <Link to="/smallsinglebourbon">Small Batch & Single Barrel Bourbon</Link></ul>
                            <ul><Link to="/sourmashbourbon">Sour Mash Bond Bourbon</Link></ul>
                            <ul><Link to="/bottledbourbon">Bottled in Bond Bourbon</Link></ul>
                            <ul><Link to="/blendedbourbon">Blended Bourbon</Link></ul>
                            <ul><Link to="/ryewheatedbourbon">High-Rye & Wheated Bourbon</Link></ul>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Cocktails
                        </button>
                        <div className="dropdown-content">
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
                            ? <li id="links">
                                <Link className="navbar__link" to="" onClick={() => {
                                    localStorage.removeItem("bourbon_user")
                                    navigate("/login", { replace: true })
                                }}>Logout</Link>
                            </li>
                            : ""
                    }
                </ul>
            </nav>
        </article>
    )
}
