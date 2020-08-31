const iframeContainer = document.querySelector(".container");
function widthAndHeightManager(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    iframeContainer.width = width + "px";
    iframeContainer.height = height - 28 + "px";
}
widthAndHeightManager();
window.addEventListener("resize",widthAndHeightManager);
