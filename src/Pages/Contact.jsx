import React, { useRef } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ixjyks",
        "template_g821z29",
        form.current,
        "rUiro5D0blj5IcehK",
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
        },
        (error) => {
          console.log(error);
          alert("Failed To Send ❌");
        },
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-12 lg:px-20 py-10 overflow-hidden">
      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-14 items-center mt-16 lg:mt-24">
        {/* Left Side */}
        <div>
          <p className="text-orange-500 uppercase tracking-[4px] mb-4">
            Contact Me
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build Something Amazing Together.
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            I’m available for freelance projects, collaborations, and frontend
            development opportunities. Feel free to reach out anytime.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://www.instagram.com/m_aan005"
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/Mayankgohiya2006"
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mayank-gohiya-8711393b0/"
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-sm text-gray-400">Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Subject</label>

              <input
                type="text"
                name="title"
                placeholder="Enter a Domain"
                required
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-orange-500 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3"
            >
              Send Message
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
