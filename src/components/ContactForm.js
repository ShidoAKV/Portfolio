import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message || !formData.email) {
      toast.error('Please fill out all fields.');
      return;
    }

    emailjs
      .sendForm(
        'service_qeruv1g',        // Replace with your actual service ID
        'template_zw1vhwr',       // Replace with your actual template ID
        formRef.current,
        'mRewMVMjvjnmou-5g'       // Replace with your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Message sent successfully!');
          setFormData({ name: '', phone: '', message: '', email: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <div className="py-16 w-[320px] text-white" id="contact">
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white">Get in Touch</span>
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-neutral-900 p-6 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-md 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
transition duration-150"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-lg font-medium">Phone No</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-md 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
transition duration-150"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-md 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
transition duration-150"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-lg font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 bg-neutral-800 border border-neutral-600 rounded-md 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
transition duration-150"
            placeholder="Tell me about your query..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-gradient-to-r from-purple-700  to-purple-300 text-black font-bold rounded-md 
hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 transition duration-150"
        >
          Submit
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
