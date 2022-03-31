const projects = [];

projects.push({
   name: "Podstawka do tworzenia aplikacji w technologii PHP",
   description: `Stworzona podstawka to gotowy pakiet startowy plików do tworzenia aplikacji w technologii PHP. 
       Starter posiada podstawowe funkcjonalności takie jak rejestracja/logowanie, edycję profilu oraz możliwość przywrócenia hasła. 
       Backend aplikacji posiada podział na modele, repozytoria, kontrolery, szablony widoków itp.`,
   git: "https://github.com/dawidbros1/php-start",
})

projects.push({
   name: "System do zarządzania zakładkami [ PHP ]",
   description: `Jest to system, który umożliwia udostępnienie wiele linków za pomocą jednego linka. 
       System obsługuje tworzenie folderów oraz umieszczanie w nich stron, a także przenoszenie stron do innych folderów.
       Każdy element opisany jest za pomocą tytułu oraz obrazka, dzięki czemu szybko możemy zlokalizować pożądaną przez nas zawartość`,
   git: "https://github.com/dawidbros1/bookmarks",
   link: "https://mojeprojekty.tk/bookmarks/"
})

projects.push({
   name: "System do zarządzania zakładkami [ LARAVEL ]",
   description: "Wersja projektu, która została napisana w LARAVEL ma poszerzoną strukturę bazy danych o pod foldery. Dodatkowo umożliwia sortowanie elementów wedle własnego uznania.",
   git: "https://github.com/dawidbros1/bookmarks-laravel",
})

projects.push({
   name: "Aplikacja do gry Phasmophobia w JavaScript",
   description: `Jest to aplikacji pomocnicza do gry Phasmophobia, która pomaga w zidentyfikowaniu ducha w grze.
       Umożliwia ustawienie własnego tła aplikacji, zarządzanie przezroczystością boxów na duchy, a także proste sterowanie głosem.`,
   git: "https://github.com/dawidbros1/ghost-picker-phasmophobia-js",
   link: "https://mojeprojekty.tk/phasmophobia/"
})

projects.push({
   name: "Aplikacja do gry Phasmophobia w Angularze",
   description: `Jest to aplikacji pomocnicza do gry Phasmophobia, która pomaga w zidentyfikowaniu ducha w grze..
       W tej wersji aplikacji został napisany prosty back-end w języku PHP. Po stronie serwera możemy zarządzać duchami oraz dowodami, dzięki czemu szybko możemy aktualizować dane.
       Po stronie front-endu dane z serwera zostają pobrane do aplikacji i odpowiednio przetworzone.`,
   git: "https://github.com/dawidbros1/ghost-picker-phasmophobia-angular",
})

projects.push({
   name: "Task Manager - React",
   description: `Jest to system do zarządzania projektami. Umożliwia tworzenie projektów, a także umieszczania w nich zadań do wykonania.`,
   git: "https://github.com/dawidbros1/task-manager",
})

projects.push({
   name: "Task Manager - API",
   description: `Jest to API dla front-endu aplikacji Task Manager. Waliduje przesłane dane do serwera. Wysyła odpowiedni response do front-endu na requesty użytkownika.`,
   git: "https://github.com/dawidbros1/task-manager-api",
})
export default projects;