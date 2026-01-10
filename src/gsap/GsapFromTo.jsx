import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import reactLogo from "/react.svg";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 450,
        repeat: -1,
        yoyo: true,
        borderRadius: "50%",
        rotation: 360,
        duration: 2,
        easy: "bounce.out",
      }
    );
  }, []);

  return (
    <div className="center">
      {/* <img src={reactLogo} className="logo" alt="React-logo" /> */}
      <div className="box"></div>
    </div>
  );
};

export default GsapFromTo;
