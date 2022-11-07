class ProjectDatabase {
   constructor() {
      this.projects = [];
      this.init();
   }

   init() {
      this.projects.push({
         name: "Youtube subscription manager",
         description: `Jest to aplikacja do serwisu YouTube, która umożliwia segregowanie swoich subskrypcji.`,
         git: "https://github.com/dawidbros1/youtube-subscriptions-manager",
      })

      this.projects.push({
         name: "Podstawka do tworzenia aplikacji w technologii PHP",
         description: `Stworzona podstawka to gotowy pakiet startowy plików do tworzenia aplikacji w technologii PHP. 
             Starter posiada podstawowe funkcjonalności takie jak rejestracja/logowanie, edycję profilu oraz możliwość przywrócenia hasła. 
             Backend aplikacji posiada podział na modele, repozytoria, kontrolery, szablony widoków itp.`,
         git: "https://github.com/dawidbros1/php-start",
      })

      this.projects.push({
         name: "System do zarządzania zakładkami [ PHP ]",
         description: `Jest to system, który umożliwia udostępnienie wiele linków za pomocą jednego linka. 
             System oferuje możliwość tworzenia pojemników (tzw. kategorii), do których następnie możemy dodawać linki do stron.
             Strony można przenosić między różnymi pojemnikami. Każda kategoria jest opatrzona statusem prywatności, co zapewnia bezpieczeństwo naszych prywatnych danych.
             Każdy element opisany jest za pomocą tytułu oraz obrazka, dzięki czemu szybko możemy zlokalizować pożądaną przez nas zawartość.`,
         git: "https://github.com/dawidbros1/bookmarks",
         link: "https://mybookmarks.cf/"
      })

      this.projects.push({
         name: "System do zarządzania zakładkami [ LARAVEL ]",
         description: `Wersja projektu, która została napisana w LARAVEL, ma poszerzoną strukturę bazy danych o podfoldery. 
            Każdy pojedynczy element został zaopatrzony w status prywatności oraz widoczności. Dodatkowo system umożliwia sortowanie elementów wedle własnego uznania.`,
         git: "https://github.com/dawidbros1/bookmarks-laravel",
      })

      this.projects.push({
         name: "Forum [ Symfony ]",
         description: `Jest to proste forum umożliwiające tworzenie wątków dla administratora, a także tematów, postów i komentarzy dla użytkowników.`,
         git: "https://github.com/dawidbros1/forum",
      })
   }

   get() {
      return this.projects;
   }
}

