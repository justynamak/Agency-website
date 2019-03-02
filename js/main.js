const carouselWork = () =>{
	const carousel = document.querySelector(".work-carousel");
	let indexInterval;
	const tabs = [...document.querySelectorAll(".work__article")];
	
	const tabsCopy = [];	
	
	let active = [0,1,2,3,4,5];
	
	let htmlTabs = [-35,0,35,70,100,135];
	
	
	tabs.forEach((tab)=>{		
		let html = tab.innerHTML;
		const art = document.createElement("article");
		art.innerHTML = html;
		art.classList.add("work__article");
		art.classList.add("work-carousel__item");
		carousel.appendChild(art);
		tabsCopy.push(tab);
	});

	const twiceTabs = [...document.querySelectorAll(".work-carousel__item")];

	
	twiceTabs.forEach((tab,i)=>{
		let current = i;
		current++;
		if(current >= twiceTabs.length) {
			current = 0;
			tab.style.width = "35%";
		}
		tab.style.left = htmlTabs[current] + "%";
	});
	
	const changeSlide = () =>{	
		
		twiceTabs.forEach((tab,i) =>{
			let current = i;
			current++;
			
			if(current >= twiceTabs.length) current = 0;
			
			tab.style.left = htmlTabs[active[current]] +"%";
			
			if( htmlTabs[active[current]] == htmlTabs
			  [0]){
				tab.style.width = "35%";
			}
			else if( htmlTabs[active[current]] == htmlTabs[htmlTabs.length-1]) {
				tab.style.width = "40%";
				tab.style.display = "none";	
				
				
			}
			else if(htmlTabs[active[current]] == htmlTabs[htmlTabs.length-2]){
				tab.style.display = "block";
//				
			}		
			
		});

	};

	const carouselSlide = () =>{
		active.forEach((item,i) => {
					   
			let current = item;
			
			current--;
			
			if(current < 0) current =  twiceTabs.length-1;
			
			active[i] = current;
		});
			console.log(active);
		changeSlide();
	}

indexInterval = setInterval(carouselSlide, 5000);	
	
const stopSlide = ()=>{
	clearInterval(indexInterval);			 		
};
	
const startSlide = () =>{
	indexInterval = setInterval(carouselSlide, 5000);
};
	
carousel.addEventListener("mouseenter", stopSlide);
carousel.addEventListener("mouseleave", startSlide);
};
carouselWork();


const changeReview = () =>{	

const img = document.querySelector(".review__col-first img");
const blockquote = document.querySelector(".review__blockquote");
const author = document.querySelector(".review__author");
const items = [...document.querySelectorAll(".review__client")];


const comments = [
	{
	text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
	author:"Jinny Snow, Company CEO",
	img:"././assets/client%20img.png"
	},	
	{
	text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque molestiae saepe tempore suscipit dolore maxime nihil iste blanditiis corporis, consectetur ab voluptatem expedita, excepturi veniam neque totam, cumque illo porro dolor culpa accusamus nisi quos laudantium sed. ",
	author:"Illo Minima, Company DOLORE",
	img:"././assets/team%20person.png"
	},
	{
	text:"Eaque blanditiis, totam voluptate tenetur omnis officiis dolore libero harum corporis ipsum necessitatibus, culpa ratione? Tenetur omnis aperiam obcaecati pariatur veritatis, excepturi odit quos soluta.",
	author:"Nihil Iste, Company MODI",
	img:"././assets/team_person2.png"
	}
];


items.forEach((item,index)=>{	
	item.addEventListener("click", () =>{		
		clearInterval(indexSlide);
		
		let indexActive = items.findIndex(item => item.classList.contains("review__client--active"));
		
		items[indexActive].classList.remove("review__client--active");
				
		items[index].classList.add("review__client--active");			
		blockquote.textContent = comments[index].text;
		author.textContent = comments[index].author;
		img.src = comments[index].img;		
		indexSlide = setInterval(slideReview,5000);
		
	} );
	
});
//	let i = index;

const slideReview = () =>{	
	
	let indexActive = items.findIndex(item => item.classList.contains("review__client--active"));
	items[indexActive].classList.remove("review__client--active");
	
	indexActive++;
	
	if(indexActive === comments.length)indexActive = 0;
		
	items[indexActive].classList.add("review__client--active");
	
	blockquote.textContent = comments[indexActive].text;
	
	author.textContent = comments[indexActive].author;
	
	img.src = comments[indexActive].img;	
	
	
	
	
}
let indexSlide = setInterval(slideReview,10000);
}
changeReview();

