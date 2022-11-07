class Main {
   constructor() {
      this.courseComponent = new Course();
      this.projectsComponent = new Project();
   }

   render() {
      this.courseComponent.render();
      this.projectsComponent.render();
   }
}

(new Main()).render();