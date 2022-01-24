# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

Desktop
  <img src="_fem-screenshots/desktop.png" alt="desktop solution screenshot" style="display:block;width:1264px;"/>

Mobile
  <img src="_fem-screenshots/mobile.png" alt="mobile solution screenshot" style="display:block;width:375px;"/>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with types
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

On Desktop viewport the code below centers country card items while searching for a country when the number of card items are less than 4.

```js
    // styled-components
    grid-template-columns: repeat(${(p) => (p.count < 4 ? p.count : 4)}, auto);
    justify-content: ${(p) => (p.count < 4 ? 'space-evenly' : 'space-between')};
```
