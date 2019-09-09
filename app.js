 function init(){
	const hamburger = document.querySelector('.menu');
	const gamburgerLines = document.querySelectorAll('.menu line');
	const navOpen = document.querySelector('.nav-open');
	const contact = document.querySelector('.contact-nav');
	const links = document.querySelector('.links');


	const tl = new TimelineMax({paused: true, reversed: true});

	tl.to(navOpen, 0.5 ,{y:0})
	.fromTo(contact, 0.5, {opacity: 0, y: 10}, {opacity:1, y:0},'-=0.1')
	.fromTo(links, 0.5, {opacity: 0, y: 10}, {opacity:1, y:0},'-=0.5')
	.fromTo(gamburgerLines, 0.2, {stroke:'white'}, {stroke:'black'},'-=1')
	.fromTo(hamburger,0.2,{z:0},{z:1},'-=1');




	hamburger.addEventListener('click', ()=>{
		tl.reversed() ? tl.play() : tl.reverse();
	})

	const c = document.querySelector('.contact-container');
	const aboutMe= document.querySelector('.about-me-conatiner');
	const profile=document.querySelector('.profile');
	const aboutMeC= document.querySelector('.about-me');
	const skill= document.querySelector('.skill-tl');
	const portfolio = document.querySelector('.swiper-container')
	const skillContainer =document.querySelector('.skill-container')
	const pro = document.querySelector('.protflio-tl');


	let isInViewport = function (elem) {
		    let bounding = elem.getBoundingClientRect();
		    return (
		        bounding.top >= 0 &&
		        bounding.left >= 0 &&
		        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		    );
};

let flag= true;
let flag1= true;
let flag2= true;

window.addEventListener('scroll', function (event) {
	if (isInViewport(profile) && flag2) {
		aboutMeSet(aboutMe);
		flag2=false;
	}
	if (isInViewport(skill) && flag) {
		skillSet(skill);
		flag = false;
	}
	if (isInViewport(pro) && flag1) {
		portfolioSet(portfolio);
		flag1=false;
	}
}, false);


 }

function aboutMeSet(elem){
const aboutMeC= document.querySelector('.about-me');
	const tl1 = new TimelineMax({paused: true, reversed: true});

	tl1.fromTo(elem, 1,{opacity:0} ,{opacity:1,ease:Power2.easeIn})
	.fromTo(aboutMeC,1,{opacity:0, x:-100},{opacity:1 ,x:0},'-=0.5');
	
	tl1.play();
	
}

function skillSet(skill){
	const web = document.querySelector('.web');
	const program= document.querySelector('.program');

	const tl = new TimelineMax({paused: true, reversed: true});

	tl.fromTo(skill,1.5,{opacity:0, y:100}, {opacity:1, y:0, ease:Power2.easeInOut})
	.fromTo(web,1.5, {opacity:0, x:100}, {opacity:1, x:0, ease:Power2.easeInOut})
	.fromTo(program, 1.5, {opacity:0, x:-100}, {opacity:1, x:0, ease:Power2.easeInOut},'-=1.5');

	tl.play();
}
function portfolioSet(elm){
	const pro = document.querySelector('.protflio-tl');
	const swiper = document.querySelector('.swiper-wrapper');
	const pagination = document.querySelector('.swiper-pagination');
	const swiperN = document.querySelector('.swiper-button-next');
	const swiperP = document.querySelector('.swiper-button-prev');
/*	const swiper = document.querySelector('.swiper-container');*/

	const tl = new TimelineMax({paused: true, reversed: true});

/*	tl.fromTo(pro ,0.5 , {opacity:0, y:-100},{opacity:1, y:0 })
	.fromTo(swiper ,1 , {opacity:0},{opacity:1, ease:Power2.easeIn })
	.fromTo(pagination,0.5 , {opacity:0}, {opacity:1,ease:Power2.easeInOut},'-0.5')
	.fromTo(swiperN ,0.5 , {opacity:0}, {opacity:1,ease:Power2.easeInOut},'-1')
	.fromTo(swiperP ,0.5 , {opacity:0}, {opacity:1,ease:Power2.easeInOut},'-1.5');*/

	tl.fromTo(elm, 1, {opacity:0},{opacity:1, ease:Power2.easeInOut})
	.fromTo(pro,0.5,{opacity:0},{opacity:1, ease:Power2.easeInOut});	

	tl.play();

}


 init();

