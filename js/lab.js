function recursiveLookup(obj, param) {
	var keys = param.split(".");
	var result = obj

	for (var key of keys) {
		result = result[key];
	}

	return result
}

function renderTemplateInto(div, template, data) {
	var matches = [...template.matchAll(/\{\s*[a-zA-Z0-9_\-.äöü]+\s*\}/g, )];
	
	var tmp = 0;
	var result = "";
	for (var match of matches) {
		var start = match.index
		var stop  = start + match['0'].length
		var name  = template.slice(start+1, stop-1);

		result += template.slice(tmp, start);
		result += recursiveLookup(data, name);
		tmp = stop;
	}
	result += template.slice(tmp, template.length);
	div.innerHTML += result;	
}

function prependToTitle(string) {
	document.title = string + " | " + document.title;
}

function checkDataValidity(lab) {
	const muster_context = context["Muster"];

	for (const [key, value] of Object.keys(muster_context)) {
		if (!(key in lab)) {
			console.log("Dem Lab '"+lab.name+"' fehlt der Wert '"+key+"' aus dem Muster.")
			return false;
		}
	}
	return true
}

function parseUrlQueryString() {
	// Reference: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams?retiredLocale=de
	const query = new URLSearchParams(window.location.search);

	var dictionary = {};
	for (const [key, value] of query.entries()) {
		dictionary[key] = value;
	}
	return dictionary;
}

async function main() {
	// Load via the internet.
	// var template = await fetch("/template.html").then( (r)=> {return r.text()} );
	// var context  = await fetch("/context.json") .then( (r)=> {return r.json()} );

	// Hard coded.
	const query = parseUrlQueryString();


	if (!("lab" in query)) {
		alert("Kein lab wurde angegben, kehren Sie bitte zur Startseite zurück");
		window.location.replace("/index.html");
	}
	const lab_name = query["lab"];


	const lab_context = context[lab_name];
	if (!(lab_name in context)) {
		alert("Dieses Lab wurde nicht in der Datenbank gefunden. Haben Sie es richtig geschrieben?");
		window.location.href = "/labs.html";
		console.log(1)
	}

	const status = checkDataValidity(lab_context);
	const parent = document.getElementById("lab-container");

	prependToTitle(lab_context['name']);

	renderTemplateInto(
		parent,	
		template,
		lab_context
	);
};

window.onload = main;