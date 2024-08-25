import React from 'react'

const para = {
    me :"I'm a dedicated professional with a background in business coordination and data analysis, now focused on web development. I’m passionate about coding, problem-solving, and creating impactful, user-friendly web solutions. "
}

function About() {

  return (
    <>
    <section>
    <div id="about" className='flex justify-center my-10'>
      <div className=' bg-[#15252D] w-11/12 border rounded-t-[4rem]'>
        <h1 className='text-[#FFEADB] mx-5 p-5 my-4 text-6xl sm:text-8xl font-extrabold hover:text-green-400'>
          About Me
        </h1>



    <div className='bg-[#CFD7D6] border rounded-t-[3rem] py-5 px-3'>
        <h3 className='text-[#15252D] text-3xl font-bold p-2 py-6 my-3.5 tracking-wide'>
          {para.me}
        </h3>
      </div>
    </div>
    </div>
    </section>
    
    </>
  )

}

export default About