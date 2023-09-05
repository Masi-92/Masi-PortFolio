

 //import Layout from "../Layout/Layout";
import aboutMeStyle from "../styles/about.module.css";
import me from "../Images/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout/Layout";

const AboutMe = () => {
  return ( <Layout>
    <section className={aboutMeStyle.about}>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className={`${aboutMeStyle.container} ${aboutMeStyle.about__container}`}>
        <div className={aboutMeStyle.about__me}>
          <div className={aboutMeStyle.about__me_image}>
            <img src={me} alt="Me" />
          </div>
        </div>
        <div className={aboutMeStyle.about__contact}>
          <div className={aboutMeStyle.about__cards}>
            <article className={aboutMeStyle.about__card}>
              <FontAwesomeIcon
                icon={faAward}
                className={aboutMeStyle.about__icon}/>
              <h5>Experience</h5>
              <p>6 Months</p>
            </article>
            <article className={aboutMeStyle.about__card}>
              <FontAwesomeIcon
                icon={faFolder}
                className={aboutMeStyle.about__icon}/>
              <h5>Projects</h5>
              <p>2 Completed Projects</p>
            </article>
          </div>
          <p>
            In the past few months, I have been working in a remote environment,
            focusing on HTML, CSS, and JavaScript.
          </p>

          <Link to="/contactMe" className={`${aboutMeStyle.btn} ${aboutMeStyle.btn_primary}`}>
            Lets Talk
          </Link>
        </div>
      </div>
      
    </section>
    </Layout>
  );
};

export default AboutMe;
