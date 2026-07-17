// MOBILE MENU

function openMenu(){

let menu = document.getElementById("menu");

if(menu.style.display === "flex"){

menu.style.display = "none";

}

else{

menu.style.display = "flex";

}

}





// SCROLL ANIMATION


const items = document.querySelectorAll(
"section, .card, .member, .why-grid div"
);


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{
threshold:0.15

});



items.forEach(item=>{


item.classList.add("hidden");

observer.observe(item);


});
