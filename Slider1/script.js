$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	$('nav a,footer a.up').click(function(e){

		// If a link has been clicked, scroll the page to the link's hash target:

		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});

});

var linc_count = jobs_count = life_count = 1;
var total_life = total_lincon = 7;
var total_jobs = 10;
window.setInterval(function Slider() {

	var Image = document.getElementById('imgL');
	linc_count+=1;
	if(linc_count>total_lincon){
		linc_count=1;
	}
	Image.src="Images/Lincon"+linc_count+".png";

},3000);

window.setInterval( function Slider1(){

	var Image = document.getElementById('imgJ');
	jobs_count+=1;
	if(jobs_count>total_jobs){
		jobs_count=1;
	}
	Image.src="Images/Jobs"+jobs_count+".jpg";
}, 4000);

window.setInterval(function Slider2(){
	var Image = document.getElementById('imgLi');
	life_count+=1;
	if(life_count>total_life){
		life_count=1;
	}
	Image.src="Images/Life"+life_count+".jpg";
}, 3500);
