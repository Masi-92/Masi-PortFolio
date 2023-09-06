import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import HeaderSocials from "../components/HeaderSocials";
import HeaderStyle from "../styles/Home.module.css";
import MG3 from "../Images/home_image.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  // State to control the animation
  const [animate, setAnimate] = useState(false);

  // Use useEffect to trigger the animation once the component is mounted
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Layout>
      <header>
        <div
          className={`${HeaderStyle.header__container} ${
            animate ? `${HeaderStyle.fade_in}` : ""
          }`}
        >
          <div className={HeaderStyle.my__infos}>
            <div className={HeaderStyle.overlay}>
              <h5>Hello I'm</h5>
              <h1>Masoud Izadi</h1>

              <p>Frontend Web Developer</p>
            </div>
            <img
              src={MG3}
              alt="home_image"
              className={HeaderStyle.home__image}
            />
            <div className={HeaderSocials.info_service}>
              <br />
              <h2 className={HeaderStyle.info__intro}> Introduction </h2>

              <p>
                Hi, I'm a frontend developer with 6 months of industry
                experience. I'm passionate about creating excellent user
                experiences and proficient in various frontend development tools
                to build attractive and user-friendly websites.
              </p>
              <div className={HeaderStyle.contact__buttons}>
                <button type="submit" className={`${HeaderStyle.btn_content} `}>
                  download cv
                </button>
                <button className={HeaderStyle.btn_content}>
                  <Link to="/contactMe">contact me</Link>
                </button>
              </div>
            </div>
          </div>

          <HeaderSocials />
        </div>
      </header>
    </Layout>
  );
};

export default HomePage;
