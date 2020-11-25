const imgContainer_div = document.getElementById('image-container');
const loader_div = document.getElementById('loader');

let count = 3;
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const Key = 'MN-WQaHUe88Vcure-x1gSBjuwvpYixZ7NVf5Q1QeX7o';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${Key}&count=${count}`;

const loadedImages = () => {
	imagesLoaded++;
	if (imagesLoaded === totalImages) {
		loader_div.hidden = true;
		ready = true;
		count = 7;
	}
};

const displayPhotos = () => {
	imagesLoaded = 0;
	totalImages = photosArray.length;

	// helper function
	const setAttributes = (element, attributes) => {
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	};
	photosArray.forEach(cur => {
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
		img.addEventListener('load', loadedImages);
		// put img inside a
		item.appendChild(img);
		imgContainer_div.appendChild(item);
	});
};

const getPhotos = async () => {
	const response = await fetch(apiUrl);
	photosArray = await response.json();
	displayPhotos();
};

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos();
	}
});

getPhotos();
