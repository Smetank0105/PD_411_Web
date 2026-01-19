// JavaScript source code
function setImage() {
	let filename = document.getElementById("image-file");
	let reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById("photo").src = e.target.result;
	}
	reader.readAsDataURL(filename.files[0]);
}

function setBackground() {
	let color_tool = document.getElementById("choose-color");
	let color = color_tool.value;
	document.getElementById("color-sample").style.backgroundColor = color;
	document.getElementById("color-sample").style.width = "200px";
	document.getElementById("color-sample").style.height = "200px";
}

function switchBackground() {
	let delay = document.getElementById('delay').value;
	document.body.style.transition = `all ${delay}s ease`;
	document.getElementById('switch-background').style.transition = `all ${delay}s ease`;
	document.body.className = document.body.className === 'dark' ? 'white' : 'dark';
}