class Project {
   constructor() {
      this.section = document.getElementById("projects")
      this.data = (new ProjectDatabase()).get();
   }

   render() {
      var html = "";

      this.data.forEach(project => {

         let linkToProject = "";

         if (project.link != null) {
            linkToProject = `
            <div>
               <div class="link fw-bold">
                  <span> &rsaquo; &rsaquo; &rsaquo; </span>
                  <a target="_blank" href=${project.link} rel="noreferrer">Zobacz projekt</a>
                  <span> &lsaquo; &lsaquo; &lsaquo; </span>
               </div>
            </div>`;
         }

         let component = `
            <div class="project"}>
               <div class="title"><span class="fw-bold">${project.name}</span> </div>
               <div><span class="fw-bold"></span>${project.description}</div>
               <div class="git">Zobacz repozytorium:
                  <a target="_blank" class="fw-bold" rel="noreferrer" href=${project.git}> GIT</a>
               </div>

               ${linkToProject}
            </div>`

         html += component;
      });

      this.section.innerHTML = "<header>Doświadczenie</header>";
      this.section.innerHTML += `<div>${html}</div>`;
   }
}
