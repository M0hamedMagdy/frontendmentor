# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](http://github.com/m0hamedMagdy/frontendmentor/article-preview-component)
- Live Site URL: [GitHub Pages](http://m0hamedmagdy.github.io/frontendmentor/article-preview-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- No JavaScript/ Only CSS

### What I learned

Toggle Effect Without The Need Of Using Javascript.

By Nesting The Html's Element Div inside the Button Element and Use the :focus Selector To only display the Div when the button is Clicked

```css
main section div.creator button div.share {
  display: none;
}

main section div.creator button:focus div.share {
  display: flex;
}
```

## Author

- Frontend Mentor - [@m0hamedmagdy](https://www.frontendmentor.io/profile/m0hamedmagdy)
- Twitter - [@imohameds2](https://www.twitter.com/imohameds2)
