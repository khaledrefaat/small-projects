const newQuote_btn = document.querySelector('.new-quote');
const twitter_btn = document.querySelector('.twitter');
const quoteText_p = document.querySelector('.quote-text');
const quoteAuthor_p = document.querySelector('.modal-author');

// functions

async function fetchNewQuote() {
	const proxy = 'https://guarded-hamlet-97105.herokuapp.com/';
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	try {
		const response = await fetch(proxy + apiUrl);
		const { quoteText, quoteAuthor } = await response.json();
		quoteText_p.innerText = quoteText;
		// if there is no author set it to unknown
		quoteAuthor ? (quoteAuthor_p.innerText = quoteAuthor) : (quoteAuthor_p.innerText = 'Unknown');
	} catch (err) {
		fetchNewQuote();
		console.log(err);
	}
}

function tweetQuote() {
	const quote = quoteText_p.innerText;
	const author = quoteAuthor_p.innerText;
	const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(tweetUrl, '_blank');
}

// eventListeners
newQuote_btn.addEventListener('click', fetchNewQuote);
twitter_btn.addEventListener('click', tweetQuote);

fetchNewQuote();
