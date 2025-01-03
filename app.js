//Iteration 1
// const cardContent = document.querySelectorAll(".card__content")
// console.log(cardContent)

// for (const cardContentItem of cardContent) {
// 	cardContentItem.addEventListener("click", () => {
// 		const position = cardContentItem.id.replace("button-", "")

// 		const answerItem = document.querySelector(`#answer-${position}`)
// 		const iconItem = document.querySelector(`#icon-${position}`)

// 		if (!answerItem.classList.contains("card__answer--show")) {
// 			answerItem.classList.add("card__answer--show")
// 			iconItem.src = "/assets/images/icon-minus.svg"
// 			iconItem.alt = "minus icon"
// 		} else {
// 			answerItem.classList.remove("card__answer--show")
// 			iconItem.src = "/assets/images/icon-plus.svg"
// 			iconItem.alt = "plus icon"
// 		}

// 	})
// }


//Iteration 2
// const cardContent = document.querySelectorAll(".card__content")
// console.log(cardContent)
// cardContent.forEach((cardContentItem) => {
//     console.log(`button item is ${cardContentItem}`)
// 	// Loop through each button
// 	cardContentItem.addEventListener("click", () => {
// 		// Extract the position from the button's ID
// 		const position = cardContentItem.id.replace("button-", "")

// 		// Get the corresponding answer and icon elements
// 		const answerItem = document.querySelector(`#answer-${position}`)
// 		const iconItem = document.querySelector(`#icon-${position}`)

// 		// Toggle the "card__answer--show" class and update the icon
// 		if (!answerItem.classList.contains("card__answer--show")) {
// 			answerItem.classList.add("card__answer--show")
// 			iconItem.src = "/assets/images/icon-minus.svg"
// 			iconItem.alt = "minus icon"
// 		} else {
// 			answerItem.classList.remove("card__answer--show")
// 			iconItem.src = "/assets/images/icon-plus.svg"
// 			iconItem.alt = "plus icon"
// 		}
// 	})
// })




//Iteration 3
// const cardContent = document.querySelectorAll(".card__content")
// cardContent.forEach((cardContentItem) => {
// 	cardContentItem.addEventListener("click", () => {
// 		const iconItem = cardContentItem.querySelector(".card__icon")
// 		console.log(iconItem)
// 		const answerItem = cardContentItem.querySelector(".card__answer")
// 		console.log(answerItem)
// 		if (!answerItem.classList.contains("card__answer--show")) {
// 			answerItem.classList.add("card__answer--show")
// 			iconItem.src = "/assets/images/icon-minus.svg"
// 			iconItem.alt = "minus icon"
// 		} else {
// 			answerItem.classList.remove("card__answer--show")
// 			iconItem.src = "/assets/images/icon-plus.svg"
// 			iconItem.alt = "plus icon"
// 		}
// 	})
// })


//Iteration 4 a much simpler shorter way
// const cardContent = document.querySelectorAll(".card__content")
// cardContent.forEach((cardContentItem) => {
// 	cardContentItem.addEventListener("click", () => {
// 		cardContentItem.style.pointerEvents = "none" // Disable clicks

// 		const iconItem = cardContentItem.querySelector(".card__icon")
// 		console.log(iconItem)
// 		const answerItem = cardContentItem.querySelector(".card__answer")
// 		console.log(answerItem)

// 		const isShown = answerItem.classList.toggle("card__answer--show")
// 		iconItem.src = `/assets/images/icon-${isShown ? "minus" : "plus"}.svg`
// 		iconItem.alt = `${isShown ? "minus" : "plus"} icon`
// 		cardContentItem.style.pointerEvents = "" // Disable clicks

// 		setTimeout(() => {
// 			cardContentItem.style.pointerEvents = "" // Re-enable clicks after 300ms
// 		}, 1000) // Match the duration of your CSS transition or animation
// 	})
// })





//iteration 4
//to prevent when clicking too quickly, causing some non responsiveness or jumpy looking UI. Using the cleartimeout. 
//Basically, if i were to click quickly for 2 consecutive times. That means for the first click, the logic within the settimeout() will not run, and only the 2nd will run.
// When the first click occurs:
// The setTimeout is scheduled to run after the specified delay.
// However, if a second click happens before the timeout completes, the clearTimeout cancels the first scheduled execution.
// On the second click:
// The old setTimeout is cleared.
// A new setTimeout is scheduled.
// Outcome:
// Only the logic within the setTimeout associated with the last click (second click) will execute after the delay. This ensures that the logic doesn't run multiple times for rapid, consecutive clicks.


const cardContent = document.querySelectorAll(".card__content");
cardContent.forEach((cardContentItem) => {
	let debounceTimeout

	cardContentItem.addEventListener("click", () => {
		clearTimeout(debounceTimeout) // Clear any existing timeout
		debounceTimeout = setTimeout(() => {
			//setTimeout() will run even though it is assigned under variable debounceTimeout, setTimeout() will assign unique id to the debounceTimeout()
			console.log(`timeout id is ${debounceTimeout}`); 
			showHideAnswer();
		}, 150); // Debounce delay (150ms). delay 150ms, after that only trigger the logic above
	})


	function showHideAnswer() {
		const iconItem = cardContentItem.querySelector(".card__icon");
		const answerItem = cardContentItem.querySelector(".card__answer");
		const isShown = answerItem.classList.toggle("card__answer--show");

		iconItem.src = `/assets/images/icon-${isShown ? "minus" : "plus"}.svg`;
		iconItem.alt = isShown ? "hide answer" : "expand answer";
	}
})



//Iteration 5 this works too and ok to be used too
// const cardContent = document.querySelectorAll(".card__content")
// cardContent.forEach((cardContentItem) => {
// 	let debounceTimeout

// 	cardContentItem.addEventListener("click", () => {
// 		clearTimeout(debounceTimeout) // Clear any existing timeout
// 		debounceTimeout = setTimeout(() => {
// 			//setTimeout() will run even though it is assigned under variable debounceTimeout, setTimeout() will assign unique id to the debounceTimeout()
// 			console.log(`timeout id is ${debounceTimeout}`)
// 				const iconItem = cardContentItem.querySelector(".card__icon")
// 				const answerItem = cardContentItem.querySelector(".card__answer")
// 				const isShown = answerItem.classList.toggle("card__answer--show")

// 				iconItem.src = `/assets/images/icon-${isShown ? "minus" : "plus"}.svg`
// 				iconItem.alt = isShown ? "minus icon" : "plus icon"
// 		}, 150) // Debounce delay (150ms). delay 150ms, after that only trigger the logic above
// 	})

// })