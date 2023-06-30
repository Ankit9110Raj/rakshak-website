import React from 'react'
import "./planes.css";

const Planes = () => {
  return (
    <div className='container'>
        <p className="planename" >SKYWALKER</p>
        <div className='planes'>   
        <img src='./images/skywalker-800x533.jpg' id='skywalker' alt=''/>
        <p className='ptext'>Built in 2017, a recent addition to the Team's plane collection. Designed for the AUVSI-SUAS competition, the plane has an endurance of 30-40 minutes of completely autonomous operation of object detection and classification, interoperability, waypoint navigation, flight, take-off and landing. It has a take-off gross weight of 7.5Kgs with a cruise speed of 12 m/s.</p>
        </div>
        <p className="planename">SANDY 2.0</p>
        <div className='planes'>
        
        <p className='ptext'> A variant of Sandy with the same role as Sandy 1.0 but with twin motors and a camera mounted at the front to test the image capture features and is one of the finest planes built in the team's history. It is a highly stable plane but has the capability of vertical loop, roll etc. manoeuvers when let loose, thanks to its twin motors. It has a gross take-off weight of 2.25 Kgs and a cruise speed of 12 m/s. 
        </p>
        <img src="./images/sandy2.0-800x534.jpg" id='sandy2' alt=''/>
        </div>
        <p className="planename">SANDY </p>
        <div className='planes'>
       
        <img src="./images/sandy-800x533.jpg" id='sandy' alt=''/>
        <p className='ptext'>A relatively small plane used for testing of individual components. It saw change in airfoil, from thin airfoil to thicker airfoil, compared to all predecessors. This plane was our first test dummy for autonomous flying and has provided excellent results to proceed autonomy to bigger plane.</p>
        </div>
        <p className="planename">SMOKEY </p>
         <div className='planes'>
         
        <p className='ptext'>Built in 2015, this plane was the first to have the capability of an autonomous system ingrained within. It was designed for the AUVSI competition in the year 2015. It has a gross take-off weight of 5 Kgs and a cruise speed of 12 m/s.</p>
        <img src='./images/smokey-800x533.jpg' id='smokey' alt='' />
        </div>
        <p className="planename">SAE PLANE</p>
         <div className='planes'>
         
        <img src="./images/saeplane-800x533.jpg" id='saeplane' alt=''/>
        <p className='ptext'>Built in 2015, this plane represented our team in SAE-2015 competition. A stable, robust and payload efficient plane, it allowed us to win 7th place in design and 12th place overall. It has an empty weight of 4.5 Kgs and lifted a payload of 2 Kgs.</p>
        </div>

    </div>
  )
}

export default Planes