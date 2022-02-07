import { useState } from "react"
import "./works.scss"

export default function Works() {
    const [currentSlide,setCurrentSlide] =useState(0)


    const data = [
    {
        id: "1",
        icon: "assets/schedule.png",
        title: "Event Booker",
        desc: "An   application that helps you book events based on your zip code",
        img: "https://www.ualberta.ca/information-services-and-technology/media-library/images/tl-schedule.jpg",
       
    },
    {
        id: "2",
        icon: "assets/recipe.png",
        title: "Recipe Finder",
        desc: "An application that allows you to browse your favorite recipes and even add some of your own",
        img: "https://www.freepnglogos.com/uploads/food-png/food-harrison-catering-contract-caterers-serving-top-quality-32.png",
        
    },
]


    const handleClick =(way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ?currentSlide -1: 1) : 
        // setCurrentSlide(currentSlide<data.length -1)
        setCurrentSlide(currentSlide<data.length -1?currentSlide+1 : 0)
    }
    return (
        <div className ="works" id ="works">

            
            
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(

                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                {/* <span>Projects</span> */}
                            </div>
                        </div>
                        <div className="right">
                            
                            <img src={d.img}alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />

        </div>
    )
}
