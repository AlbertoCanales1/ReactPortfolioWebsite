import "./navbar.scss"
import {Person,AlternateEmail,LinkedIn} from "@material-ui/icons"
export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className ="logo">Alberto Canales</a>
                <div className= "itemContainer">
                    <Person className= "icon"/>
                    <span>210-584-8156</span>
                </div>
                <div className= "itemContainer">
                    <AlternateEmail className= "icon"/>
                    <span>albertocanales1@outlook.com</span>
                </div>
                <div className= "itemContainer">
                    <LinkedIn className= "icon"/>
                    <span>www.linkedin.com/in/alberto-canales</span>
                </div>

                </div>

                <div className="right">
                    <div className= "hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className= "line1"></span>
                        <span className= "line2"></span>
                        <span className= "line3"></span>
                    </div>

                </div>

            </div>
        </div>
    )
}
