import React from 'react'

const para = {
    me :" I'm A Dedicated And Versatile Professional Currently Honing My Skills In Web Development. With A Background In Business Coordination, Data Analysis, And Effective Communication, I Bring A Unique Blend Of Experiences To The World Of Web Development. I'm Passionate About Coding, Problem-Solving, And Creating User-Friendly Web Solutions That Make A Meaningful Impact."
}

function About() {

  return (
    <>
    <section>
    <div id="about" className='flex justify-center my-10'>
      <div className=' bg-[#15252D] w-11/12 border rounded-t-[4rem]'>
        <h1 className='text-[#FFEADB] mx-5 p-5 my-4 text-8xl font-extrabold hover:text-green-400'>
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