let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Reset and update slide index
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }

    // Reset dot indicators
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Change slide every 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 3000); 
}
