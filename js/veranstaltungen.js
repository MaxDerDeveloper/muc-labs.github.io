// Die neusten Inhalte oben in Inhalte.
var veranstaltungenInhalte = [
    // Hier mehr Slides hinzufügen
    {
      bild: 'bilder/Aktuelles/Ersatzbild.jpg',
      überschrift: 'FORSCHA 5. - 7. Mai 2023',
      text: '<a href="https://forscha.de/fo">Forscha</a> und Münchner Wissenschaftstage fanden vom 5. - 7. Mai 2023 auf der Theresienhöhe/Alte Messe statt. Auch heuer waren einige Schülerlabore wieder dabei sein.',
      datum: '05.05.2023',
    },
    {
      bild: 'bilder/Veranstaltungen/Gruppenbild.jpg',
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
      bild: 'bilder/Veranstaltungen/taube.png',
      überschrift: 'Online-Unterricht für Kinder in der Ukraine durch LYZEUM 2',
      text: 'Unser Mitglied Lyzeum 2 engagiert sich mit online-Unterricht für Kinder in der Ukraine. Auch ein (Hilfs-)Angebot für Münchner Schulen ist entstanden.',
      datum: '02.01.2024',
    },
    {
      bild: 'bilder/Veranstaltungen/cdr23.jpg',
      überschrift: 'CDR Dialog 2023 - München, 10./11. Oktober 2023',
      text: '<h1>Bildungskonferenz zur Kohlenstoffdioxid-Entnahme</h1><br>Das BMBF-geförderte Projekt CDRterra veranstaltete am 10. und 11. Oktober im Deutschen Museum München eine zweitägige Konferenz. Am ersten Tag ging es um den Stand der Arbeiten zur Kohlenstoffdioxid-Entnahme aus der Atmosphäre (CDR). Am zweiten Tag wurde diskutiert, wie dieses wichtige Thema für die (schulische) Bildung aufbereitet werden kann.',
      datum: '10.11.2023',
    },
  ];
  
// Function to update the slide
function updateSlide(slideIndex) {
  var slide = veranstaltungenInhalte[slideIndex];
  $('#veranstaltungen-bild').attr("src", slide.bild);
  $('#veranstaltungen-überschrift').html(slide.überschrift);
  $('#veranstaltungen-text').html(slide.text);
  $('.carousel-control-prev').attr("href", "#"+slideIndex);
  $('.carousel-control-next').attr("href", "#"+slideIndex);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % veranstaltungenInhalte.length;
    updateSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + veranstaltungenInhalte.length) % veranstaltungenInhalte.length;
    updateSlide(currentSlide);
}

function veranstaltungenMain() {
    var hash = window.location.hash.substring(1);
    var slideIndex = parseInt(hash);
    
    if (!isNaN(slideIndex)) {
        currentSlide = slideIndex;
    }
    // Add event listeners and update the slide
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    updateSlide(currentSlide);
}

var currentSlide = 0;
function aktuellesMain() {
    var hash = window.location.hash.substring(1);
    var slideIndex = parseInt(hash);

    if (!isNaN(slideIndex)) {
        currentSlide = slideIndex;
    }
    updateSlide(currentSlide);
}

window.onload = veranstaltungenMain;
  
