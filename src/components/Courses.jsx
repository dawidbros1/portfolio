import { default as data } from "../database/courses";

const Courses = () => {
   const html = data.map(course => {
      return (
         <div className="course" key={course.name}>
            <div><span className="fw-bold">Nazwa kursu: </span>{course.name}</div>
            <div><span className="fw-bold">Informacje o kursie: </span><a target="_blank" rel="noreferrer" href={course.link} alt="link do kursu">Zobacz kurs</a></div>
            <div><span className="fw-bold">Certyfikat ukończenia: </span><a target="_blank" rel="noreferrer" href={course.certificate} alt="certyfikat ukończenia">Zobacz certyfikat</a></div>
         </div>
      )
   })

   return (
      <section id="courses">
         <header>Ukończone kursy</header>
         <div>{html}</div>
      </section>
   )
}

export default Courses;