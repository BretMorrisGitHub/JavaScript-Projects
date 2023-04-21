let slideIndex = 1;//this sets a one time variable 'slideIndex'

function plusSlides(n){
    showSlides(slideIndex += n);
}//this function calls the 'showSlides' function, with 'slideIndex += n' as its
//parameters

function currentSlide(n){
    showSlides(slideIndex = n);
}//this function calls the 'showSlides' function, with 'slideIndex = n' as its
//parameters

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}//this function declares a variable 'i', and a variable 'slides', and has two
//if statements to find the state of the slideshow. 