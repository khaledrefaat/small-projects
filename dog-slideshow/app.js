const img = document.querySelector('.img');
const sel = document.querySelector('.dog-selector');
let dog = sel.value.replace(/'-'/gm, '/');
let regex = /-/gm;
fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		img.src = data.message;
	})
	.catch((err) => {
		console.log(err);
	});

// function randomDog() {
// 	// when the dog names contains 2 words like(english bulldog) the api puts(english-bulldog) we are replacing the(-)
// 	let dogRand = sel.value.replace(regex, '/');

// 	fetch(`https://dog.ceo/api/breed/${dogRand}/images/random`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 			img.src = data.message;
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// 	// console.log(dog);
// }

async function randomDog() {
	let dogRand = sel.value.replace(regex, '/');
	const response = await fetch(`https://dog.ceo/api/breed/${dogRand}/images/random`);
	const data = await response.json();
	console.log(data);
	img.src = data.message;
}

setInterval(randomDog, 3000);
