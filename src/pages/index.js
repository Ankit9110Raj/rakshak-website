import React from 'react';
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";


//const Home = () => 
export default function CarouselComponent() {
    return (
        <div>
            <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src="./images/skywalker-800x533.jpg" />
                    </div>
                    <div>
                        <img src="./images/sandy2.0-800x534.jpg" />
                    </div>
                    <div>
                        <img src="./images/skywalker-800x533.jpg" />
                    </div>
                </Carousel>
            </div>
            <div >
                <img className='intrologo' src="./images/logo4.gif" />
                <p className='intro'>Rakshak IITB is the official team of IIT Bombay consisting of 40+ students from various disciplines who work collaboratively to develop a fleet of robust Unmanned Aerial Vehicles (UAVs) to support Search and Rescue Operations (SRO) in the event of a disaster. The team was formed in the year 2015 by some of the IITB enthusiasts to build drones/planes that can be used for rescue missions. These aircraft can provide relief measures in the disaster-stricken area (e.g., Landslide, Flood, Earthquake) and can be used for surveys & mapping of cities and conservation of wildlife with slight modifications. Our design efficiently tackles the above problems cost-effectively without compromising on human safety.



                    As of now, we have developed five planes. Each year we are trying to stretch our limits by our innovation and teamwork. We would also like to thank IITB for supporting us and providing the platform to showcase our talent at the international level.</p>
            </div>  
            <div >
        <ReactPlayer className='youtube' url="https://www.youtube.com/watch?v=wG5wcbJa85s" width={1000} height={600} />
        </div>
        </div>
        
    );
}
