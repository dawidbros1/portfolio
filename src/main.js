class Main {
   constructor() {
      this.courseComponent = new Course();
      this.technologyComponent = new Technology();
      this.projectsComponent = new Project();
   }

   render() {
      this.courseComponent.render();
      this.technologyComponent.render();
      this.projectsComponent.render();
   }
}

(new Main()).render();