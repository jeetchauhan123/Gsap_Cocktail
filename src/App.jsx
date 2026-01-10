import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    // <>
    //   <div>
    //     {/* <GsapTo /> */}
    //     {/* <GsapFrom /> */}
    //     {/* <GsapFromTo /> */}
    //     {/* <Timeline /> */}
    //     {/* <GsapStagger /> */}
    //     {/* <ScrollTriger /> */}
    //     <GsapText />
    //   </div>
    // </>
    <div className='flex-center h-screen'>
      <h1 className='text-3xl text-indigo-500'>Hello, GSAP!</h1>
    </div>
  )
}

export default App
