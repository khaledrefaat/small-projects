const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const apiKey = '9c0f77ae5d45404ba38fe9f65e68782d';
const jokeApi = 'https://sv443.net/jokeapi/v2/joke/Programming';
// VoiceRSS Javascript SDK

function toggleButton() {
	button.disabled = !button.disabled;
}

function jokeSpeech(joke) {
	VoiceRSS.speech({
		key: apiKey,
		src: joke,
		hl: 'en-us',
		v: 'Linda',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false
	});
}

async function fetchJoke() {
	let joke;
	try {
		const response = await fetch(jokeApi);
		const data = await response.json();
		data.joke ? (joke = data.joke) : (joke = `${data.setup} ${data.delivery}`);

		jokeSpeech(joke);
		// disable the button
		toggleButton();
	} catch (err) {
		console.log(err);
		alert('error');
	}
}

button.addEventListener('click', fetchJoke);
audioElement.addEventListener('ended', toggleButton);
