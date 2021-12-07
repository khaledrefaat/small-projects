const headingSpan_span = document.querySelector('h1 span');
const words = [ 'Easy.', 'Hard.', 'Awesome.', 'Cool.' ];
let text = '';
let index = 0;
let wait = 1500;
let isDeleting = false;
let typeSpeed = 300;

(function type() {
	const current = index % words.length;
	// get full text of word
	const fullText = words[current];

	// check if deleting
	if (isDeleting) text = fullText.substring(0, text.length - 1);
	else text = fullText.substring(0, text.length + 1);
	// insert text into element
	headingSpan_span.innerHTML = `<span> ${text}</span>`;
	// initial
	if (isDeleting) typeSpeed /= 2;
	// if word is complete pause the word
	if (!isDeleting && text === fullText) {
		typeSpeed = wait;
		// set deleting to true
		isDeleting = true;
	} else if (isDeleting && text === '') {
		isDeleting = false;
		// move to next word
		index++;
		// pause before start typing
		typeSpeed = 300;
	}
	setTimeout(() => type(), typeSpeed);
})();
