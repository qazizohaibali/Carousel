// import myCarousel from "./Components/myCrousel";
import React, { useState } from "react";

import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'

import './App.css'

import Slide1 from './Components/Slide1'
import Slide2 from './Components/Slide2'
import Slide3 from './Components/Slide3'

function App() {

  const [index, setIndex] = useState(0)
  
  // const [fadeout , setFadeout] = useState("fade-in")

  const prev = ()=>{
    let isFirstslide = index===0
    let newIndex = isFirstslide ? comp.length-1 : index-1
    setIndex(newIndex)
    // if(index>0){
    //   setIndex(index-1)
      
    // }

  }
  const next = ()=>{
    let isLastslide = index===comp.length -1
    let newIndex = isLastslide ? 0 : index+1
    setIndex(newIndex)
    // if(index<2){
    //   setIndex(index+1)
      
      
    //   // console.log(setIndex)
    // }


  }

  // const slides = [
  //   {
  //     url: "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   }, {
  //     url: "https://images.unsplash.com/photo-1674574124567-79b2ee3d22fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   }, {
  //     url: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   }
  // ]

  let comp = [0,1,2]



  return (<>
  
  
  <div className='main_heading max-w-[850px] mx-auto'>
      <h1 className='main_title'>We're loved from clients</h1>
      <p className='sub_title'>We are proud of great projects. Angle Brackets has taken part in. Here is what our customers say about our expertise in Android</p>
      </div>
    <div className="max-w-[1250px] m_container h-[620px] w-full m-auto  translate-y-[-1%] px-4 relative ">
      {/* <div style={{ backgroundImage: `url(${slides[`${index}`].url})` }} className="h-full w-full rounded-2xl bg-center bg-cover duration-500"></div> */}
      {(comp[0]===index)? <Slide1 /> :null}
      {(comp[1]===index)? <Slide2 /> :null}
      {(comp[2]===index)? <Slide3 /> :null}
      <div className="arrows">

        <div className="arrow_btn absolute top-[95%] -translate-x-7 translate-y-[-50%]  text-2xl rounded-full p-2  text-black cursor-pointer">
          <RxArrowLeft className="prev_btn" style={{color:"white"}} size={30} onClick={prev} />
        </div>
        <div className="arrow_btn absolute top-[95%] translate-x-7 translate-y-[-50%]  text-2xl rounded-full p-2  text-black cursor-pointer">
          <RxArrowRight className="next_btn" style={{color:"white"}} size={30} onClick={next} />
        </div>
      </div>
    </div>

    

  </>);
}

export default App;
