import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const GsapStagger = () => {
  useGSAP(()=>{
    gsap.to('.stagger-box',{
      y:250,
      rotation:180,
      borderRadius:'50%',
      repeat:-1,
      yoyo:true,
      duration:1,
      stagger:{
        each:0.09,
        from:'center',
        ease:'none'
      }
    })
  }, [])

  return (
    <div className='center'>
      <div className='flex gap-5'>
        <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-300 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box'></div>
        <div className='w-20 h-20 bg-indigo-800 rounded-lg stagger-box'></div>
      </div>
    </div>
  )
}

export default GsapStagger
