import './Courses.scss';

import { default as data } from "./../../database/courses";

const Courses = () => {
   const html = data.map(course => {
      const icon = "./images/skills/" + course.image + ".png";

      return (
         <div className="course" key={course.name}>
            <img className='icon' src={icon} alt="obrazek" />
            <div className='name'>{course.name}</div>
            <a className='certificate' target="_blank" href={course.certificate} rel="noreferrer">
               <img src="./images/certificate.png" alt="certyfikat" />
            </a>
         </div>
      )
   })

   return (
      <section id="courses">
         <header>Ukończone kursy</header>
         <div className='d-flex flex-wrap'>{html}</div>
      </section>
   )
}

export default Courses;