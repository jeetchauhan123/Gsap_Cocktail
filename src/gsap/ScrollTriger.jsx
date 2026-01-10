import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const ScrollTriger = () => {
  const scrollRef = useRef();

  useGSAP(()=>{
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box)=>{
      gsap.to(box,{
        x:350,
        rotation:360,
        borderRadius:'50%',
        scale:1.5,
        duration:1.5,
        scrollTrigger:{
          trigger:box,
          start:'bottom, 90%',
          end:'top, 20%',
          scrub:true,
        },
        ease:'power1.inOut'
      })
    })
  },[])

    
  return (
    <div className='box-border'>
      <p className='text-7xl bg-blue-300'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, vel.
      </p>
      <p className='text-3xl bg-blue-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam delectus, laborum, beatae quas perferendis rem tempora commodi mollitia, officiis eius? Necessitatibus aperiam quam dolores repudiandae. Id voluptatem ab saepe, possimus, sint fugiat rem recusandae perferendis numquam labore delectus iste voluptates cumque culpa minima, provident voluptatibus beatae ea nobis deleniti! Ad magni sequi accusamus quod ullam ipsum impedit animi alias nemo! Pariatur fuga soluta, cum delectus laborum placeat beatae sint accusamus tempore labore architecto porro hic eum error corporis nemo! Voluptatem natus quia ipsa dolores magnam! Repellat adipisci asperiores inventore commodi quod in facere? Fugit praesentium fuga consequuntur aliquid voluptates.
      </p>
      <p className='text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto quaerat dignissimos provident, eum distinctio odit doloremque at dicta quod ipsa laboriosam aperiam delectus numquam enim recusandae iusto modi incidunt tenetur labore sunt sapiente! Fuga accusantium id animi aliquam harum consequatur neque optio quaerat aspernatur. Accusamus, excepturi dolorem provident ex explicabo cum exercitationem pariatur voluptate alias eum, nobis libero sint dicta magni iusto aspernatur ipsum voluptatum veniam ea ad, ullam ducimus saepe! Quia, nemo laboriosam pariatur quas corrupti quidem aspernatur cumque obcaecati nesciunt iusto exercitationem repudiandae nisi quae rem animi ut iste sit eligendi, amet maiores, atque sunt aperiam. Aliquid.
      </p>
      <div className='h-[50vh] w-screen bg-amber-300'></div>
      <div className='h-50 w-screen bg-blue-400'></div>
      
      <div className='my-30 w-full h-screen' ref={scrollRef}>
        <div id='scroll-blue' className='scroll-box h-30 w-30 rounded-lg bg-blue-300'></div>
        <div id='scroll-pink' className='scroll-box h-30 w-30 rounded-lg bg-pink-300'></div>
        <div id='scroll-green' className='scroll-box h-30 w-30 rounded-lg bg-green-300'></div>
        <div id='scroll-amber' className='scroll-box h-30 w-30 rounded-lg bg-amber-300'></div>
      </div>


      <div className='h-60 w-screen bg-cyan-400'></div>
      <div className='h-80 w-screen bg-emerald-500'></div>
      <div className='h-40 w-screen bg-fuchsia-500'></div>
    </div>
  )
}

export default ScrollTriger
