const btns = document.querySelectorAll('.btn');
const img_img = document.querySelector('.idiot-img');
const name_h2 = document.querySelector('.name');
const job_h3 = document.querySelector('.job');
const about_p = document.querySelector('.about');
// const btn_prev_button = document.querySelector('.btn-prev');
// const btn_next_button = document.querySelector('.btn-nex');
// const btn_random_button = document.querySelector('.btn-rand');

const names = [ 'willie lindsay', 'Dexter Brett', 'Emmie Brett' ];
const jobs = [ 'the boss', 'intern', 'photographer' ];
const abouts = [
	'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
	"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
];

btns.forEach((cur) => {
	let num = 0;
	cur.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-prev')) {
			num--;
			if (num < 0) num = 2;
		} else if (e.target.classList.contains('btn-nex')) {
			num++;
			if (num > 2) num = 0;
		} else if (e.target.classList.contains('btn-rand')) num = Math.floor(Math.random() * 3);
		console.log(num);
		review(num);
	});
});

function review(num) {
	img_img.src = `${num}.jpg`;
	name_h2.innerHTML = names[num];
	job_h3.innerHTML = jobs[num];
	about_p.innerHTML = abouts[num];
}
