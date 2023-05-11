// Toggle class active
const navbarNav  = document.querySelector('.navbar-nav');

// ketika haburger menu di klik

document.querySelector('#hamburger-menu').onclick = () =>{
	navbarNav.classList.toggle('active');
};

// keluar dari navbar dengan klik luar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});

// preview image next prev btn
let imgPreview =  document.querySelector('.imgPreview');
let images = [
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Black.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Semi Doff.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Black Doff.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_White.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Super White.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Silver.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Gold.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Police Grey.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Boxer Blue.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Chilli Red.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Petronas Green.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Premium Maroon.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Magenta Pink.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Dark Green.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Tiger Yellow.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Master Yellow.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Fortune Blue.jpg',
	'img/Color Chat Motor/Solid Color/Color Chart_Solid Color_Army Green.jpg'

];

// let i = 0;
// function next() {
// if (i >= images.length - 1) {
//     return false;
//     }
//     i++;
//     imgPreview.setAttribute('src', images[i]);
//     }
// function previous() {
// 	if (i <= 0) {
// 	return false;
//     }
//     i--;
//     imgPreview.setAttribute('src', images[i]);
//     }
// btnPrev.addEventListener('click',previous);