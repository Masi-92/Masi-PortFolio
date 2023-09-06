import { useRef, useState } from "react";
import contactStyle from "../styles/Contac.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ContactMe = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
 
    e.target.reset();
  };

  // const handleClick = () => {
  //   setMessage(true);
  // };

  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className={`${contactStyle.container} ${contactStyle.contact__container} `}>
        <div className={contactStyle.contact__options}>
          <article className={contactStyle.contact__option}>
            <FontAwesomeIcon 
            icon={faEnvelope} 
            className={contactStyle.contact__option_icon} />
            <h4>Email</h4>
            <h5>masoud.izadi92@gmail.com</h5>
            <a href="mailto:masoud.izadi92@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
         <button type="submit" className={`${contactStyle.btn_content} ${contactStyle.btn_primary_content}`}>
            Send Message
          </button>
          
          {message && (
            <span className={contactStyle.message}>
              Thanks for your message! I will write you back!
            </span>
          )}
      
        </form>
      </div>
    <Navigation />
      <Footer /> 
    </section>
  );
};

export default ContactMe;
