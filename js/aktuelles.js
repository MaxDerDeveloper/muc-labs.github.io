// Die neusten Inhalte oben in Inhalte.
var aktuelleInhalte = [
  {
      bild: 'bilder/welpe1.jpg',
      überschrift: 'Brandneuer Inhalt!',
      text: 'Text 1' // Dieser String kann HTML-Code enthalten
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
function updateSlide(slideIndex) {
    var slide = aktuelleInhalte[slideIndex];
    document.getElementById('aktuelles-bild').src = slide.bild;
    document.getElementById('aktuelles-überschrift').innerText = slide.überschrift;
    document.getElementById('aktuelles-text').innerText = slide.text;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % aktuelleInhalte.length;
    updateSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + aktuelleInhalte.length) % aktuelleInhalte.length;
    updateSlide(currentSlide);
}

function aktuellesMain() {
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
}