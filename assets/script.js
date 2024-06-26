const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let $img = document.getElementsByClassName("banner-img")[0];

let $next = document.getElementsByClassName("arrow_right")[0];
let $prev = document.getElementsByClassName("arrow_left")[0];

let $tagLine = document.querySelector("#banner p");

let dotsContainer = document.querySelector(".dots");

let index = 0;

// Create dots for each slide and append to dotsContainer
slides.forEach((slide, i) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === index) {
		dot.classList.add("dot_selected");
	}
	dot.addEventListener("click", () => {
		index = i;
		updateSlide(index);
	});
	dotsContainer.appendChild(dot);
});

function activeDot(i) {
	const dots = document.querySelectorAll(".dot");
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[i].classList.add("dot_selected");
}

function updateSlide(index) {
	$img.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
	$tagLine.innerHTML = slides[index].tagLine;
	activeDot(index);
}

// Initial slide update
updateSlide(index);

$prev.addEventListener("click", function () {
	if (index === 0) {
		index = slides.length - 1;
	} else {
		index -= 1;
	}
	updateSlide(index);
});

$next.addEventListener("click", function () {
	if (index === slides.length - 1) {
		index = 0;
	} else {
		index += 1;
	}
	updateSlide(index);
});
