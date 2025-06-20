const shareBtn = document.getElementById("shareBtn");
const tooltip = document.getElementById("tooltip");
const tooltip2 = document.getElementById("tooltip2");

shareBtn.addEventListener("click", () => {
    tooltip2.classList.toggle("tooltipMove")
    shareBtn.classList.toggle("buttonActive")
    tooltip.classList.toggle("hidden");
    
})