import experStyle from "../styles/experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faBootstrap,
  faNodeJs,
  faRProject,
  faFigma,
  faStaylinked,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "./Navigation";
import { faCediSign } from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  { icon: faHtml5, name: "HTML", id: 1 },
  { icon: faCss3, name: "CSS", id: 2 },
  { icon: faJs, name: "JavaScript", id: 3 },
  { icon: faReact, name: "React", id: 4 },
  { icon: faSass, name: "SCSS", id: 5 },
  { icon: faBootstrap, name: "Bootstrap", id: 7 },
  { icon: faNodeJs, name: "Node.js", id: 8 },
  { icon: faJs, name: "TypeScript ", id: 9 },
];
const skillsData1 = [
  { icon: faCss3, name: "CSS", id: 1 },
  { icon: faRProject, name: "Material UI", id: 5 },
  { icon: faSass, name: "SCSS", id: 3 },
  { icon: faBootstrap, name: "Bootstrap", id: 4 },
  { icon: faFigma, name: "Figma", id: 4 },
  { icon: faCediSign, name: "Canva", id: 5 },
  { icon: faStaylinked, name: "Tailwind CSS", id: 6 },
  { icon: faGithub, name: "GitHub", id: 7 },
];

const Experience = () => {
  return (
    <section className={experStyle.parent}>
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className={experStyle.container}>
        <div
          className={` ${experStyle.container} ${experStyle.experience__container}`}
        >
          <div className={experStyle.experience__frontend}>
            {/* <h3>Front-end Development</h3> */}
            <div className={experStyle.experience__content}>
              {skillsData.map((skill) => (
                <article
                  key={skill.id}
                  className={experStyle.experience__details}
                >
                  {skill.icon && (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={experStyle.experience__details_icon}
                    />
                  )}
                  <h4>{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div
          className={` ${experStyle.container} ${experStyle.experience__container}`}
        >
          <div className={experStyle.experience__frontend}>
            {/* <h3>Front-end Development</h3> */}
            <div className={experStyle.experience__content}>
              {skillsData1.map((skill) => (
                <article
                  key={skill.id}
                  className={experStyle.experience__details}
                >
                  {skill.icon && (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={experStyle.experience__details_icon}
                    />
                  )}
                  <h4>{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Experience;
