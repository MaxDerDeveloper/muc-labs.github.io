function parseUrlQueryString() {
	// Reference: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?retiredLocale=de
	const query = new URLSearchParams(window.location.search);

	var dictionary = {};
	for (const [key, value] of query.entries()) {
		dictionary[key] = value;
	}
	return dictionary;
}

function renderTags(lab) {
	var main_tags = ""
	for (var üt of lab.überthema) {
		var bg_color   = tags_to_background_mapping[üt] || "rgb(13,110,253)";
		var fg_color   = tags_to_foreground_mapping[üt] || "white";
		var text_style = 'style="color: '+fg_color+'";';
		var style      = 'style="background-color:'+bg_color+';"';

		main_tags += `
		<a class="no-link" href="/filter.html?tag=${üt}">
			<span class="lab-tag badge rounded-pill" ${style}>
				<span ${text_style}>
					${üt}
				</span>
			</span>
		</a>`;
	}
	var side_tags = "";
	for (var ut of lab.unterthema) {
		side_tags += `
		<a class="no-link" href="/filter.html?tag=${ut}">
			<span class="lab-tag badge rounded-pill text-bg-info">
				${ut}
			</span>
		</a>`;
	}
	return [main_tags, side_tags];
}

function renderCard(name, lab) {
	var [main, side] = renderTags(lab);
	var card = `
		<div class="card lab-card shadow" style="width: 18rem; position:relative;">
			<a href="/lab.html?lab=${name}" style="text-decoration:none; color:black;">
				<img class="card-img-top" src="${lab.images[0]}" alt="1. Bild von ${lab.name}" width=285 height=190>
			</a>
			<div class="card-body">
				<h5 class="card-title lab-card-title">${lab.name}</h5>
				<div class="horiz-flex-container">${main}</div>
				<details style="margin-bottom: 42.5px">
						<summary>Mehr</summary>
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
	<nav class="navbar bg-body-tertiary fixed-top">
		<div class="container-fluid">
			<a class="navbar-brand" href="${options.landing}">
				<div class="image-container-dont-resize-navbar">
					<img src="${options.logo}" alt="Muclabs Logo" class="image-centered-vertically" width=240 height=52>
				</div>
			</a>
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
						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="${options.landing}">Start</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/aktuelles.html">Aktuelles</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/labs.html">Labore</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/karte.html">Karte</a>
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

						<!-- <li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li> -->
					</ul>
					<!-- <form class="d-flex mt-3" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form> -->
				</div>
			</div>
		</div>
	</nav>
	`;

	var footer = `<footer>
		<center><hr style="width: 90%"></center>
		<div class="horiz-flex-container" style="justify-content: space-evenly;">
			<a href="/kontakt.html">Kontakt</a>
			<a href="/impressum.html">Impressum</a>
			<a href="/zzz_anmeld_intern.php">Mitgliederbereich</a>
		</div>
	</footer>`;

	$(navbar).insertBefore("html body main");
	$(footer).insertAfter("html body main");
}



function prependToTitle(string) {
	document.title = string + " | " + document.title;
}

function initializeCarousel() {
	$('a#next-btn').click((e) => { $('.carousel').carousel("next"); });
	$('a#prev-btn').click((e) => { $('.carousel').carousel("prev"); });
}

function getLab(query) {
	if ("lab" in query) {
		const labname = query["lab"];
		if (labname in context) {
			return context[labname];
		} else {
			alert("Das Lab '" + labname + "' existiert nicht in der Datenbank. Haben Sie sich vertippt?");
			window.location.replace("/labs.html");
		}
	} else {
		alert("Es wurde kein Lab in der Url angegeben, bitte hängen Sie ein '?lab=NameDesLabs' an die URL an.");
		window.location.replace("/labs.html");
	}
}