const img = document.querySelector('.img');
const sel = document.querySelector('.dog-selector');
let dog = sel.value.replace(/'-'/gm, '/');
fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		img.src = data.message;
	})
	.catch((err) => {
		console.log(err);
	});

function randomDog() {
	let regex = /-/gm;
	// when the dog names contains 2 words like(english bulldog) the api puts(english-bulldog) we are replacing the(-)
	let dogRand = sel.value.replace(regex, '/');

	fetch(`https://dog.ceo/api/breed/${dogRand}/images/random`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			img.src = data.message;
		})
		.catch((err) => {
			console.log(err);
		});
	// console.log(dog);
}

setInterval(randomDog, 3000);
