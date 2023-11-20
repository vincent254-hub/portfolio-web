import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {

  // form valdation
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [number, setNumber] = useState('') // useState to store Mobile Number
  const [email, setEmail] = useState('') // useState to store Email address of the user
  // const notify = () => toast("Message send successfully");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();  

    emailjs.sendForm('service_02bktb1', 'template_7tpxisb', form.current, '4G0_lhVlwMsyMF-Lj')
      .then((result) => {
        toast.success("Message sent successfully");
        form.current.reset();
      }, (error) => {
        toast.error("Error sending message");
      });
  };

  // function to handle form validation


  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (firstName.length == 0) {
      toast.error('First name should at least be 3 charachters or more. Couldnt submit...')
      return
    }

    if (lastName.length == 0) {
      toast.error('Last name should at least be 3 charachters or more. Couldnt submit...')
      return
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      toast.error('make sure you have a valid email address. Kindly check and try again...')
      return
    }

  }

  // func ends
  return (
    <section id="Contact" className="contact--section">

      <div>
      <ToastContainer
        theme='dark'
      />       
        <p className="sub--title">Get In Touch</p>
        
        <h2>Contact Me</h2>
        <p className="text-lg">
          You can directly reach out to my inbox to have a chat with me
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail} >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a Subject</span>
          <select id="choose-topic" required={true} className="contact--input text-md" name='subject'>
            <option>Select One...</option>
            <option>Front-end Developer</option>
            <option>Wordpress Developer</option>
            <option>E-commerce</option>
            <option>3rd-Party Integration</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name='message'
            rows="8"
            placeholder="Type your message..."
            required={true}
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox"  name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" onClick={() => {
            validateForm()
          }} className="btn btn-primary contact--form--btn">Send</button>
        </div>
      </form>
    </section>
  );
}
