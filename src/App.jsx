import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import GsapTo from './gsap/GsapTo';
import GsapFrom from './gsap/GsapFrom';
import GsapFromTo from './gsap/GsapFromTo';
import Timeline from './gsap/Timeline';
import GsapStagger from './gsap/GsapStagger';
import ScrollTriger from './gsap/ScrollTriger';
import GsapText from './gsap/GsapText';


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
