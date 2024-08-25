import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";



const myProjects = [
    {
        title: 'The Office (US) Quiz',
        year: 2023,
        description: 'This project is a quiz application dedicated to "The Office" US series. The quiz features a countdown timer, question changer, and answer checking. Built using JavaScript with key concepts such as setInterval, clearInterval, DOM manipulation, event handling, and conditional statements.',
        stacks:[<FaHtml5 />,<FaCss3Alt />,<IoLogoJavascript />],
        githubLink : 'https://github.com/itsonlyTushar/quiz-app?tab=readme-ov-file',
        live : 'https://quiz-app-mu-plum.vercel.app/'
    },
    {
        title: 'Pixar Clone',
        year: 2023,
        description: 'This is a simple clone of the Pixar website, created as a front-end development practice project. The aim is to replicate the structure and visual elements of the Pixar site, showcasing essential front-end skills.',
        stacks:[<FaHtml5 />,<FaCss3Alt />,<FaBootstrap />],
        githubLink : 'https://github.com/itsonlyTushar/Clones/tree/main/Pixar-Clone',
        live : 'https://pixar-clone.vercel.app/'
    },
    {
        title: 'Expense Tracker',
        year: 2024,
        description: 'An Expense Tracker application built with React and Redux to manage personal expenses efficiently. This application allows users to add expenses with a specific date, view the list of expenses, and see the total expenditure.',
        stacks: [<FaHtml5 />,<FaCss3Alt />,<FaReact />,<SiRedux />,<RiTailwindCssFill />],
        githubLink : 'https://github.com/itsonlyTushar/React-Projects/tree/main/Expense-Tracker',
        live : 'https://expense-tracker-gamma-azure.vercel.app/'
    },
    {
        title: 'Service Booking App',
        year: 2024,
        description: 'Built using React for a dynamic and responsive user interface. Manages bookings and availability using Redux. Displays available hours based on the selected date, with previously booked times faded out or marked as unavailable.',
        stacks: [<FaHtml5 />,<FaCss3Alt />,<FaReact />,<SiRedux />,<RiTailwindCssFill />],
        githubLink : 'https://github.com/itsonlyTushar/React-Projects/tree/main/Service-Booking-App',
        live : 'https://booking-app-azure-three.vercel.app/'
    },
    {
        title: 'JavaScript Flashcard App',
        year: 2024,
        description: 'A React-based flashcard application designed to test your knowledge of JavaScript. This app features interactive flashcards with a flip animation to reveal answers.',
        stacks: [<FaHtml5 />,<FaCss3Alt />,<FaReact />,<RiTailwindCssFill />],
        githubLink : 'https://github.com/itsonlyTushar/React-Projects/tree/main/Flash-Cards-App',
        live : 'https://flash-card-plum.vercel.app/'
    }
];

function Timeline() {
    return (
      <div>
        <VerticalTimeline>
          {myProjects.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element-work font-bold text-5xl"
              contentStyle={{ background: 'rgb(255,234,219)', color: '#15252D' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255,234,219)' }}
              date={item.year}
              iconStyle={{ background: '#CD9876', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <p>{item.description}</p>
              <div className='flex sm:flex  mt-4'>
                <span className='text-xl'>Tech stack </span>  
                {item.stacks.map((icon, iconIndex) => (
                  <span key={iconIndex} className="text-3xl mr-2">
                    {icon}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a 
                  href={item.githubLink} 
                  target='_blank' 
                  rel="noopener noreferrer">
                  <i className="fa-brands fa-github text-[#15252D] text-4xl mx-2 cursor-pointer hover:text-[#CD9876] hover:transition-all"></i>
                </a>
                <a 
                  href={item.live} 
                  target='_blank' 
                  rel="noopener noreferrer">
                  <i className="fa-solid fa-laptop text-[#15252D] text-4xl mx-2 cursor-pointer hover:text-[#CD9876] hover:transition-all"></i>
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Timeline;