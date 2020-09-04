const img_div = document.querySelector('.img-container');
const select_div = document.querySelector('.selector-container');

async function start() {
	const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
	const data = await response.json();
	console.log(data);
	createBreedList(data.message);
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
		const response = await fetch(`https://dog.ceo/api/breed/hound/images/random`);
		const data = await response.json();
		img_div.innerHTML = `
		<img src="${data.message}" alt="dog" class="img">
`;
	}
}
