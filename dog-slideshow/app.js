const img = document.querySelector('.img');
// fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json()).then((data) => {
// 	console.log(data);
// 	img.src = data.message;
// })

function randomDog() {
	fetch('https://dog.ceo/api/breed/husky/images/random').then((res) => res.json()).then((data) => {
		console.log(data);
		img.src = data.message;
	});
}

setInterval(randomDog, 2000);
