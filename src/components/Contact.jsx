import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rgig7az", "template_bekh0b9", form.current, {
        publicKey: "YKBQJRnJg0C-2rT1U",
      })
      .then(
        () => {
          alert("Thanks For Contacting, We'll respond you within a day!!")
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-6"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact Me
          </p>
          <p className="mt-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              data-aos="slide-up"
              data-aos-duration="500"
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              data-aos="slide-up"
              data-aos-duration="700"
              required
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              data-aos="fade-in"
              data-aos-duration="900"
              name="message"
              required
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              //   data-aos="zoom-in"
              //   data-aos-duration="1000"
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's Talk
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
