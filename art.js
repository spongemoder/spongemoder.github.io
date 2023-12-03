document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery");
    const modal = document.querySelector(".modal");
    const imgViewContainer = modal.querySelector(".img");
    const modalName = modal.querySelector(".img-text h2");
    
    modal.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    let items = document.querySelectorAll("img");
    console.log(items);
    items.forEach(function(item) {
        item.addEventListener("click", () => {
            
            // find full version of icon image on click
            let url = new URL(item.src);
            let pathname = url.pathname;
            let dirs = pathname.split('/');
            let fullImgSrc = "./portfolio/full/" + dirs.slice(-2).join('/');
            let smallImgSrc = "./portfolio/full/small/" + dirs.slice(-2).join('/');
            
            let fullImg = imgViewContainer.querySelector("img");
            fullImg.src = fullImgSrc;

            modal.style.clipPath = "";
            console.log(modal.style)
        });
    });

    modal.addEventListener("click", (event) => {
        // Check if the clicked element is the modal itself, not its children
        if (event.target === modal) {
            modal.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        }
    });

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        });
    }

});
