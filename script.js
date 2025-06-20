const shareBtn = document.getElementById("shareBtn");
const tooltip = document.getElementById("tooltip");
const body = document.querySelector("body");
const tooltip2 = document.getElementById("tooltip2");
const mQuery = window.matchMedia("max-width: 768px");

shareBtn.addEventListener("click", () => {
    tooltip2.classList.toggle("tooltipMove")
    shareBtn.classList.toggle("buttonActive")
    tooltip.classList.toggle("hidden");
    
})