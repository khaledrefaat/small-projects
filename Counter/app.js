// selecting the dom
// const btnInc_btn = document.querySelector('.btn__inc');
// const btnReset_btn = document.querySelector('.btn__reset');
// const btnDec_btn = document.querySelector('.btn__dec');
const btn_button = document.querySelectorAll('.btn');
const counter_p = document.querySelector('.counter');

let counter = 0;

// my first code to do it

// // increase the counter by 1
// btnInc_btn.addEventListener('click', () => {
// 	counter++;
// 	counter_p.innerHTML = counter;
// 	checkColor();
// });

// // decrease the counter by 1
// btnDec_btn.addEventListener('click', () => {
// 	counter--;
// 	counter_p.innerHTML = counter;
// 	checkColor();
// });

// // reset the counter to 0
// btnReset_btn.addEventListener('click', () => {
// 	counter = 0;
// 	counter_p.innerHTML = counter;
// 	checkColor();
// });

// function checkColor() {
// 	if (counter > 0) counter_p.style.color = '#27ae60';
// 	else if (counter < 0) counter_p.style.color = '#e74c3c';
// 	else counter_p.style.color = '#000';
// }

// my second code to do it

// my way to create this app

btn_button.forEach((cur) => {
	cur.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn__inc')) counter++;
		else if (e.target.classList.contains('btn__dec')) counter--;
		counter_p.innerHTML = counter;
		checkColor();
	});
});

function checkColor() {
	if (counter > 0) counter_p.style.color = '#27ae60';
	else if (counter < 0) counter_p.style.color = '#e74c3c';
	else counter_p.style.color = '#000';
}
