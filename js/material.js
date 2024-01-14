var partner = {
	"Organisationen": {
		"lernortlabor": {
			"name": "LernortLabor e.V.",
			"text": "Der Bundesverband der Schülerlabore ist die Vertretung aller Schülerlabore im deutschsprachigen Raum. Er veranstaltet unter anderem jährliche Tagungen zum Erfahrungsaustausch.",
			"images": ["/bilder/partner/lela_logo.png"],
			"website": "https://www.lernort-labor.de/"
		},

		"mint-region": {
			"name": "MINT-Region Münchner Umland",
			"text": "Die MINT-Region ist eine Initiative der Landkreise Dachau und München. Auf der Website finden sie eine große Übersicht über MINT-Angebote der Region.",
			"images": ["/bilder/partner/mint-region.png"],
			"website": "https://www.mintregion.de/"
		},

		"bene": {
			"name": "BENE e.V.",
			"text": "BENE e.V. fungiert als Plattform für BNE (Bildung für nachhaltige Entwicklung) im Raum München. Hier finden Sie auch eine Aufstellung von Angeboten zur BNE.",
			"images": ["/bilder/partner/bene_logo.png"],
			"website": "https://www.bene-muenchen.de/"
		},

		"mcqst": {
			"name": "MCQST",
			"text": "Das \"Munich Center for Quantum Science and Technology\" ist ein Exzellenzcluster an dem sieben Forschungsinstitute beteiligt sind. Auf der Website finden Sie auch interessante \"Quanten-Veranstaltungen\".",
			"images": ["/bilder/partner/MCQST.png"],
			"website": "https://www.mcqst.de/"
		},

		"gypt": {
			"name": "GYPT",
			"text": "Die Deutsche Physikmeisterschaft GYPT ist eine Initiative der Deutschen Physikalischen Gesellschaft (DPG) zusammen mit der Uni Ulm und der Wilhelm und Else Heraeus Stiftung.",
			"images": ["/bilder/partner/gypt_logo.png"],
			"website": "https://www.gypt.org/"
		},
	},

	"Astronomie": {
		"hands-on-universe": {
			"name": "Hands-on Universe",
			"text": "Hands-on Universe entstand als \"public outreach\"-Programm der Supernova-Cosmology (Nobelpreis 2011) in Berkeley, USA. Das Ziel ist, Schülern die Bearbeitung realer (und neuer) Daten zu ermöglichen. Eine entsprechende Software wurde entwickelt (heute SalsaJ) und es gibt Lehreinheiten zur Einführung in die Astrophysik-Forschung.",
			"images": ["/bilder/partner/GHOU.jpg"],
			"website": "https://handsonuniverse.org/"
		},

		"salsaj": {
			"name": "Hands-on Universe - SalsaJ",
			"text": "Software zum Bearbeiten und Auswerten von Astronomie-Daten. Die Grundlage ist das bekannte Programm ImageJ. Es können Bilder (FITS-Dateien) professioneller Teleskope ausgewertet werden. Diese finden Sie in verschiedenen Archiven.",
			"images": ["/bilder/partner/salsaj.jpg"],
			"website": "http://www.euhou.net/index.php/salsaj-software-mainmenu-9"
		},

		"noirlab": {
			"name": "NSF's NOIRLab - FITS Liberator",
			"text": "Professionelle Teleskope machen Aufnahmen in bestimmten Wellenlängenbereichen. Die schönen Farbfotos entstehen durch Kombination (und Einfärben) mehrerer Aufnahmen. Mit dem FITS-Liberator können das auch Schülerinnen und Schüler.",
			"images": ["/bilder/partner/noirlab.jpg"],
			"website": "https://noirlab.edu/public/products/fitsliberator/"
		},
	},

	"Biologie": {
		"embl": {
			"name": "EMBL - European Learning Laboratory for the Life Sciences",
			"text": "EMBL, das Europäische Laboratorium für Molekularbiologie, ist eines der bekanntesten life science Forschungsinstitute der Welt. Der Standort in Deutschland ist Heidelberg. Es werden verschiedene Materialien für 10 bis 19-Jährige angeboten. Zu bestimmten Terminen finden auch virtuelle LearningLABs für Lehrer statt.",
			"images": ["/bilder/partner/embl.jpg"],
			"website": "https://www.embl.org/ells/"
		},

		"geomar": {
			"name": "Geomar - Materialien für Schulen",
			"text": "GEOMAR ist das Helmholtz-Zentrum für Ozeanforschung in Kiel. Eines der Forschungsthemen ist die Rolle der Ozeane beim globalen Klimawandel. Versuchsanleitung, Arbeitsbögen und sogar Bilderbücher zum Thema Meeresforschung sind auf dieser Webseite zu finden. ",
			"images": ["/bilder/partner/geomar.jpg"],
			"website": "https://www.geomar.de/entdecken/schule/materialien-fuer-schulen"
		},
	},

	"Weitere": {
		"dlr_next": {
			"name": "DLR_next - Das Jugendportal",
			"text": "Viele Materialien aus verschiedenen Bereichen wie Raumfahrt, Energie oder Digitalisierung. ",
			"images": ["/bilder/partner/dlrnext.jpg"],
			"website": "https://www.dlr.de/next/"
		},
	},
}
	
