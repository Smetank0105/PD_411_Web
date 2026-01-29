// JavaScript source code
var id = null;
function Move() {
	const elem = document.getElementById('animation');
	let x_pos = elem.offsetLeft;
	let y_pos = elem.offsetTop;
	let x_shift = 1;
	let y_shift = 1;
	let interval = document.getElementById('interval').value;
	clearInterval(id);
	id = setInterval(frame, interval);
	function frame() {
		x_pos += x_shift;
		y_pos += y_shift;
		elem.style.top = y_pos + 'px';
		elem.style.left = x_pos + 'px';
		if (x_pos <= 0) x_shift = 1;
		if (x_pos >= document.documentElement.clientWidth - elem.offsetWidth) x_shift = -1;
		if (y_pos <= 0) y_shift = 1;
		if (y_pos >= document.documentElement.clientHeight - elem.offsetHeight) y_shift = -1;
	}
}

function setFontSize() {
	let elem = document.getElementById('animation');
	let size = document.getElementById('font-size').value;
	elem.style.fontSize = `${size}px`;
}

document.body.onload = function tick_timer() {
	let time = new Date();
	document.getElementById('hours').innerHTML = addLeadingZero(time.getHours());
	document.getElementById('minutes').innerHTML = addLeadingZero(time.getMinutes());
	document.getElementById('seconds').innerHTML = addLeadingZero(time.getSeconds());
	setTimeout(tick_timer, 100);
}

function addLeadingZero(number) {
	return number < 10 ? '0' + number : number;
}