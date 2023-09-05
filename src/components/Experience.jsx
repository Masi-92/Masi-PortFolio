import experStyle from '../styles/experience.module.css';
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

import Navigation from './Navigation';

const skillsData = [
  { icon: faHtml5, name: 'HTML', id: 1 },
  { icon: faCss3, name: 'CSS', id: 2 },
  { icon: faJs, name: 'JavaScript', id: 3 },
  { icon: faReact, name: 'React', id: 4 },
  { icon: faSass, name: 'SCSS', id: 5 },
  { icon: faSquareCheck, name: 'Tailwind', id: 6 },
  { icon: faBootstrap, name: 'Bootstrap', id: 7 },
  { name: 'Node.js', id: 8 }, // Backend-Skill: Node.js
  { name: 'GitHub', id: 9 }, // Backend-Skill: GitHub
];

const Experience = () => {
  return (
    <section className={experStyle.parent} >
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className={` ${experStyle.container} ${experStyle.experience__container}`}>
        <div className={experStyle.experience__frontend}>
          <h3>Front-end Development</h3>
          <div className={experStyle.experience__content}>
            {skillsData.map((skill) => (
              <article key={skill.id} className={experStyle.experience__details}>
                {skill.icon && (
                  <FontAwesomeIcon icon={skill.icon} className={experStyle.experience__details_icon} />
                )}
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className={experStyle.experience__frontend}> 
          <h3>Back-end Development</h3>
          <div className={experStyle.experience__content}>
            {skillsData
              .filter(skill => ['Node.js', 'GitHub'].includes(skill.name))
              .map((skill) => (
                <article key={skill.id} className={experStyle.experience__details}>
                  <FontAwesomeIcon icon={faSquareCheck} className={experStyle.experience__details_icon} />
                  <h4>{skill.name}</h4>
                </article>
              ))}
          </div>
        </div>
      </div>

      <Navigation />
    </section>
  );
};

export default Experience;
