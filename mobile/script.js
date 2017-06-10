var icon = document.getElementById("touch-menu");
var spisok = document.querySelector(".nav");
icon.addEventListener("click", function(){
	spisok.style.display = "block";
	icon.removeAttribute("src", "img/iconbar.png");
	icon.setAttribute("src", "img/leftbar.png");
	icon.addEventListener("click", function(){
		spisok.style.display = "none";
		icon.removeAttribute("src", "img/leftbar.png");
		icon.setAttribute("src", "img/iconbar.png");
	})
})
