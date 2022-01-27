import "./navbar.scss"
import {Person,AlternateEmail} from "@material-ui/icons"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className ="logo">Alberto Canales</a>
                <div className= "itemContainer">
                    <Person className= "icon"/>
                    <span>12 12 13 43</span>
                </div>
                <div className= "itemContainer">
                    <AlternateEmail className= "icon"/>
                    <span>albertocanales1@outlook.com</span>
                </div>

                </div>

                <div className="right">

                </div>

            </div>
        </div>
    )
}
