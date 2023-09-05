// /* eslint-disable react/prop-types */

//import Footer from "../components/Footer";
//import {Protoype} from 'postcss/lib/previous-map'

import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import LayoutStyle from './Layout.module.css'
import BackGround from "./BackGround";

const Layout = ({ children }) => {

  return (
    <div className={ LayoutStyle.a}>
   <BackGround/>
<Navigation/>
      {children}
 {/* <Footer />  */}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
