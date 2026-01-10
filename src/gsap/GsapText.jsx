import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapText = () => {
    useGSAP(()=>{
        gsap.to('#text',{
            ease:"power1.inOut",
            opacity:1,
            y:0
        })

        gsap.fromTo('.para',{
            opacity:0,
            y:30
        },{
            opacity:1,
            y:0,
            delay:0.5,
            stagger:0.1
        })
    },[])
  return (
    <div className="m-4 p-2 bg-amber-100">
      <div id="text" className="text-5xl p-2 bg-blue-100 opacity-0 translate-y-10">Header</div>
      <div className="text-xl flex flex-col gap-4 mt-6 p-2 bg-emerald-100">
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          corrupti consequatur quas quod, error eveniet?
        </p>
        <p className="para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          consequatur quam dolores fuga necessitatibus ipsum odit distinctio
          totam, atque, molestiae ratione. Consequuntur vitae ratione obcaecati
          recusandae iusto illo sunt natus!
        </p>
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
          pariatur?
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ipsum doloremque assumenda repudiandae id incidunt aut
          odio a omnis delectus distinctio. Quibusdam repellendus libero,
          doloribus sunt magnam magni perspiciatis, necessitatibus pariatur
          explicabo praesentium velit similique quia harum blanditiis excepturi
          perferendis veniam voluptates beatae provident vel. Nulla voluptates
          illum exercitationem veniam voluptatum saepe optio consequuntur
          placeat, adipisci alias mollitia ipsa, molestias numquam repudiandae
          aliquam, maiores dolorem labore vero culpa! Iusto, explicabo eveniet
          culpa dolorem exercitationem expedita. Velit, tempore accusantium
          laboriosam repudiandae odio quas soluta et sint culpa iste, delectus
          nesciunt itaque nemo fugiat distinctio assumenda obcaecati quidem ad
          cum aliquam! Rem!
        </p>
        <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, aperiam. erf dslhuee.
        </p>
      </div>
    </div>
  );
};

export default GsapText;
