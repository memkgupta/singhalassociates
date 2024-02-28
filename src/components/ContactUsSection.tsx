import React from 'react'
import ContactForm from './ContactForm'
import { MdEmail } from "react-icons/md";
import { IoCall } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
function ContactUsSection() {
  return (
    <section id='contact' className=' w-full'>
    <div className="relative min-h-[53vh] w-full">
 
  <div className="max-h-[53vh] absolute inset-0 bg-cover bg-center z-0 w-full"
       style={{backgroundImage: "url('/contact.jpg')",backgroundSize:'cover'}}></div>
  <div className="absolute z-10 bg-black bg-opacity-75 w-full min-h-[53vh]"></div>
<div className="relative z-20 flex justify-center items-center flex-col gap-4 py-24">
<p className=" font-bold text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 text-center to-neutral-400 bg-opacity-50">Contact Us</p>
<p className="text-center text-gray-400 px-5">
We use an agile approach to test assumptions and connect with the needs of your audience early and often.
</p>
<div className="bg-slate-900 rounded-xl mx-auto w-4/6 z-30 p-12">
<ContactForm/>
</div>
<div className='grid md:grid-cols-3 gap-5 justify-items-center mt-5'>
  {/* Email Us */}
<div className="grid justify-items-center gap-3">
<span className='bg-gradient-to-r  from-slate-500 to-slate-600 flex items-center rounded-lg p-2 text-gray-300'>
    <MdEmail fill='white' size={20}/>
  </span>
  <p className="text-2xl text-center text-white font-semibold">Email Us</p>
  <p className="text-center text-gray-400">
  Email us for general queries, including marketing and partnership opportunities.
  </p>
  <p className="text-center text-blue-700">mail@mail.com</p>
</div>
{/* Call us */}
<div className="grid justify-items-center gap-3">
<span className='bg-gradient-to-r from-slate-500  to-slate-600 flex items-center rounded-lg p-2 text-gray-300'>
    <IoCall fill='white' size={20}/>
  </span>
  <p className="text-2xl text-center text-white font-semibold">Call Us</p>
  <p className="text-center text-gray-400">
  Call us to speak to a member of our team. We are always happy to help..
  </p>
  <p className="text-center text-blue-700">+91 9358288484</p>
</div>
{/* Address */}
<div className="grid justify-items-center gap-3">
<span className='bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg p-2 flex items-center text-gray-300'>
    <FaMapMarkerAlt fill='white' size={20}/>
  </span>
  <p className="text-2xl text-center text-white font-semibold">Visit Us</p>
  <p className="text-center text-gray-400">
  Visit us to speak to a member of our team. We are always happy to help..
  </p>
  <p className="text-center text-blue-700">34/2, Civil Lines, <br />Jaipur, Rajasthan, 302006, India</p>
</div>
</div>
</div>
 
</div>

    </section>
  )
}

export default ContactUsSection