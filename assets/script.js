/*const slides = [
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
*/

let $img = document.getElementsByClassName("banner-img")

let $next = document.getElementsByClassName("arrow_left")
let $prev = document.getElementsByClassName("arrow_right")

let monTableau = [
	"./images/slideshowslide1.jpg",
	"./images/slideshowslide2.jpg",
	"./images/slideshowslide3.jpg",
	"./images/slideshowslide4.jpg"
]

let index = 0

console.log(monTableau.length)

let max = monTableau.length - 1
let min = 0


$img.setAttribute("src", monTableau[index])
$p.innerHTML = index

$prev.addEventListener("click", function () {
	if (index === min) {
		index = max
	}
	else {
		index = index - 1
	}
	$img.setAttribute("src", monTableau[index])
	$p.innerHTML = index
})

$next.addEventListener("click", function () {
	if (index === max) {
		index = min
	}
	else {
		index = index + 1
	}
	$img.setAttribute("src", monTableau[index])
	$p.innerHTML = index
})