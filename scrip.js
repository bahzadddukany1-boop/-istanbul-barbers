// Smooth Scroll Animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});
});

// Fade In Sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="all 0.8s ease";

observer.observe(section);

});

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#FFD700";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click", ()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
