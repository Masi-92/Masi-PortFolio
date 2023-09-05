import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound ";
import HeaderSocials from "./HeaderSocials";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/aboutMe", element: <AboutMe />, id: 2 },
  { path: "/project", element: <Projects />, id: 3 },
  { path: "/contactMe", element: <ContactMe />, id: 4 },
  { element: <HeaderSocials />, id: 5 },
  { path: "/Experience",  element: <Experience/>, id: 6 },
  { path: "/Portfolio",  element: <Portfolio/>, id: 7 },
  { path: "/Footer", element: <Footer />, id: 8 },
  { path: "*", element: <NotFound />, id: 9 },
];

export default routes;
