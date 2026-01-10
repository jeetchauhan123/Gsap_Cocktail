import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Timeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to(".box", {
      x: 250,
      rotation: 360,
      borderRadius: "50%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to(".box",{
      y:250,
      scale:2,
      rotation:360,
      borderRadius:'50%',
      duration:2,
      ease:"back.inOut"
    })

    timeline.to(".box",{
      x:500,
      scale:1,
      rotation:720,
      borderRadius:'8px',
      duration:2,
      ease:"back.inOut"
    })
  }, []);

  return (
    <div className="center">
      <button onClick={()=>{
        if(timeline.paused()){
          timeline.play();
        }else{
          timeline.pause();
        }
      }}>Play/Pause</button>
      <div className="box"></div>
    </div>
  );
};

export default Timeline;
