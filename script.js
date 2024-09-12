let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementsByClassName("backBtn")[0];
let nextBtn = document.getElementsByClassName("nextBtn")[0];

scrollContainer.addEventListener("wheel", (evt => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
}))

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})