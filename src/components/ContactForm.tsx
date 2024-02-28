"use client"
import React, { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone:'',
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: '',
          phone:''
        });
      };
    
  return (
    <form onSubmit={handleSubmit} className="md:max-w-md  max-w-sm mx-auto">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your name"
        required
      />
    </div>
 <div className='md:flex grid  gap-2'>
 <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your email"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
      <input
        type="phone"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your phone"
        required
      />
    </div>
 </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="mt-1 p-2 w-full border rounded-md"
        placeholder="Your message"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Send Message
    </button>
  </form>
  )
}

export default ContactForm