import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
    const [selected, setSelected] = useState("resume")
    const list = [
    {
      id: "resume",
      title: "Resume",
    },
    {
        id: "certifications",
        title: "Certifications ",
    },
  
    ];
    return (
        <div className ="portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            <ul>
             {list.map(item => (
                 <PortfolioList title={item.title} active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  />
             ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img
                    src="https://icon-library.com/images/calendar-of-events-icon/calendar-of-events-icon-11.jpg" 
                    alt=""
                     />
                    <h3>App</h3>
                </div>
            </div>
        </div>
    )
}
