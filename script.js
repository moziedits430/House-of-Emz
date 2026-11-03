const mainPhoto = document.querySelector("#main-photo");
const thumbNails = document.querySelectorAll(".thumbnails img");

thumbNails.forEach(function (thumb){
    thumb.addEventListener("click", function (){
        mainPhoto.src = thumb.src;
        mainPhoto.alt = thumb.alt;
    });
});