const teamCarousel = () =>{
	
const team = [
	{
		imgBig:"./assets/person2.png",
		imgSmall:"./assets/person2-small.png"
	},
	{
		imgBig:"./assets/person1.png",
		imgSmall:"./assets/person1-small.png"		
	},
	{
		imgBig:"./assets/person3.png",
		imgSmall:"./assets/person3-small.png"
	}

	
	
];
	
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft= document.querySelector(".arrow-left");	
const teamItems =  [...document.querySelectorAll(".team__item")];
	
const bigIndex = 1;
	
if (team.length !== teamItems.length) {        
	console.log('teamCarousel - Błędna konfiguracja albo html!');
	return false;
}

	let active = [0,1,2];

	const changeCarousel = () =>{
		
		teamItems.forEach((item,i)=>{
					
		let key = "imgSmall";
						  
		if(i === bigIndex){
			
			key = "imgBig";
			
		}
		
		
		
		item.src = team[active[i]][key];
						  
		});
	};
	
	const carouselRight = () => {
		
		clearInterval(indexCarousel);
		
		active.forEach((item,i) => {
			
			let current = item;//3//0//1

			current--;

			if(current < 0) {
				current = (team.length - 1);//3
			}
				active[i] = current;
				
			
		});
		
		changeCarousel();
		
		indexCarousel = setInterval(carouselAuto, 5000);
		
	};
	
	const carouselLeft = () =>{
		
		clearInterval(indexCarousel);
		
		active.forEach((item,i) => {
					   
			let current = item;
			
			current++;
			
			if(current >= team.length) current = 0;
			
			active[i] = current;
		});
		
		changeCarousel();
		indexCarousel = setInterval(carouselAuto, 5000);
		
	};

const carouselAuto = ()=>{
	active.forEach((item,i)=>{
		let current = item;
		current--;
		if(current < 0) current = team.length -1;
		active[i] = current;
	});
	 changeCarousel();
	 
}
	
	
let indexCarousel = setInterval(carouselAuto, 5000);
arrowRight.addEventListener("click", carouselRight);
arrowLeft.addEventListener("click", carouselLeft);	

};
teamCarousel();

//////funcjonalnosci na stronie:///

//efekt scrolla(po kliknieciu w linki nawigacyjne)

const scrollEffect = () =>{

	const links = document.querySelectorAll(".nav__link");
	
	const scroll = (e) =>{		
		e.preventDefault();
				
		const idEl = e.target.getAttribute("href");
		const section = document.querySelector(idEl);
		
		section.scrollIntoView({ 
  		behavior: 'smooth' 
		});
		
	}
	
	links.forEach(link => link.addEventListener("click", scroll));
};

scrollEffect();

//hamburger menu

const hamburgerMenu = () =>{
	
	const btn = document.querySelector(".nav__icon-bars");
	const arrow = document.querySelector(".nav__icon-arrow-left");
	const nav = document.querySelector(".nav");
	const navLinks = document.querySelectorAll(".nav__link");
	
	const hideMenu = () =>{
		nav.classList.remove("nav--active");
		setTimeout(()=>{
			btn.classList.remove("hidden");
//			arrow.classList.remove("active");
		},600);
	}
	
	const showMenu = () =>{		
		nav.style = null;
		nav.classList.add("nav--active");	
		btn.classList.add("hidden");
		
		if(getComputedStyle(btn).display === "none"){
			navLinks.forEach(link =>{
				link.addEventListener("click",hideMenu);
		});
	}
	};
	window.addEventListener("scroll", ()=>{
		const header = document.querySelector(".header");
		
		console.log(header);
		if(window.pageYOffset > header.clientHeight) {
			btn.style.background = "#fff"
		}	
		else {
			btn.style.background = "";
		}
		console.log(window.innerHeight);
	});
	
	window.addEventListener("resize", () => {
		if(window.innerWidth > 768){
			nav.style.transition = "none";
			hideMenu();
		}
		else{
			return;	
		}
	});
	
	arrow.addEventListener("click", hideMenu);
	btn.addEventListener("click", showMenu);
	
};
hamburgerMenu();

















