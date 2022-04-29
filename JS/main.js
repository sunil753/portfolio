const progress = document.querySelector(".progress-bar-wrapper");

const progressBarPercents = [97, 89, 85, 80, 70];

window.addEventListener("scroll", () => {
 mainFn()
});

const mainFn = () =>{
 if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
   document.querySelectorAll(".progress-percent").forEach((el, i) => {
     el.style.width = `${progressBarPercents[i]}%`;
     el.previousElementSibling.firstElementChild.textContent =
       progressBarPercents[i];
   });
 }
}
mainFn()
window.addEventListener('resize', ()=>{
    window.location.reload()
})