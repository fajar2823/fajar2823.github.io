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

// clip
let	btnPlay = document.querySelector('.play');
let clip = document.querySelector('.clip');
let iframe = document.querySelector('iframe');
btnPlay.onclick= function(){
	btnPlay.classList.add('active');
	clip.classList.add('active');
	iframe.contentWindow.postMessage( '{"event":"command", "func":"playVideo", "args":""}', '*');
}

document.addEventListener('click', function (e) {
	if (!btnPlay.contains(e.target) ) {
		clip.classList.remove('active');
		iframe.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');


	}
});
