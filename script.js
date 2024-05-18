let skins = {}

let form = document.querySelector('#upload');
let file = document.querySelector('#file');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
	event.preventDefault();

	if (!file.value.length) return;

	let reader = new FileReader();
	reader.onload = loadSkins;
	reader.readAsText(file.files[0]);

}

function download() {
	var a = window.document.createElement('a');
	a.href = window.URL.createObjectURL(new Blob([JSON.stringify(skins)], {type: 'text/json'}));
	a.download = 'launcher_custom_skins.json';
	
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function loadSkins (event) {
	let str = event.target.result;
	skins = JSON.parse(str);
	console.log(skins);
}

function testSorter(){
	for(var key in skins["customSkins"]){
		let date = new Date();
		skins["customSkins"][key]["created"] = date.toISOString();
	}
	console.log(skins);
}