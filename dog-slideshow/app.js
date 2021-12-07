const img_div = document.querySelector('.img-container');
const img_img = document.querySelector('.slide');
const select_div = document.querySelector('.selector-container');
let timer, deleteFirstPhotoDelay;

async function start() {
	try {
		const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
		const data = await response.json();
		console.log(data);
		createBreedList(data.message);
	} catch (e) {
		console.log(e);
	}
}

start();

function createBreedList(breedList) {
	select_div.innerHTML = `
		<select onchange="loadByBreed(this.value)">
            <option>Choose A Dog To Breed</option>
            ${Object.keys(breedList)
				.map((cur) => {
					return `<option>${cur}</option>`;
				})
				.join('')};
        </select>
	`;
}

async function loadByBreed(breed) {
	if (breed !== 'Choose A Dog To Breed') {
		try {
			const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
			const data = await response.json();
			createSlideShow(data.message);
		} catch (e) {
			console.log(e);
		}
	}
}

loadByBreed();

function createSlideShow(images) {
	let currPosition = 0;
	clearInterval(timer);
	clearTimeout(deleteFirstPhotoDelay);
	if (images.length > 1) {
		img_div.innerHTML = `
		<div class="slide" style="background-image: url(${images[0]})"></div>
		<div class="slide" style="background-image: url(${images[1]})"></div>
		`;
		currPosition += 2;
		timer = setInterval(nextSlide, 3000);
	} else {
		img_div.innerHTML = `
		<div class="slide" style="background-image: url(${images[0]})"></div>
		<div class="slide"></div>
		`;
	}

	function nextSlide() {
		img_div.insertAdjacentHTML(
			'beforeend',
			`<div class="slide" style="background-image: url(${images[currPosition]})"></div>`
		);
		deleteFirstPhotoDelay = setTimeout(function() {
			document.querySelector('.slide').remove();
		}, 1000);
		console.log(currPosition);
		console.log('------------------------- Before');
		currPosition + 1 >= images.length ? (currPosition = 0) : currPosition++;
		console.log(currPosition);
	}
}
