const btnMenu = document.querySelector('.menu__button');
const burgerMenu = document.querySelector('.header__burger-menu');
const anchors = document.querySelectorAll('a[href*="#"]');

btnMenu.addEventListener('click',(e)=>{
	e.preventDefault();
	console.log('fsdf');
	if(burgerMenu.classList.contains('active')){
		burgerMenu.classList.remove('active');
	}
	else{
		burgerMenu.classList.add('active');
	}
});

for (let anchor of anchors) {
	anchor.addEventListener('click', function(e){
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);
		console.log(blockID)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block:'start'
		})
	})
}
// Watcher
const items = document.querySelectorAll('[data-item]');
const options = {
	threshold: 0.2
}

const callback = (entries) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('active');
		}
	});
}

const observer = new IntersectionObserver(callback, options);

items.forEach(item => {
	observer.observe(item)
})