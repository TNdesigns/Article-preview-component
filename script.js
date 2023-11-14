document.addEventListener("DOMContentLoaded", function() {
    const icons = document.getElementById("sm-bx");
    const btn2 = document.getElementById("img-bg");

    let isIconsVisible = false;

    btn2.addEventListener("click", function(){
        isIconsVisible = !isIconsVisible; // Toggle the visibility state
        if (isIconsVisible) {
            icons.style.opacity = "1";
        } else {
            icons.style.opacity = "0";
        }
    })
})

