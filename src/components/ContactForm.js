import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


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

      return;
    }
    emailjs
      .sendForm(
        'service_qeruv1g',
        'template_zw1vhwr',
        formRef.current,
        'mRewMVMjvjnmou-5g'
      )
      .then(
        (result) => {
          toast.success('message sended successfully')
          setFormData({ name: '', phone: '', message: '', email: '' });
        },
        (error) => {
          toast.error(error)
        }
      );


  };

  return (
    <>
      <div className="w-full max-w-4xl lg:max-w-5xl  mx-auto pb-5" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white">Get in Touch</span>
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto border border-white bg-neutral-900 p-6 rounded-xl shadow-md space-y-6"
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
      </div>
    </>
  );
};

export default ContactForm;
