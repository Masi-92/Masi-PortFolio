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
    // Hier könntest du den Code zum Versenden der E-Mail einfügen, falls benötigt.
    // Du kannst stattdessen auch eine andere Methode verwenden, z.B. die HTML5-Formularaktion.
    // Ein Beispiel für die HTML5-Formularaktion findest du weiter unten.
    e.target.reset();
  };

  const handleClick = () => {
    setMessage(true);
  };

  return (
    <section className={`${contactStyle.sectionTitle}`}>
      <h5>Get In Touch </h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :
      </h5>
      <h2>Contact Me</h2>
      <div className={`${contactStyle.contact__container} `}>
        <div className={contactStyle.contact__options}>
          <article className={contactStyle.contact__option}>
            <FontAwesomeIcon icon={faEnvelope} />
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
          {message && (
            <span className={contactStyle.message}>
              Thanks for your message! I will write you back!
            </span>
          )}
          <div className={contactStyle.sendBtn}>
            <button type="submit" className={contactStyle.Btn}>
              Send message
            </button>
          </div>
        </form>
      </div>
      <Navigation />
      <Footer />
    </section>
  );
};

export default ContactMe;
