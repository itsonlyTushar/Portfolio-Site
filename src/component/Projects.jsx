import React from 'react'
import Timeline from './Timeline'
import ContactForm from './ContactForm'




function Projects() {
  return (
    <>
    <section>
     <div id="projects" 
          className='flex justify-center text-7xl sm:text-9xl text-center font-extrabold text-[#15252D] my-24 mx-20' >
        <h2 className='text-center'>
            Projects
        </h2>
      </div>
      <div className='bg-[#15252D] border rounded-t-[4rem] pt-4'>
        <Timeline />
        <ContactForm />
      </div>
    </section>

        
    </>
  )
}

export default Projects