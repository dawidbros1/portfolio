class ProjectDatabase {
   constructor() {
      this.projects = [];
      this.init();
   }

   init() {
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

      this.projects.push({
         name: "Aplikacja do gry Phasmophobia [ JavaScript ]",
         description: `Jest to aplikacja pomocnicza do gry Phasmophobia, która pomaga w zidentyfikowaniu ducha podczas rozgrywki.
            Aplikacja umożliwia zaznaczanie znalezionych dowodów, a także eliminację dowodów, których nie udało się odnaleźć.
            W aplikacji została również zaimplementowana prosta funkcjonalność sterowania głosem, która umożliwia zaznaczania, jak i odznaczanie dowodów.`,
         git: "https://github.com/dawidbros1/phasmophobia-ghost-picker",
         link: "https://projekty.tk/phasmophobia/app/"
      })

      // this.projects.push({
      //    name: "Aplikacja do gry Phasmophobia w Angularze",
      //    description: `Jest to aplikacji pomocnicza do gry Phasmophobia, która pomaga w zidentyfikowaniu ducha w grze..
      //        W tej wersji aplikacji został napisany prosty back-end w języku PHP. Po stronie serwera możemy zarządzać duchami oraz dowodami, dzięki czemu szybko możemy aktualizować dane.
      //        Po stronie front-endu dane z serwera zostają pobrane do aplikacji i odpowiednio przetworzone.`,
      //    git: "https://github.com/dawidbros1/ghost-picker-phasmophobia-angular",
      // })

      this.projects.push({
         name: "Task Manager - Frontend [ React ]",
         description: `Jest to aplikacja, która została napisana po ukończeniu kursu React, w celu sprawdzenia swojej wiedzy z tej technologii.
            Celem aplikacji jest zarządzania projektami informatycznymi. Użytkownik otrzymuje możliwość tworzenia projektów, a następnie umieszczania w nich listy zadań.
            Każde zadanie posiada jeden z czterech dostępnych statusów, dzięki czemu jest umieszczone w odpowiedniej kolumnie w widoku projektu.`,
         git: "https://github.com/dawidbros1/task-manager-frontend",
      })

      this.projects.push({
         name: "Task Manager - API [ PHP ]",
         description: `Jest to API dla front-endu aplikacji Task Manager. Waliduje przesłane dane do serwera. Wysyła odpowiedni response do front-endu na requesty użytkownika.`,
         git: "https://github.com/dawidbros1/task-manager-api",
      })
   }

   get() {
      return this.projects;
   }
}

