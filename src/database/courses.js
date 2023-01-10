class CourseDatabase {
   constructor() {
      this.courses = [];
      this.init();
   }

   init() {
      this.courses.push({
         name: "Programowanie w PHP 7.4 od podstaw - teoria i praktyka",
         link: "https://www.udemy.com/course/kurs-programowanie-w-php/",
         certificate: "https://www.udemy.com/certificate/UC-d8318550-d502-4c3f-9a31-d6dc828b10e6/",
         image: "php"
      })

      this.courses.push({
         name: "Laravel Framework - wielkie kompendium programisty PHP",
         link: "https://www.udemy.com/course/kurs-laravel-framework/",
         certificate: "https://www.udemy.com/certificate/UC-9334095e-d114-4926-9e2a-ba67213d717d/",
         image: "laravel"
      })

      this.courses.push({
         name: "Kurs Symfony 4 dla początkujących",
         link: "https://www.udemy.com/course/kurs-symfony-4-dla-poczatkujacych/",
         certificate: "https://www.udemy.com/certificate/UC-6f956b1d-c19d-44cf-89e8-3bff316e0921/",
         image: "symfony"
      })

      this.courses.push({
         name: "React od podstaw",
         link: "https://www.udemy.com/course/kurs-react-od-podstaw/",
         certificate: "https://www.udemy.com/certificate/UC-01b3eeb7-19ab-4621-b7a5-5d68d0cd9a58/",
         image: "react"
      })

      this.courses.push({
         name: "Angular - kompletny kurs od podstaw - edycja na rok 2021",
         link: "https://www.udemy.com/course/angular-kompletny-kurs-od-podstaw/",
         certificate: "https://www.udemy.com/certificate/UC-b3f627a4-dc5e-472e-8e70-d31599de9ebb/",
         image: "angular"
      })

      this.courses.push({
         name: "[2022] Programowanie w JavaScript od Zera do Mastera",
         link: "https://www.udemy.com/course/kurs-programowanie-w-javascript-od-zera-do-mastera/",
         certificate: "https://www.udemy.com/certificate/UC-9f2c303b-82d4-4279-88ef-7a3b95a142a7/",
         image: "js"
      })

      this.courses.push({
         name: "Wzorce Projektowe (Design Patterns)",
         link: "https://www.udemy.com/course/wzorce-projektowe/",
         certificate: "https://www.udemy.com/certificate/UC-31439e62-0f2d-4983-ba5d-4995f65192a5/",
         image: "design-patterns"
      })

      this.courses.push({
         name: "SOLID - praktyczny kurs",
         link: "https://www.udemy.com/course/praktyczny-kurs-solid/",
         certificate: "https://www.udemy.com/certificate/UC-b94f99a4-29e2-4e3c-93a0-3b8e3aafc9c0/",
         image: "solid"
      })

      this.courses.push({
         name: "GIT od podstaw dla każdego",
         link: "https://www.udemy.com/course/git-od-podstaw-dla-kazdego/",
         certificate: "https://www.udemy.com/certificate/UC-184a327e-5cc8-45a4-bcc8-97052472ab71/",
         image: "solid"
      })
   }

   get() {
      return this.courses;
   }
}

