
var carouselData = [
  {
      bild: 'bilder/welpe1.jpg',
      überschrift: 'Überschrift 1',
      text: 'Text 1'
  },
  {
      bild: 'bilder/welpe1.jpg',
      überschrift: 'Überschrift 2',
      text: 'Text 2'
  },
  // Mehr Slides hinzufügen
];


var currentSlide = 0;

// Function to update the slide
function updateSlide() {
    var slide = carouselData[currentSlide];
    document.getElementById('bild').src = slide.bild;
    document.getElementById('überschrift').innerText = slide.überschrift;
    document.getElementById('text').innerText = slide.text;
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselData.length; // Wrap around to the first slide
    updateSlide();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length; // Wrap around to the last slide
    updateSlide();
}

// Update the slide when the page loads
window.onload = function() {
    updateSlide();
    // Add event listeners to the arrow buttons
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
};
