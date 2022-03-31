import './Technologies.scss';

import { default as data } from "./../../database/technologies"

const Technologies = () => {
   const html = data.map(technology => {

      return (
         <div className="technology" key={technology.name}>
            <div className="fw-bold">{technology.name}</div>
            <div> <img src={"./images/skills/" + technology.image + ".png"} alt="" /> </div>

            <div className="rates">
               <span className={"fa fa-circle " + (technology.rate > 0 ? "checked" : "")}></span>
               <span className={"fa fa-circle " + (technology.rate > 1 ? "checked" : "")}></span>
               <span className={"fa fa-circle " + (technology.rate > 2 ? "checked" : "")}></span>
               <span className={"fa fa-circle " + (technology.rate > 3 ? "checked" : "")}></span>
               <span className={"fa fa-circle " + (technology.rate > 4 ? "checked" : "")}></span>
            </div>
         </div>
      )
   })

   return (
      <section id="technologies">
         <header>Technologie</header>
         <div className="d-flex flex-wrap text-center">{html}</div>
      </section>
   )
}

export default Technologies