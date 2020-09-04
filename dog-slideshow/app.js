const img_img = document.querySelector('.img');
const select_div = document.querySelector('.selector-container');

async function randomDog() {
	const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
	const data = await response.json();
	console.log(data);
	createBreedList(data.message);
}

randomDog();

function createBreedList(breedList) {
	select_div.innerHTML = `
		<select>
            <option>Choose A Dog To Breed</option>
            ${Object.keys(breedList).map((cur) => {
				return `<option>${cur}</option>`;
			})}
        </select>
	`;
}
