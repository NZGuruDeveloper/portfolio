import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-center md:justify-between flex-wrap" id="contact">
      <div className="md:w-1/3 text-center md:text-left" id="contact-heading">
        <p className="text-6xl font-bold pt-10">Contact</p>
        <p className="text-lg pt-5">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
       
      </div>
      
      <form className="w-1/3 flex md:flex-col justify-center md:justify-between md:justity-end flex-wrap mb-8 md:gap-0 gap-12" id="contact-form">
        <input
          type="text"
          placeholder="NAME"
          className="placeholder-shown:p-4 bg-transparent underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5 border-b-2 border-[#d9d9d9]"
        />
        <input
          type="text"
          placeholder="EAMIL"
          className="placeholder-shown:p-4 bg-transparent underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5 border-b-2 border-[#d9d9d9]"
        />
        <input
          type="text"
          placeholder="MESSAGE"
          className="placeholder-shown:p-4 placeholder-shown:pb-14 bg-transparent underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5 border-b-2 border-[#d9d9d9]"
        />
       
        <button className="underline underline-offset-8 decoration-[#4EE1A0] hover:text-[#4EE1A0] pt-5 right-0 uppercase flex justify-end">
          Send Message
        </button>
      </form>

    </div>
  );
}
