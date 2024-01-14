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
