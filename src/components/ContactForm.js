import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qeruv1g',       // Replace with your service ID
        'template_zw1vhwr',      // Replace with your template ID
        formRef.current,         // Pass form reference here
        'mRewMVMjvjnmou-5g'      // Replace with your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          toast.success('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send the message. Please try again.');
        }
      );

    setFormData({
      name: '',
      phone: '',
      description: '',
      email: ''
    });
  };

  return (
    <div className="contact-form py-12" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-400">Get in Touch</h2>
      
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4 bg-neutral-900 p-6 rounded-lg shadow-lg">
        
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-neutral-500 p-3 rounded-md w-full bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-semibold text-lg">Phone No:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-neutral-500 p-3 rounded-md w-full bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-neutral-500 p-3 rounded-md w-full bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-semibold text-lg">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border border-neutral-500 p-3 rounded-md w-full bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
            placeholder="Tell me about your query..."
          />
        </div>

        <button type="submit" className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-md transition duration-200 ease-in-out">
          Submit
        </button>
      </form>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
