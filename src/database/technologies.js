class TechnologyDatabase {
   constructor() {
      this.technologies = [];
      this.init();
   }

   init() {
      // FRONT
      this.technologies.push({ name: "HTML 5", image: "html", rate: 2 });
      this.technologies.push({ name: "CSS 3", image: "css", rate: 2 });
      this.technologies.push({ name: "JavaScript", image: "js", rate: 2 })

      this.technologies.push({ name: "Sass", image: "sass", rate: 2 })
      this.technologies.push({ name: "Bootstrap 5", image: "bootstrap", rate: 2 })

      this.technologies.push({ name: "Angular 5", image: "angular", rate: 1 })
      this.technologies.push({ name: "React", image: "react", rate: 1 })
      // BACK
      this.technologies.push({ name: "PHP 7.4", image: "php", rate: 2 })
      this.technologies.push({ name: "Laravel 8", image: "laravel", rate: 2 })
      this.technologies.push({ name: "Symfony 5", image: "symfony", rate: 2 })
      // DATABASE
      this.technologies.push({ name: "SQL", image: "sql", rate: 2 })
      this.technologies.push({ name: "MySQL", image: "mysql", rate: 2 })
      // OTHER
      this.technologies.push({ name: "GIT", image: "git", rate: 2 })
   }

   get() {
      return this.technologies;
   }
}


