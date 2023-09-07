import { useRef, useState } from "react";
import contactStyle from "../styles/Contac.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ContactMe = () => {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.user_email.value;
    const messageText = e.target.message.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(userEmail) || messageText.trim() === "") {
      setError(true);
      setMessage(false);
    } else {
      setError(false);
      setMessage(true);
      e.target.reset();
    }
  };

  const handleReset = () => {
    setError(false);
    setMessage(false);
    formRef.current.reset();
  };

  const successMessage = (
    <span style={{ color: 'lightBlue', fontWeight: 'bold' }}>
      Thanks for your message! I will write you back!
    </span>
  );

  const errorMessage = (
    <span style={{ color: 'red', fontWeight: 'bold' }}>
      Please enter a valid email address and message.
    </span>
  );

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`${contactStyle.container} ${contactStyle.contact__container}`}>
        <div className={contactStyle.contact__options}>
          <article className={contactStyle.contact__option}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={contactStyle.contact__option_icon}
            />
            <h4>Email</h4>
            <h5>masoud.izadi92@gmail.com</h5>
            <a href="mailto:masoud.izadi92@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="email" placeholder="Your Email" name="user_email" required />
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <div className={contactStyle.contact__buttons}>
            <button type="submit" className={`${contactStyle.btn_content} `}>
              Send Message
            </button>
            <button onClick={handleReset} className={contactStyle.btn_content}>
              Reset
            </button>
          </div>
          {error ? errorMessage : message ? successMessage : null}
        </form>
      </div>
      <Navigation />
      <Footer />
    </section>
  );
};

export default ContactMe;
