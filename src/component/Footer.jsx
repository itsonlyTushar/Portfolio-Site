import React from 'react'

function Footer() {
  return (
    <footer>

    <div className='mt-56 flex  gap-7 justify-center flex-wrap sm:flex-nowrap mb-9 max-w-full'>
    <ul className='cursor-pointer ml-5 w-auto sm:w-1/3'>
        <li className='font-medium text-2xl text-[#15252D] mb-3'>Contact Details</li>
        <div className='text-[#8E847F] hover:text-[#c5c1be] text-xl transition ease-in-out delay-200'>
            <li className='flex items-center hover:text-[#d1ce90] hover:transition-all my-3'>
                <i className="fa-solid fa-phone mr-2"></i> +91 9327584894
            </li>
            <li className='flex items-center hover:text-[#d1ce90] hover:transition-all my-3'>
                <i className="fa-solid fa-envelope mr-2"></i>tusharsoni.webdev@gmail.com
            </li>
            <li className='flex items-center hover:text-[#d1ce90] hover:transition-all break-words'>
                <i className="fa-solid fa-house mr-2"></i> Surat
            </li>
        </div>
    </ul>

    <ul className='cursor-pointer w-1/3'>
        <li className='font-medium text-2xl text-[#15252D] mb-3'>Social Links</li>
        <div className='text-[#8E847F] hover:text-[#c5c1be] text-xl transition ease-in-out delay-200'>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-3'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tushar-soni-b0426022b">LinkedIn</a></li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-3'><a href="https://www.instagram.com/tushar_28.7" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-3'><a href="https://twitter.com/ts28_7" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-3'><a href="https://github.com/itsonlyTushar" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </div>
    </ul>

    <ul className='cursor-pointer w-1/3'>
        <li className='font-medium text-2xl text-[#15252D] mb-3'>Skills</li>
        <div className='text-[#8E847F] hover:text-[#c5c1be] text-xl transition ease-in-out delay-200'>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>HTML</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>CSS</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>JavaScript</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>Bootstrap</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>Tailwind</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>React</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>React Router</li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>Redux</li>
        </div>
    </ul>
        <ul className='cursor-pointer w-1/3 hidden sm:block'>
        <li className='font-medium text-2xl text-[#15252D] mb-3'>Credits</li>
        <div className='text-[#8E847F] hover:text-[#c5c1be] text-xl transition ease-in-out delay-200'>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>
                <a href="https://dribbble.com/shots/14007533-Hi-five">Fist-Bump</a>
            </li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>
                <a href="https://www.emailjs.com/docs/">EmailJS</a>
            </li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>
                <a href="https://www.npmjs.com/package/react-vertical-timeline-component">TimeLine</a>
            </li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>
                <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome">FontAwsome</a>
            </li>
            <li className='hover:text-[#d1ce90] hover:transition ease-in-out delay-200 my-2'>
                <a href="https://react-hot-toast.com/">React-Hot-Toast</a>
            </li>
        </div>
    </ul>

</div>

    <div className='p-[1px] bg-[#2f424c] border rounded-full mb-4'>
    </div >
    <div >
      <h3 className='text-[#15252D] text-xl font-semibold'>
          © 2024 Tushar Soni. All rights reserved.
      </h3>
        <a href="https://github.com/itsonlyTushar/Portfolio-Site"><i className="fa-brands fa-square-github text-6xl mt-2 mx-3 text-[#15252D] hover:text-[#2f424c] "></i></a>
        <a href="https://twitter.com/ts28_7" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-square-x-twitter text-6xl mt-2 text-[#15252D] hover:text-[#2f424c]"></i></a>
    </div>
    <div className='flex justify-end'>
        <h4 className='mt-6'><i className="fa-solid fa-lightbulb mr-3"></i> UI Inspired by <a className='text-lg font-semibold'  href="https://www.apollographql.com" target="_blank" rel="noopener noreferrer">Apollo GraphQL</a></h4>
    </div>

    </footer>
    
  )
}

export default Footer