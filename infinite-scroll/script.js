const imgContainer_div = document.getElementById('image-container');
const loader_div = document.getElementById('loader');

const acssesKey = 'MN-WQaHUe88Vcure-x1gSBjuwvpYixZ7NVf5Q1QeX7o';
// Secret Key - phygVDB2jFBEWSLNjgqYRlkLxJcTY2Ej6DZgD4suy0Q

const displayPhotos = arr => {
	// my code
	// const photos = arr.map(({ alt_description, links, urls }) => {
	// 	return `
	// 		<a href"${links.html}">
	// 		<img src="${urls.regular}" alt="${alt_description}">
	// 		</a>
	// 	`;
	// });
	// imgContainer_div.insertAdjacentHTML('beforeend', photos);

	// course's code
	const setAttributes = (element, attributes) => {
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	};
	arr.forEach(cur => {
		const item = document.createElement('a');
		setAttributes(item, {
			href: cur.links.html,
			target: 'blank'
		});
		// create img
		const img = document.createElement('img');
		setAttributes(img, {
			src: cur.urls.regular,
			alt: cur.description_alt,
			title: cur.description_alt
		});
		// put img inside a
		item.appendChild(img);
		imgContainer_div.appendChild(item);
	});
};

const getPhotos = async () => {
	const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${acssesKey}&count=15`);
	const photosArray = await response.json();
	displayPhotos(photosArray);
};

getPhotos();
