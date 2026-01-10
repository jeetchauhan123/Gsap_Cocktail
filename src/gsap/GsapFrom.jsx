import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import reactLogo from '/react.svg';


const GsapFrom = () => {
  useGSAP(()=>{
    gsap.from('.logo',{
      x:250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'elastic'
    })
  }, [])

  return (
    <div className='center'>
      <img src={reactLogo} className="logo" alt="React-logo" />
    </div>
  )
}

export default GsapFrom
