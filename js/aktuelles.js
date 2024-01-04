// Die neusten Inhalte oben in aktuelleInhalte.
var aktuelleInhalte = [
    // Hier mehr Slides hinzufügen
    {
      bild: 'bilder/Aktuelles/Gruppenbild.jpg',
      überschrift: 'Erneuerung der muc-labs Webseite',
      text: 'Das Physik P-Seminar vom Maria-Theresia Gymnasium hat die muc-labs Webseite inhaltlich sowie designtechnische auf den neusten Stand gebracht.', // Dieser String kann HTML-Code enthalten
      datum: '04.01.2024',
    },
    {
      bild: 'bilder/welpe1.jpg',
      überschrift: 'Brandneuer Inhalt!',
      text: 'Text 1', // Dieser String kann HTML-Code enthalten
      datum: '03.01.2024',
    },
    {
      bild: 'bilder/Aktuelles/taube.png',
      überschrift: 'Online-Unterricht für Kinder in der Ukraine durch LYZEUM 2',
      text: 'Unser Mitglied Lyzeum 2 engagiert sich mit online-Unterricht für Kinder in der Ukraine. Auch ein (Hilfs-)Angebot für Münchner Schulen ist entstanden.',
      datum: '02.01.2024',
    },
    {
      bild: 'bilder/Aktuelles/cdr23.jpg',
      überschrift: 'CDR Dialog 2023 - München, 10./11. Oktober 2023',
      text: '<h1>Bildungskonferenz zur Kohlenstoffdioxid-Entnahme</h1><br>Das BMBF-geförderte Projekt CDRterra veranstaltete am 10. und 11. Oktober im Deutschen Museum München eine zweitägige Konferenz. Am ersten Tag ging es um den Stand der Arbeiten zur Kohlenstoffdioxid-Entnahme aus der Atmosphäre (CDR). Am zweiten Tag wurde diskutiert, wie dieses wichtige Thema für die (schulische) Bildung aufbereitet werden kann.',
      datum: '10.11.2023',
    },
  ];
  
  var currentSlide = 0;
  
// Function to update the slide
function updateSlide(slideIndex) {
    var slide = aktuelleInhalte[slideIndex];
    document.getElementById('aktuelles-bild').src = slide.bild;
    document.getElementById('aktuelles-überschrift').innerText = slide.überschrift;
    document.getElementById('aktuelles-text').innerHTML = slide.text;
    document.querySelector('.carousel-control-prev').href = "#carouselExample" + ((slideIndex - 1 + aktuelleInhalte.length) % aktuelleInhalte.length);
    document.querySelector('.carousel-control-next').href = "#carouselExample" + ((slideIndex + 1) % aktuelleInhalte.length);
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
    // Get the hash value from the URL
    var hash = window.location.hash.substring(1);
    // Convert the hash value to an integer
    var slideIndex = parseInt(hash);
    // If the hash value is a number, use it as the current slide index
    if (!isNaN(slideIndex)) {
        currentSlide = slideIndex;
    }
    // Add event listeners and update the slide
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    updateSlide(currentSlide);
}

window.onload = aktuellesMain;
  
