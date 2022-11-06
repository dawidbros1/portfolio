class Technology {
   constructor() {
      this.section = document.getElementById("technologies")
      this.technologies = (new TechnologyDatabase()).get();
   }  

   render() {
      var html = "";

      this.technologies.forEach(technology => {
         let component = `
            <div class="technology">
               <div class="fw-bold">${technology.name}</div>
               <div> <img src=${"public/images/skills/" + technology.image + ".png"} alt="" /> </div>

               <div class="rates">
                  <span class="fa fa-circle ${(technology.rate > 0 ? "checked" : "")}"></span>
                  <span class="fa fa-circle ${(technology.rate > 1 ? "checked" : "")}"></span>
                  <span class="fa fa-circle ${(technology.rate > 2 ? "checked" : "")}"></span>
                  <span class="fa fa-circle ${(technology.rate > 3 ? "checked" : "")}"></span>
                  <span class="fa fa-circle ${(technology.rate > 4 ? "checked" : "")}"></span>
               </div>
            </div> `

         html += component;
      });

      this.section.innerHTML = "<header>Technologie</header>";
      this.section.innerHTML += `<div class='d-flex flex-wrap text-center'>${html}</div>`;
   }
}
