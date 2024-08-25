import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './Footer'

function ContactForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phNumber, setPhNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [email,setEmail] = useState('')
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fname,
      lname,
      phNumber,
      email,
      subject,
      description
    };

    emailjs.send('service_6ckaxle', 'template_accunsi', templateParams, 'cBssIKBQntS0LQeO2')
      .then((response) => {
        toast.success('Your Mail Received!');
        setFname('');
        setLname('');
        setPhNumber('');
        setEmail('')
        setSubject('');
        setDescription('');
      })
      .catch((error) => {
        setErrorMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <section>
    <div id="contact" className='bg-[#FFEADB] border rounded-t-[4rem]'>
      <h1 className='text-center text-7xl sm:text-8xl mt-6 text-[#15252D] font-extrabold mb-9'>Contact Form</h1>
      <div className='p-5 bg-[#15252D] border rounded-t-[4rem] my-10'>
        <form className='my-12' onSubmit={handleSubmit}>
          <div className='text-[#FFEADB] text-2xl'>
            <div className='flex items-center mb-8'>
              <label htmlFor="firstName">First Name</label>
              <input
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                aria-required='true'
                className='bg-[#CFD7D6] text-[#15252D] text-2xl font-bold border rounded-2xl p-2 mx-3 flex-grow'
                type="text"
                name='firstName'
              />
              </div>
              <div className='flex items-center mb-8'>
              <label htmlFor="lastName">Last Name</label>
              <input
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                aria-required='true'
                className= 'bg-[#CFD7D6] text-[#15252D] text-2xl font-bold border rounded-2xl p-2 mx-3 flex-grow'
                type="text"
                name='lastName'
              />
              </div>
            <div className='flex flex-col'>
            <div className='flex items-center mb-8'>
              <label htmlFor="phoneNumber">Contact</label>
              <input
                value={phNumber}
                onChange={(e) => setPhNumber(e.target.value)}
                className='bg-[#CFD7D6] font-bold text-[#15252D] text-[1.3rem] sm:text-2xl border rounded-2xl p-2 mx-4 flex-grow'
                type="tel"
                name='phoneNumber'
                required
              />
              </div>
              <div className='flex items-center mb-8'>
              <label htmlFor="email">E-mail</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#CFD7D6] font-bold text-[#15252D] text-[1.3rem] sm:text-2xl border rounded-2xl p-2 mx-3 flex-grow'
                type="email"
                name='email'
                aria-required='true'
              />
              </div>
            </div>
            <div className='flex flex-col'>
            <label className='mb-4'  htmlFor="subject">Subject</label>
              <input
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='bg-[#CFD7D6] font-bold text-[#15252D] text-2xl border rounded-2xl p-2 mx-3 flex-grow'
                type="text"
                name='subject'
                aria-required='true'
              />
              <label className='mb-5 mt-3' htmlFor="message">What do you have in mind?</label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='bg-[#CFD7D6] font-semibold text-[#15252D] text-xl p-2 border rounded-2xl'
                id="message"
                name='message'
                cols="70"
              />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='my-12 items-center border border-yellow-100 bg-green-300 hover:bg-transparent hover:text-green-300 text-white font-bold text-lg rounded-full w-[40%] py-5 px-9 cursor-pointer text-center'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </div>
      <Toaster />
      <Footer />
    </div>
    </section>
  );
}

export default ContactForm;
