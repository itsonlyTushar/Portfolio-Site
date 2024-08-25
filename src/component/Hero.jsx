import React from 'react';
import parallaxVideo from '../assets/vid/parallax.mp4';
import Marquee from './Marquee';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';
import CV from '../assets/PDFs/CV.pdf'

function Hero() {
  return (
    <>
      <div className="relative h-screen">
        <Navbar/>
      <main>
        <div className="video-wrapper absolute inset-0 h-full w-full">
          <video className="hero-video w-full h-full object-cover" autoPlay loop muted>
            <source 
              src={parallaxVideo} 
              type="video/mp4" />
          </video>
        </div>
      </main>
      <section>
        <div className="relative z-10 flex flex-col items-start ml-10 text-white h-full justify-center"> 
          <h1 className="text-green-300 text-7xl sm:text-9xl font-extrabold tracking-wide mt-[10rem]">Hi, I'm Tushar,
            <h1 className='text-white mb-5 hover:text-yellow-200'>a web developer<span className='text-[#86EFAC] hover:!text-white'>.</span></h1>  
          </h1>
          <div className='flex'>
            <div className='border border-yellow-100 bg-green-300 hover:bg-transparent hover:text-green-300 text-[#CD9876] font-semibold text-xl sm:text-2xl rounded-full w-[11rem] sm:w-[19rem] py-1 sm:py-6 px-9 cursor-pointer text-center'>
              <a 
                href={CV}
                download='Resume-Jaydeep'
                target='_blank'
                rel='noreferrer'
              >
                <p>Download Resume</p>
              </a>
            </div>
            <div className='icon-holder'>
              <a href="https://github.com/itsonlyTushar" target='_blank'>
                <i className="fa-brands fa-github text-green-300 text-3xl my-4 mx-3 cursor-pointer hover:text-white hover:transition-all"></i>
              </a>
              <a href="https://twitter.com/ts28_7" target='_blank'>
                <i className="fa-brands fa-square-x-twitter text-green-300 text-3xl my-4 mx-3 cursor-pointer hover:text-white hover:transition-all"></i>
              </a>
              <a href="https://www.linkedin.com/in/tushar-soni-b0426022b" target='_blank'>
                <i className="fa-brands fa-linkedin text-green-300 text-3xl my-4 mx-3 cursor-pointer hover:text-white hover:transition-all"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
      <div className='bg-[#FFEADB] border rounded-t-[4rem]'>
        <Marquee />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Hero;
