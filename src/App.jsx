import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';

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
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default App


// import GsapTo from './gsap/GsapTo';
// import GsapFrom from './gsap/GsapFrom';
// import GsapFromTo from './gsap/GsapFromTo';
// import Timeline from './gsap/Timeline';
// import GsapStagger from './gsap/GsapStagger';
// import ScrollTriger from './gsap/ScrollTriger';
// import GsapText from './gsap/GsapText';