class ProjectDatabase {
   constructor() {
      this.projects = [];
      this.init();
   }

   init() {
      this.projects.push({
         name: "Aplikacja do wspomagania zarządzania szkołą [ SYMFONY ] [ w trakcie ]",
         description: `Jest to aplikacja, która będzie wspomagać zarządzanie szkołą.`,
         git: "https://github.com/dawidbros1/school-app",
      })

      this.projects.push({
         name: "Aplikacja do segregowania subskrypcji z serwisu YouTube [ PHP ]",
         description: 'Aplikacja umożliwia grupowanie subskrypcji oraz wyświetlanie filmów z danej grupy',
         git: "https://github.com/dawidbros1/youtube-subscription-manager",
      })

      this.projects.push({
         name: "Podstawka do tworzenia aplikacji w technologii PHP [ PHP ]",
         description: `Jest to pakiet startowy plików do tworzenia aplikacji w technologii PHP. 
            Pakiet posiada moduł użytkownika zawierający takie funkcjonalności jak rejestracja/logowanie, zarządzanie profilem oraz przywrócenie hasła.
            Backend pakietu korzysta ze wzorca MVC.`,
         git: "https://github.com/dawidbros1/php-start",
      })

      this.projects.push({
         name: "Aplikacja do zarządzania zadaniami [ LARAVEL ]",
         description: `Jest to aplikacja do prostego oraz intuicyjnego zarządzania zadaniami.`,
         git: "https://github.com/dawidbros1/todo-app",
      })

      this.projects.push({
         name: "Aplikacja do zarządzania zakładkami [ PHP ]",
         description: `Jest to aplikacja, która ułatwia dostęp do pożądanej przez nas zawartości na różnych urządzeniach. 
            Aplikacja umożliwia segregowanie naszych stron w kategorie, które następnie możemy udostępnić znajomym.`,
         git: "https://github.com/dawidbros1/bookmarks",
         link: "https://mybookmarks.cf/"
      })

      this.projects.push({
         name: "Aplikacja do zarządzania zakładkami [ LARAVEL ]",
         description: `Jest to rozszerzona wersja aplikacji napisanej w języku PHP. 
            Aplikacja została rozszerzona o możliwość tworzenia podfolderów, a także został dodany moduł do zarządzania folderami.`,
         git: "https://github.com/dawidbros1/bookmarks-laravel",
      })

      this.projects.push({
         name: "Proste forum internetowe [ SYMFONY ]",
         description: `Jest to proste forum internetowe umożliwiające tworzenie wątków dla administratora, a także tematów, postów i komentarzy dla użytkowników.`,
         git: "https://github.com/dawidbros1/forum",
      })
   }

   get() {
      return this.projects;
   }
}

