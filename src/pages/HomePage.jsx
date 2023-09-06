import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import HeaderSocials from "../components/HeaderSocials";
import HeaderStyle from "../styles/Home.module.css";


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
      <div className={`${HeaderStyle.header__container} ${animate ? `${HeaderStyle.fade_in}` : ""}`}>

          <h5>Hello I'm</h5>
          <h1>Masoud Izadi</h1>
          <h5 className="text-light">Front end Developer</h5>

          <HeaderSocials />
        </div>
      </header>
    </Layout>
  );
};

export default HomePage;
