# Demon Slayer: Kimetsu no Yaiba

![Demon Slayer: Kimetsu no Yaiba - Season 1 poster](assets/images/hashirasicposter.webp)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) [![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com) [![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)

## About

A website about the anime Demon Slayer: Kimetsu no Yaiba with a brief description of each season released by the anime up until the date this website was launched, along with external links that will show you more information about the anime, in addition to having a feature login and registration with validations.

The latest released version of the website uses the json-server library as a simulated database to store the user's information registered in the site's registration section to later be used as validation for the user to log in, in addition to also using the bcryptjs library for password encryption.

The website also uses localStorage to store user preferences such as dark or light mode and also stores their registered username which will later be displayed on the home page after they register their account or log in.

## Built with

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Zod](https://zod.dev/)
- [JSON Server](https://docs.npmjs.com/)
- [Bcryptjs](https://www.jsdelivr.com/package/npm/bcryptjs)
- [Remix Icon](https://remixicon.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## Setup

1. Clone the repository

```bash
git clone git@github.com:saintjohnn/kimetsu-no-yaiba.git
```

2. Download dependencies

```bash
npm install
```

3. Run the server-json script to initialize json-server

```bash
npm run server-json
```

## Start

After carrying out all the previous instructions, access <https://saintjohnn.github.io/kimetsu-no-yaiba/> and you will not only be able to browse the page, you will also be able to register your account and log in.
