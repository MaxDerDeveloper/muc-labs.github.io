// Die neusten Inhalte oben in aktuelleInhalte.

var vorschauArtikelIndex = 0; // Index des Vorschau-Artikels
var aktuelleInhalte = [
    // Hier mehr Slides hinzufügen
    {
      bild: 'bilder/Aktuelles/Gruppenbild.jpg',
      überschrift: 'Erneuerung der muc-labs Webseite',
      text: 'Das Physik P-Seminar vom Maria-Theresia Gymnasium hat die muc-labs Webseite inhaltlich sowie designtechnisch auf den neusten Stand gebracht.', // Dieser String kann HTML-Code enthalten
      datum: '04.01.2024',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Deutsche Physikmeisterschaft GYPT 2023 - Vorbereitungstreffen',
      text: 'Die deutsche Physik-Meisterschaft (<a href="https://www.gypt.org">GYPT</a>) ist jetzt auch in die "Qualitätskriterien für Schülerwettbewerbe" der Kultusministerkonferenz (KMK) aufgenommen. Sie finden sie <a href="https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/2009/2009_09_17-Schuelerwettbewerbe.pdf">hier</a>. Bei der Präsenzmeisterschaft 2020 entstand ein <a href="https://www.youtube.com/watch?v=zdjoeK3sNnw">youtube-Video</a> über den Wettbewerb. Ein sehenswertes <a href="https://www.youtube.com/watch?v=38YRTvaDL-w">Video</a> gibt es auch über die "oberbayerische Meisterschaft" in Garching.<br>Am <font color="red">16. November 2022 (Buß- und Bettag)</font> veranstaltete der GYPT Standort Dachau zusammen mit MUC-Labs (speziell PhotonLab) ein GYPT-Vorbereitungstreffen in Garching (MPQ). <font color="red">Die oberbayerische Meisterschaft fand Ende Januar 2023 statt. Zwei Teams konnten sich für die Deutsche Meisterschaft in Bad Honnef qualifizieren.</font><br> Unser Flyer <a href="bilder/Aktuelles/GYPT_Flyer_MUC_1.pdf">Seite 1</a>/<a href="bilder/Aktuelles/GYPT_Flyer_MUC_2.pdf">Seite 2</a>.',
      datum: '16.11.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'Formel 1 in der Schule 2022/2023',
      text: 'Bis zum 30. November 2022 konnte man sich zu den Meisterschaften der 17. Saison von Formel 1 in der Schule anmelden.<br><a href="https://www.f1inschools.de">Weitere Informationen.</a>.',
      datum: '30.11.2022',
    },
    {
      bild: 'bilder/Aktuelles/taube.png',
      überschrift: 'Online-Unterricht für Kinder in der Ukraine durch LYZEUM 2',
      text: 'Unser Mitglied Lyzeum 2 engagiert sich mit online-Unterricht für Kinder in der Ukraine. Auch ein (Hilfs-)Angebot für Münchner Schulen ist entstanden.',
      datum: '01.06.2022',//Datum unklar
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: 'März 2022: Ausschreibung für Schulen der Deutschen Stiftung Denkmalschutz',
      text: 'Im März 2022 gab es im Rahmen des Schulprogramms <i>denkmal aktiv - Kulturerbe macht Schule</i> der Deutschen Stiftung Denkmalschutz eine neue Ausschreibung <u>für Schulen</u>. Es konnte eine finanzielle Unterstützung beantragt werden, um im Verlauf eines Schuljahres Umwelteinflüsse auf Denkmäler in der Umgebung zu untersuchen. An Gymnasien könnte das z.B. innerhalb eines P- oder W-Seminars geschehen. Unterstützung werden dabei Schülerlabore anbieten. Auch das MUC-Labs Netzwerk wird sich mit einigen Laboren beteiligen.<br>Die Projekte sollen im Schuljahr 2022/2023 stattfinden.<br>Informationen und Beispiele gibt es bei <a href="https://denkmal-aktiv.de">denkmal-aktiv</a>.',
      datum: '01.03.2022',//Datum unklar
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '14. März 2022: LeLa-Preis geht ans PhotonLab',
      text: 'Auf der online-Jahrestagung von LernortLabor - dem Bundesverband der Schülerlabore e.V. fand am 14. März die diesjährige Verleihung des LeLa-Preises statt. In der Rubrik "Experiment des Jahres" war das PhotonLab erfolgreich mit dem Projekt: Quanten-Zufallsgenerator. Dieser Kurs wurde von Linda Qerimi entwickelt.<br>Mehr zum LeLa-Preis: <a href="https://www.lernortlabor.de/LernortLabor/LeLa-Preis">hier</a><br><iframe width="560" height="315" src="https://www.youtube.com/embed/NnR82jL3XBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
      datum: '14.03.2022',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '16. Juli 2021: 10 Jahre PhotonLab',
      text: 'Das PhotonLab in Garching wurde 10! Am 16. Juli 2021 fand eine Lehrerfortbildung statt und am 23. Juli 2021 waren alle Interessierten eingeladen.<br>Mehr dazu auf den <a href="https://www.mpq.mpg.de/6539952/10-jahre-photonlab?c=2337">Webseiten des MPQ</a>.',
      datum: '16.07.2021',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '12. Mai 2021: „gemeinsam.Brücken.bauen." - Aufholen nach Corona in Bayern',
      text: 'Durch zusätzliche Maßnahmen sollen Schülerinnen und Schüler, bei denen Defizite aufgrund der Pandemie entstanden sind, unterstützt werden. Dabei geht es nicht nur um Lernförderung, sondern auch um die Förderung sozialer Kompetenz. Das Kultusministerium hat dazu ein <a href="https://www.km.bayern.de/allgemein/meldung/7293/foerderprogramm-bietet-vielfaeltige-moeglichkeiten-zur-unterstuetzung.html">Konzept</a> bekannt gegeben.<br>Die finanzielle Grundlage bilden 20 Mio. Euro an Landesmitteln und die angekündigten Bundesmittel aus dem "Aktionsprogramm Aufholen nach Corona" (für Bayern voraussichtlich gut 150 Mio. Euro).',
      datum: '12.05.2021',
    },
    {
      bild: 'bilder/Aktuelles/Musterbild.png',
      überschrift: '5. Mai 2021: Aktionsprogramm Aufholen nach Corona',
      text: 'In der Beschreibung der Säule 3 des Aktionsprogramms werden explizit Schülerlabore und der Bundesverband LernortLabor genannt. Auch die MUC-Labs werden ein Programm entwickeln und sich um Mittel bewerben. <a href="https://www.bmbf.de/de/kinder-und-jugendliche-nach-der-corona-pandemie-staerken-14371.html">(Pressemitteilung des BMBF)</a>',
      datum: '05.05.2021',
    },
    {
      bild: 'bilder/Aktuelles/lela_logo.png',
      überschrift: '8. März 2021 LeLa-Preis fürs PhotonLab',
      text: '<summary style="background-color:NavajoWhite; color: green; font: bold 18px Arial, sans-serif;">8. März 2021 LeLa-Preis fürs PhotonLab</summary><p><img src="bilder/Aktuelles/lela_logo.png" alt="lela" style="float:left; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="120px"> Der LeLa-Preis, der seit 2020 vergeben wird, stellt eine besondere Anerkennung innovativer Entwicklungen der Schülerlabore dar. Er wird in vier Rubriken vergeben.</p><p>Die Preise in den Rubriken <i>Experiment des Jahres</i> und <i>MINT-Bildung von Lehrkräften</i> werden vom <b>Bundesministerium für Bildung und Forschung (BMBF)</b> gestiftet. Der <b>Arbeitgeberverband GESAMTMETALL</b> stiftet den Preis in der Rubrik <i>Schülerlabor digital</i> im Rahmen der Initiative <b>think ING</b>. Den Preis für ein besonders gelungenes <i>Schülerprojekt</i>, das mit Unterstützung eines Schülerlabors entstanden ist, stiftet <b>LernortLabor</b>.</p><p><img src="bilder/Aktuelles/pokal.png" alt="pokal" style="text-align:center; margin-right:4px; margin-bottom:4px; vertical-align:middle" height="50px"></p><p>Das PhotonLab am Max-Planck-Institut für Quantenoptik in Garching erhielt den 3. Preis in der Rubrik <i>Schülerlabor digital</i> für die Verbindung des Flipped-Classroom-Konzeptes mit dem Angebot eines Schülerlabors. Im Video stellen sie das Projekt vor.</p><p style="text-align:center"><iframe width="560" height="315" src="https://www.youtube.com/embed/jWIltBj29Zg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
      datum: '08.03.2021',
    },

  ];

// Function to update the slide
function updateSlide(slideIndex) {
  var slide = aktuelleInhalte[slideIndex];
  $('#aktuelles-bild').attr("src", slide.bild);
  $('#aktuelles-überschrift').html(slide.überschrift);
  $('#aktuelles-text').html(slide.text);
  $('.carousel-control-prev').attr("href", "#"+slideIndex);
  $('.carousel-control-next').attr("href", "#"+slideIndex);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % aktuelleInhalte.length;
    updateSlide(currentSlide);
}

function prevSlide() {
    currentSlide -= 1;
    if (currentSlide < 0) {
      currentSlide = aktuelleInhalte.length - 1;
    }
    updateSlide(currentSlide);
}

var currentSlide = 0;
function aktuellesMain() {
    var hash = window.location.hash.substring(1);
    var slideIndex = parseInt(hash);

    if (!isNaN(slideIndex)) {
        currentSlide = slideIndex;
    }
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    updateSlide(currentSlide);
}