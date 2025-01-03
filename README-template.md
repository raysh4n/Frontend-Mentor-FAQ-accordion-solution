# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- BEM
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

- Implemented ARIA to HTML 

- the card is centered with 90% width, but it also cannot be expanded for more than 50rem. So in mobile, it will be 90% in width, and when it expanded, cannot go bigger than 50rem;
```css
.card {
	width: 90%;
	max-width: 50rem;
}

```


- this time centering the card using position relative absolute to prevent extra height dead space that can be scrolled down. 
  But to center is horizontally, use left and translateX(). 
```css
.card {
	
    position:absolute;
    top:150px;
    left: 50%; /* Start positioning at 50% of the parent's width */
    transform: translateX(-50%); /*Offset the element by HALF OF ITS WIDTH. So this really works to center is horizontally with the pairing of left:50%*/  
    margin-bottom: 50rem;
}


```


- the card question part - the question and the button are spaced horizontally using space-between. And the max width for the question is 75%
```css
.card__question {
	display:flex;
	align-items: center;	
	justify-content: space-between;
}

.card__question-description {
	max-width:75%;
}
```


- For javascript, query select all the card__content class using querySelectorAll. 
Then, loop through all using forEach(). 
Then, within each of that, addEventListener click to it.
Then, within that implement setTimeout. 



- Learned about the concept of Debounce delay function in javascript. Implemented to prevent the jumping UI effect when user click the button too quick. 
- Simplified and shorten the js function code by toggling first, then check using the (conditional)ternary operator.
```js
	function showHideAnswer() {
		const iconItem = cardContentItem.querySelector(".card__icon");
		const answerItem = cardContentItem.querySelector(".card__answer");
		const isShown = answerItem.classList.toggle("card__answer--show");

		iconItem.src = `/assets/images/icon-${isShown ? "minus" : "plus"}.svg`;
		iconItem.alt = isShown ? "hide answer" : "expand answer";
	}
```




If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [DOM Traversal](https://www.youtube.com/watch?v=v7rSSy8CaYE) - DOM Traversal

- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) - ARIA
