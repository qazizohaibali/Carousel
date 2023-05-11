import React, { useState } from 'react'
import dp3 from '../Assets/dp3.jpg'
import { UseSpring,animated, useSpring } from 'react-spring'
import dp from '../Assets/dp.jpg'
import italy from '../Assets/italy.png'
// import './Styling/Slide.css'
import '../Styling/Slide.css'
export default function Slide3() {
    
    const [flip,setFlip]=useState(false)
    const props = useSpring({
      to:{opacity:1},
      from:{opacity:0},
      // reset:true,
      // reverse:flip,
      delay:100,
      onRest:()=> setFlip(!flip)
    })
    
    return (
    <>
    {/* <div className='main_heading max-w-[850px] mx-auto'>
    <h1 className='main_title'>We're loved from clients</h1>
    <p className='sub_title'>We are proud of great projects. Angle Brackets has taken part in. Here is what our customers say about our expertise in Android</p>
    </div> */}
    <animated.div style={props}>
     <div className="max-w-[1250px] my_container h-[620px] w-full m-auto py-16 translate-y-[-7%] px-4 relative ">

  <div className={`slide  grid lg:grid-cols-2 h-full bg-[red] w-full delay-200`} >
    {/* <> */}
    <div className='first_part '>
      <div>

        <h1 className='profile_heading'>"Angle Brackets is professional & top-notch"</h1>
        <p className='profile_para'>Angle Brackets delivered the mobile app right to our expectations.Their swift workflow complemented their professional management style.Anderson's team is available to its clients</p>
        <div className='profile_section'>
          <img src={dp3} className='profile_pic rounded-full w-14' alt="Profile Pic" />
          <div className='mx-4'>
            <h5>James May</h5>
            <p style={{color: "#7d8c95"}}>CEO & Founder Of Designership</p>
          </div>
        </div>
      </div>
    </div>
    <div className='sec_part '>
      <div>
        <div className='sub_part1'>

          <h4 className='sec_heading'>Country</h4>
          <div className='sec_sub_part'>
            <img src={italy} className='rounded-full w-6' alt="" />
           Italy
          </div>
        </div>
        <div className='sub_part2'>    
          <h4 className='sec_heading'>Project Summary</h4>
          <h6 className='sub_heading'>A Finetech App For A new Startup</h6>
        </div>
        <div className='sub_part3'>
          <div>
            <h4 className='sec_heading'>Industry</h4>
            <h6 className='sub_heading four_sub_headings'>Finance</h6>
          </div>
          <div >
            <h4 className='sec_heading'>Team Size</h4>
            <h6 className='sub_heading four_sub_headings'>10 Specialists</h6>
          </div>
          <div>
            <h4 className='sec_heading'>Duration</h4>
            <h6 className='sub_heading four_sub_headings'>8 Months</h6>
          </div>
          <div >
            <h4 className='sec_heading'>Budget</h4>
            <h6 className='sub_heading four_sub_headings'>Over $60k</h6>
          </div>
        </div>

        <h4 className='sec_heading sub_part4'>Technoloies</h4>
        <div className='sec_sub_part2'>
          <h6 className='sub_heading'>Swift</h6>
          <h6 className='sub_heading'>Swift UI</h6>
        </div>

      </div>

    </div></div>
  </div></animated.div>
  </>
  // {/* </> */}
  )
}
