/* =========================
MOBILE MENU TOGGLE
========================= */

function toggleMenu(){

document.getElementById("nav-links").classList.toggle("show");

}


/* =========================
DARK MODE
========================= */

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}
else{
localStorage.setItem("theme","light");
}

}


function toggleMenu(){

let menu=document.getElementById("mobileMenu");

menu.classList.toggle("open");

}


/* =========================
OPEN SUBMENU
========================= */

function openSubMenu(menuId){

document.getElementById("mainMenu").style.display="none";

let submenu=document.getElementById(menuId);

submenu.classList.add("active");

}


/* =========================
BACK BUTTON
========================= */

function goBack(){

document.getElementById("mainMenu").style.display="flex";

document.querySelectorAll(".submenu-panel").forEach(function(menu){

menu.classList.remove("active");

});

}


/* =========================
LOAD SAVED THEME
========================= */

window.onload=function(){

const theme=localStorage.getItem("theme");

if(theme==="dark"){
document.body.classList.add("dark-mode");
}

}


/* =========================
MOBILE CASCADING SUBMENU
========================= */

document.querySelectorAll(".has-submenu > a").forEach(function(menu){

menu.addEventListener("click",function(e){

if(window.innerWidth <= 768){

e.preventDefault();

let submenu = this.nextElementSibling;

/* close other open submenus */

document.querySelectorAll(".submenu").forEach(function(el){

if(el !== submenu){
el.classList.remove("active");
}

});

/* toggle current */

submenu.classList.toggle("active");

}

});

});