// Contact.jsx
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 text-white py-20 px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-exo font-bold uppercase">Contact Me</h2>
        <p>Have a question? Send me a message, and I'll get back to you soon.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <a className="flex items-center gap-4 p-6 bg-zinc-800 rounded-lg" href="mailto:kartikmankar91@gmail.com">
          <MdOutlineEmail size={40} /> <span>Email: kartikmankar91@gmail.com</span>
        </a>
        <a className="flex items-center gap-4 p-6 bg-zinc-800 rounded-lg" href="tel:+917038194769">
          <LuPhone size={40} /> <span>Phone: +91 7038194769</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
