import './Projects.scss';

import projects from "./../../database/projects"

const Projects = () => {
   const html = projects.map(project => {
      return (
         <div className="project" key={project.name}>
            <div className="title"><span className="fw-bold">{project.name}</span> </div>
            <div><span className="fw-bold"></span>{project.description}</div>
            <div className="git">Zobacz repozytorium:
               <a target="_blank" className="fw-bold" rel="noreferrer" href={project.git}> GIT</a>
            </div>

            <LinkToProject link={project.link} />
         </div>
      )
   })

   return (
      <section id="projects">
         <header>Doświadczenie</header>
         <div>{html}</div>
      </section>
   )

}

export default Projects;

const LinkToProject = (props) => {
   if ((props.link ? props.link : null) === null) { return null };

   return (
      <div>
         <div className="link fw-bold">
            <span> &rsaquo; &rsaquo; &rsaquo; </span>
            <a target="_blank" href={props.link} rel="noreferrer">Zobacz projekt</a>
            <span> &lsaquo; &lsaquo; &lsaquo; </span>
         </div>
      </div>
   )
}