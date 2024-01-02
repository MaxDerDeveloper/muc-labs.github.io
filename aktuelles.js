
var carouselData = [
  {
      bild: 'bilder/welpe1.jpg',
      überschrift: 'Überschrift 1',
      text: 'Text 1'
  },
  {
      bild: 'bilder/Aktuelles/taube.png',
      überschrift: 'Online-Unterricht für Kinder in der Ukraine durch LYZEUM 2',
      text: 'Unser Mitglied Lyzeum 2 engagiert sich mit online-Unterricht für Kinder in der Ukraine. Auch ein (Hilfs-)Angebot für Münchner Schulen ist entstanden.'
  },
  {
      bild: 'bilder/Aktuelles/cdr23.jpg',
      überschrift: 'CDR Dialog 2023 - München, 10./11. Oktober 2023',
      text: '<h1>Bildungskonferenz zur Kohlenstoffdioxid-Entnahme</h1><br>Das BMBF-geförderte Projekt CDRterra veranstaltete am 10. und 11. Oktober im Deutschen Museum München eine zweitägige Konferenz. Am ersten Tag ging es um den Stand der Arbeiten zur Kohlenstoffdioxid-Entnahme aus der Atmosphäre (CDR). Am zweiten Tag wurde diskutiert, wie dieses wichtige Thema für die (schulische) Bildung aufbereitet werden kann.'
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
