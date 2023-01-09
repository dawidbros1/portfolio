class Course {
   constructor() {
      this.section = document.getElementById("courses")
      this.courses = (new CourseDatabase()).get();
   }

   render() {
      var components = "";

      this.courses.forEach(course => {
         let icon = "public/images/skills/" + course.image + ".png";

         let component = `
            <div class="course">
               <img class='icon' src="${icon}" alt="obrazek" />
               <div class='name'><a class = "link" target="_blank" href = "${course.link}">${course.name}</a></div>
               <a class='certificate' target="_blank" href="${course.certificate}" rel="noreferrer">
                  <img src="public/images/certificate.png" alt="certyfikat" />
               </a>
            </div>`

         components += component;
      });

      this.section.innerHTML = "<header>Kursy i szkolenia</header>";
      this.section.innerHTML += `<div class='d-flex flex-wrap'>${components}</div>`;
   }
}
