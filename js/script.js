function ScrollToDiv(div){
	const yOffset = -10; 
	const element = document.getElementById(div);
	const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

	window.scrollTo({top: y, behavior: 'smooth'});
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("M-Button").style.display = "none";
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("M-Button").style.display = "block";
  
}