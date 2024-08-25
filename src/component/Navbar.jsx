import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <button className="toggle-button outline-none" onClick={toggleNavbar}>
        <i className="fa-solid fa-bars bg-[#FFEADB] p-5 sm:p-6  border rounded-2xl text-[#15252D]"></i>
      </button>
      <nav>
        <div className={`navbar mr-5 ${isOpen ? 'open' : ''}`}>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
