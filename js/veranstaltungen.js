// Die neusten Inhalte oben in Inhalte.
var vorschauArtikelIndex = 0; // Index des Vorschau-Artikels
var veranstaltungenInhalte = [
    // Hier mehr Slides hinzufügen
    {
      bild: 'bilder/Aktuelles/cdr23.jpg',
      überschrift: 'CDR Dialog 2023 - München, 10./11. Oktober 2023',
      text: '<h5>Bildungskonferenz zur Kohlenstoffdioxid-Entnahme</h5><br>Das BMBF-geförderte Projekt CDRterra veranstaltete am 10. und 11. Oktober im Deutschen Museum München eine zweitägige Konferenz. Am ersten Tag ging es um den Stand der Arbeiten zur Kohlenstoffdioxid-Entnahme aus der Atmosphäre (CDR). Am zweiten Tag wurde diskutiert, wie dieses wichtige Thema für die (schulische) Bildung aufbereitet werden kann.<br> Mehr dazu  <a href="https://cdrterra.de/news/erste-bildungskonferenz-zur-co%e2%82%82-entnahme">hier</a> und <a href="bilder/Aktuelles/CDR_Dialog_2023-Bildungskonferenz.pdf">hier</a>',
      datum: '10.11.2023',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Day of Hope - München, 4. Mai 2023',
      text: 'Der 4. Mai 2023 war der Münchner <a href="https://dayofhope-muenchen.de/">"Day of Hope"</a>. Mit dabei war <em>Jane Goodall</em>, UN-Friedensbotschafterin, Biologin und aktive Naturschützerin. Auch einige MUC-Labs Labore sind im Werksviertel München (beim Ostbahnhof) dabei.',
      datum: '04.05.2023',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'FORSCHA 5. - 7. Mai 2023',
      text: '	<a href="https://forscha.de/fo">Forscha</a> und Münchner Wissenschaftstage fanden vom 5. - 7. Mai 2023 auf der Theresienhöhe/Alte Messe statt. Auch heuer waren einige Schülerlabore wieder dabei sein.',
      datum: '05.05.2023',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Münchner Hochschultage 29. März 2023',
      text: 'Die <a href="https://www.bene-muenchen.de/hochschultage-2023-2/">22. Münchner Hochschultage</a> fanden am 29. März 2023 von 14-18 Uhr im Pyramidensaal, Karlstraße 32 statt. Es wurden sogenannte Spiele präsentiert, die das sog. <em>systemische Denken</em> schulen. Dieses ist zum Bewältigen komplexer Probleme notwendig. Es geht also um <em>Bildung für nachhaltige Entwicklung (BNE).</em>',
      datum: '29.03.2023',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Challenge 125 - März 2023',
      text: 'Zum 125-jährigen Bestehen der Stadtwerke Dachau wurde in Kooperation mit dem <em>MINT Campus Dachau</em> eine Messkampagne für Umweltdaten ins Leben gerufen. Alle zwischen 12 und 20 Jahren konnten im Team eine Messtation in Dachau aufbauen. Infos und Anmeldung (bis 31.3.2023) beim <a href="https://www.mintcampus-dachau.de/aktuelles.php/challenge-125">MCD</a>.',
      datum:'01.03.2023',//Datum unklar
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Schülerkonferenz 2022',
      text: 'Am 2. Dezember 2022 fand die 2. MUC-Labs Schülerkonferenz statt. <a href="Skonf/Skonf_index.html">Mehr Informationen.</a>.',
      datum: '02.12.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'BENE München Forum 2022',
      text: 'Im Bildungsbereich ist BNE (Bildung für nachhaltige Entwicklung) ein zentrales Thema. Am <font color="red">Freitag, 25. November 2022, 18-21.30 Uhr</font> in der "Evangelischen Stadtakademie" war Gelegenheit tiefer in das Thema einzusteigen. <a href="https://www.bene-muenchen.de/bene-muenchen-forum-2022/">Mehr Informationen.</a>',
      datum: '25.11.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Schnuppertage im MINT Campus Dachau im April 2022',
      text: 'An mehreren Tagen im April hatte der MINT Campus Dachau zum Kennenlernen geöffnet. Das Angebot richtete sich speziell auch an ukrainische Kinder.<br><a href="https://www.mintcampus-dachau.de">Link zum MCD</a>.',
      datum: '01.04.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '1.-2. April 2022: 2. Tag der Münchner Schülerlabore',
      text: 'Leider konnten wir am Freitag nur eine online-Veranstaltung anbieten. <br> Es gab am Freitagvormittag eine Lehrerfortbildung zu ease-corona (Aufholen nach Corona) mit Vorstellung der verschiedenen Angebote.<br> Am Freitagnachmittag stellten sich die 22 Labore des Netzwerks kurz vor. Danach konnte man sich an Postern näher informieren und es wurden (ebenfalls online) Mitmach-Workshops angeboten. <br>Als Ergänzung öffneten am Samstag einige Schülerlabore ganz real ihre Türen.<br>Das Programm sah so aus: <a href="TdSchuelerlabore/muc-Tag_2022.html">Programm</a>',
      datum: '01.04.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '17.12.2021: Schülerkonferenz 2021',
      text: 'Nach dem Vorbild der Schülerkonferenz der TUM wurde die Schülerkonferenz MUC-Skonf erstmals von MUC-labs e.V. organisiert. Schüler präsentierten ihre Forschungsarbeiten (z.B. W-Seminar) als Vortrag oder Poster. Aufgrund der Corona-Einschränkungen war es leider eine online-Veranstaltung. Wir konnten dazu das Tagungsportal MeetAnyway verwenden. Dies ermöglichte uns das "Munich Center for Quantum Science and Technology" (MCQST). Dafür vielen Dank.<br>Alle Beiträge mit kurzen Zusammenfassungen (abstracts) finden Sie <a href="bilder/Aktuelles/211216_2_abstract_booklet.pdf">hier</a>.',
      datum: '17.12.2021',
    },
    {
      bild: 'bilder/Aktuelles/muc-labs am KiKS-Festival_1.jpg',
      überschrift: '8.-10. Oktober 2021: FORSCHA und Münchner Wissenschaftstage',
      text: 'Erstmals gemeinsam fanden FORSCHA und Münchner Wissenschaftstage im Verkehrszentrum des Deutschen Museums statt. <table style="font-family: arial, sans-serif; overflow: hidden;"> <tr> <th> <img src="bilder/Aktuelles/muc-labs am KiKS-Festival_1.jpg" alt="e-conversion" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"> </th> <th> <img src="bilder/Aktuelles/muc-labs am KiKS-Festival_2.jpg" alt="FabLab" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"> </th> <th> <img src="bilder/Aktuelles/muc-labs am KiKS-Festival_3.jpg" alt="Frühes Forschen" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"> </th> <th><img src="bilder/Aktuelles/muc-labs am KiKS-Festival_4.jpg" alt="Mineralogia" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"> </th> </tr> </table>',
      datum: '08.10.2021',
    },
    {
      bild: 'bilder/Aktuelles/muc-labs am KiKS-Festival_2.jpg',
      überschrift: '13. Juni 2021: muc-labs am KiKS-Festival',
      text: '	Am 13. Juni waren Münchner Schülerlabore auch am <a href="https://kiks-muenchen.de/programm/kiks-festival/">KiKS-Festival</a> zu finden. Stände mit Mitmach-Angeboten hatten: e-conversion, FabLab, Frühes Forschen und Mineralogia.<br><table style="font-family: arial, sans-serif; overflow: hidden;"><tr><th><img src="bilder/Aktuelles/muc-labs am KiKS-Festival_1.jpg" alt="e-conversion" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"></th><th><img src="bilder/Aktuelles/muc-labs am KiKS-Festival_2.jpg" alt="FabLab" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"></th><th><img src="bilder/Aktuelles/muc-labs am KiKS-Festival_3.jpg" alt="Frühes Forschen" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"></th><th><img src="bilder/Aktuelles/muc-labs am KiKS-Festival_4.jpg" alt="Mineralogia" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="200px"></th></tr></table>',
      datum: '13.06.2021',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '15. Mai 2021: Virtueller 18. Robotik-Wettbewerb an der Technischen Universität München',
      text: 'Nachdem der Robotics-Wettbewerb 2020 aufgrund der Corona-Pandemie abgesagt werden musste, fand er heuer virtuell statt. Das <a href="bilder/Aktuelles/18_Robotikwettbewerb_TUM2021_VIRTUELL.pdf">Einladungsschreiben</a> erklärt einige Details. Mehr auf der <a href="https://www.in.tum.de/fuer-studieninteressierte/fuer-schuelerinnen-und-schueler/robotik-wettbewerb/">Webseite des Wettbewerbs</a>.',
      datum: '15.05.2021',
    },
    {
      bild: 'bilder/Aktuelles/muclabtag_workshops_8.jpg',
      überschrift: '19./20. März 2021: Tag der Münchner Schülerlabore',
      text: 'Siebzehn SchülerLabore bzw. außerschulische Lernorte aus München und Umgebung stellten sich vor. Sie alle stehen für eigenständiges Forschen und Entwickeln in einer authentischen Umgebung. Am Tag der Schülerlabore konnten die Besucher das breite Spektrum an Fach-Themen, Forschungs-Themen und Projekten kennenlernen.<br>Der Freitag bot Informationen zu den Schülerlaboren und einen Workshop für Lehrkräfte zum Gedankenaustausch. Programm Freitag<br>Der Link führt zu think.ING, von wo sie den Schülerlaboratlas kostenlos beziehen können.<br>Am Samstag konnten die Teilnehmer Informationen zu den Laboren erhalten und vor allem an elf Online-Workshops teilnehmen, sowie zwei interessante Vorträge hören. Programm Samstag<br>Der Tag der Münchner Schülerlabore fand in einer meetanyway Umgebung statt: meetanyway. Die Poster sind noch einige Zeit verfügbar. Wir bedanken uns bei MCQST (Munich Center for Quantum Science and Technology) für die Unterstützung bei der Nutzung dieser Plattform.<br>Beim abschließenden Kahoot-Quiz gab es viele Preise zu gewinnen.<br><table style="font-family: arial, sans-serif; overflow: hidden;"><tr><th>Melanie Kaliwoda Meteorite</th><th><img src="bilder/Aktuelles/muclabtag_vortrag_1.png" alt="DNA-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_vortrag_2.jpg" alt="DNA-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"><th>Andreas Brachmann DNA Forensik</th></th><th><img src="bilder/Aktuelles/muclabtag_vortrag_3.png" alt="DNA-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_vortrag_4.jpg" alt="DNA-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th></tr><tr><th><img src="bilder/Aktuelles/muclabtag_workshops_1.jpg" alt="Bio-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_2.jpg" alt="Bio-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_3.jpg" alt="Bio-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_4.jpg" alt="Bio-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th></tr><tr><th><img src="bilder/Aktuelles/muclabtag_workshops_5.jpg" alt="ESO-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_6.jpg" alt="ESO-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_7.jpg" alt="ESO-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th></tr><tr><th><img src="bilder/Aktuelles/muclabtag_workshops_8.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_9.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_10.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_11.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_12.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_13.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_14.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th><th><img src="bilder/Aktuelles/muclabtag_workshops_15.jpg" alt="FabLab-Workshop" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"></th></tr></table>',
      datum: '19.03.2021',
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
    currentSlide -= 1;
    if (currentSlide < 0) {
      currentSlide = veranstaltungenInhalte.length - 1;
    }
    updateSlide(currentSlide);
}

var currentSlide = 0;
function veranstaltungenMain() {
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
