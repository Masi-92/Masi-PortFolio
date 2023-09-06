//import Layout from "../Layout/Layout";
import aboutMeStyle from "../styles/about.module.css";
import me from "../Images/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <section className={aboutMeStyle.about}>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div
          className={`${aboutMeStyle.container} ${aboutMeStyle.about__container}`}
        >
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
                  className={aboutMeStyle.about__icon}
                />
                <h5>Experience</h5>
                <p>6 Months</p>
              </article>
              <article className={aboutMeStyle.about__card}>
                <FontAwesomeIcon
                  icon={faFolder}
                  className={aboutMeStyle.about__icon}
                />
                <h5>Projects</h5>
                <p>2 Completed Projects</p>
              </article>
            </div>
            <p className={aboutMeStyle.textStyle}>
              In the past few months, I have been working in a remote
              environment, primarily focusing on HTML, CSS, and JavaScript.
              During this time, I have developed a strong passion for web
              development and a keen interest in expanding my skill set. I am
              always open to new opportunities for learning and growth, and I am
              eager to take on new challenges in the world of technology. My
              dedication to honing my skills and my enthusiasm for continuous
              improvement make me a dedicated and adaptable team member. I am
              excited to explore new projects and contribute to innovative
              solutions in the field of web development. Feel free to reach out
              if you would like to learn more about my journey or discuss
              potential collaborations.
            </p>

            <Link
              to="/contactMe"
              className={`${aboutMeStyle.btn} ${aboutMeStyle.btn_primary}`}
            >
              Lets Talk
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;