function renderCard(name, lab) {
	var [main, side] = renderTags(lab);

	// Individuelle Quellenangabe vorhanden
	var img_src = lab.images[0];
	var quellenangabe;
	if (img_src.includes(";")) {
		var bildquelle;
		[img_src, bildquelle] = img_src.split(";");
		quellenangabe = `title="Bildquelle: ${bildquelle}"`;
	} else {
		quellenangabe = "";
	}

	var parts = img_src.split("/");
	var n     = parts.length;
	img_src   = (parts.slice(0, n-1).concat(["preview_" + parts[n-1]])).join("/");
	
	var card = `
		<div class="card lab-card shadow" style="width: 18rem; position:relative;" lab="${name}">
			<a href="/lab.html?lab=${name}" style="text-decoration:none; color:black;">
				<img class="card-img-top" src="${img_src}" alt="1. Bild von ${lab.name}" width=285 height=190>
			</a>
			<div class="card-body">
				<h5 class="card-title lab-card-title">
					<a class="subtle-link" href="/lab.html?lab=${name}">
						${lab.name}
					</a>
				</h5>
				<div class="horiz-flex-container">${main}</div>
				<details>
						<summary>Weitere Tags</summary>
						<div class="horiz-flex-container">${side}</div>
				</details>
				<!-- <a style="position:absolute;bottom:15px;left:15px;" href="/lab.html?lab=${name}" class="btn btn-secondary">Aufrufen</a> -->
			</div>
		</div>
	`;
	return card
}

function renderNavbarAndFooter() {

	var options = {
		logo: "/bilder/logo.png",
		landing: "/index.html",
	};

	var navbar = `
	<nav class="navbar bg-body-tertiary fixed-top justify-content-between">
		<div class="container-fluid">
			<a class="navbar-brand" href="${options.landing}">
				<div class="image-container-dont-resize-navbar">
					<img src="${options.logo}" alt="Muclabs Logo" class="image-centered-vertically" width=240 height=52>
				</div>
			</a>

			<ul class="quick-nav-links">
				<li><a class="nav-link" href="/labs.html">Labore</a></li>
				<li><a class="nav-link" href="/veranstaltungen.html">Veranstaltungen</a></li>
				<li><a class="nav-link" href="/aktuelles.html">Aktuelles</a></li>
			</ul>

			<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
						<!-- Platzhaltertext -->
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">					
						<form id="navbar-search-form">
							<div class="form-input-container">
								<input class="form-control" type="search" placeholder="Mit Google suchen">
								<input class="btn btn-outline-primary" type="submit" value="Suchen">
							</div>
						</form>

						<hr>

						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="${options.landing}">Start</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/aktuelles.html">Aktuelles</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/veranstaltungen.html">Veranstaltungen</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/labs.html">Labore</a>
						</li>

						<hr>

						<li class="nav-item">
							<a class="nav-link" href="/karte.html">Karte</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/archiv.html">Archiv</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/partner.html">Partner</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/materialien.html">Materialien</a>
						</li>

						<hr>

						<li class="nav-item">
							<a class="nav-link" href="/ueber-uns.html">Über uns</a>
						</li>
						
						<li class="nav-item">
							<a class="nav-link" href="/kontakt.html">Kontakt</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="/impressum.html">Impressum</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="/zzz_anmeld_intern.php">Mitgliederbereich</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	`;

	var footer = `<footer>
		<center><hr style="width: 90%"></center>
		<div class="horiz-flex-container" style="justify-content: space-evenly;">
			<a href="/ueber-uns.html">Über uns</a>
			<a href="/kontakt.html">Kontakt</a>
			<a href="/impressum.html">Impressum</a>
			<a href="/zzz_anmeld_intern.php">Mitgliederbereich</a>
		</div>
	</footer>`;

	$(navbar).insertBefore("html body main");
	$(footer).insertAfter("html body main");

	implementSearchFunction();

	// Quicknav highlighting on current site
	for (var a of document.querySelectorAll("ul.quick-nav-links > li > a.nav-link")) {
		var href = a.getAttribute("href")
		if (href == window.location.pathname) {
			a.style.textDecoration = "underline";
		}
	}
}