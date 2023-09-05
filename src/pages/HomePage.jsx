//import { Link } from 'react-router-dom';
import Layout from "../Layout/Layout";

import HeaderSocials from '../components/HeaderSocials';
//import Navigation from '../components/Navigation';
import HeaderStyle from '../styles/Home.module.css';

const HomePage = () => {

  return (
    <Layout>
 
    <header>
      <div className={`${HeaderStyle.header__container} `}>
        <h5>Hello I'm</h5>
        <h1><span className={HeaderStyle.span}>M</span>asoud <span className={HeaderStyle.span}>I</span>zadi</h1>
        <h5 className="text-light">Front end Developer</h5>
       
        
     
        <HeaderSocials />
      </div>
      {/* <Navigation/> */}
    </header>

    </Layout>
  );
}

export default HomePage;
