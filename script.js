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
	createSkinTimes();
	var a = window.document.createElement('a');
	a.href = window.URL.createObjectURL(new Blob([JSON.stringify(skins, null, "\t")], {type: 'text/json'}));
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

function createSkinTimes(){
	let i = 0;
	for(var key in skins["customSkins"]){
		let date = new Date();
		date.setSeconds(date.getSeconds(), i);
		skins["customSkins"][key]["created"] = date.toISOString();
		i++;
	}
	console.log(skins);
}

function randomOrder(){
	skins["customSkins"] = Object.fromEntries(Object.entries(skins["customSkins"]).sort((a,b) => Math.sign(Math.round(Math.random()))-0.5));
}