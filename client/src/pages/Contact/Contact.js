import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import ContactForm from "../../Components/ContactForm/ContactForm";
import './Contact.css'
export default function Contact() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className='login-register'>
        <div className='login'>
          <span className='login__title'>ارتباط با ما</span>
          <span className='login__subtitle'>
       نظرات و  انتقادات و پیشنهادات خود را با ما در میان بگذارید
          </span>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
