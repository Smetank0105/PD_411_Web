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

document.addEventListener
(
	"mousemove",
	function (event) {
		let x = event.clientX;
		let y = event.clientY;
		document.getElementById('mouse').innerHTML = `X = ${x}, Y = ${y}`;
	}
);

function addLeadingZero(number) {
	return number < 10 ? '0' + number : number;
}
document.body.onload = function tick_timer()
{
	let time = new Date();
	document.getElementById('full-time').innerHTML = time;
	document.getElementById('hours').innerHTML = addLeadingZero(time.getHours());
	document.getElementById('minutes').innerHTML = addLeadingZero(time.getMinutes());
	document.getElementById('seconds').innerHTML = addLeadingZero(time.getSeconds());

	document.getElementById('years').innerHTML = addLeadingZero(time.getFullYear());
	document.getElementById('months').innerHTML = addLeadingZero(time.getMonth() + 1);
	document.getElementById('days').innerHTML = addLeadingZero(time.getDate());

	document.getElementById('day-of-week').innerHTML = time.toLocaleDateString('ru', { weekday: "long" });

	document.getElementById('current-date').style.visibility = document.getElementById('show-date').checked ? 'visible' : 'hidden';
	document.getElementById('day-of-week').style.visibility = document.getElementById('show-weekday').checked ? 'visible' : 'hidden';

	setTimeout(tick_timer, 100);
}

document.getElementById('btn-start').onclick = function startCountdownTimer() {
	let targetDate = document.getElementById('target-date');
	let targetTime = document.getElementById('target-time');
	let btnStart = document.getElementById('btn-start');

	if (btnStart.value === "Start") {
		btnStart.value = 'Stop';
		targetDate.disabled = targetTime.disabled = true;
		tickCountdown();
	}
	else {
		btnStart.value = 'Start';
		targetDate.disabled = targetTime.disabled = false;
	}

	//let display = document.getElementById('display');
	//let append = document.createElement('div');
	//append.id = 'appended';
	//append.innerHTML = 'Appened element';
	//display.append(append);

	//let prepend = document.createElement('div');
	//prepend.id = 'prepended';
	//prepend.innerHTML = 'Prepended element';
	//display.prepend(prepend);

	//let before = document.createElement('h3');
	//before.id = 'before-display';
	//before.innerHTML = 'Time left since the beginning';
	//display.before(before);

	//let after = document.createElement('h4');
	//after.id = 'paradise';
	//after.innerHTML = 'Сюда нужно будет прикрутить музон';
	//display.after(after);
}

function tickCountdown() {
	let now = new Date();

	let targetDateControl = document.getElementById('target-date');
	let targetTimeControl = document.getElementById('target-time');

	let targetDateValue = targetDateControl.valueAsDate;
	let targetTimeValue = targetTimeControl.valueAsDate;
	//выравнимаем часовой пояс
	targetDateValue.setHours(targetDateValue.getHours() + targetDateValue.getTimezoneOffset() / 60);
	targetTimeValue.setHours(targetTimeValue.getHours() + targetTimeValue.getTimezoneOffset() / 60);

	document.getElementById('duration').innerHTML = typeof (targetDateValue);
	targetTimeValue.setFullYear(targetDateValue.getFullYear());
	targetTimeValue.setMonth(targetDateValue.getMonth());
	targetTimeValue.setDate(targetDateValue.getDate());

	document.getElementById('target-date-value').innerHTML = targetDateValue;
	document.getElementById('target-time-value').innerHTML = targetTimeValue;
	document.getElementById('current-time-value').innerHTML = now;

	let duration = targetTimeValue - now;
	document.getElementById('duration').innerHTML = duration;

	let timestamp = Math.trunc(duration / 1000);
	document.getElementById('timestamp').innerHTML = timestamp;

	const SECONDS_PER_MINUTE = 60;
	const SECONDS_PER_HOUR = 3600;
	const SECONDS_PER_DAY = 86400;
	const SECONDS_PER_WEEK = SECONDS_PER_DAY * 7;
	const DAYS_PER_MONTH = 365.25 / 12;
	const SECONDS_PER_MONTH = SECONDS_PER_DAY * DAYS_PER_MONTH;
	const SECONDS_PER_YEAR = SECONDS_PER_DAY * 365 + SECONDS_PER_HOUR * 6;

	let time_of_day = timestamp % SECONDS_PER_DAY;

	let date = Math.floor(timestamp / SECONDS_PER_DAY);
	date *= SECONDS_PER_DAY;

	let years = Math.floor(date / SECONDS_PER_YEAR);
	if (years > 0) {
		date %= SECONDS_PER_YEAR;
		let years_unit = document.getElementById('years-unit');
		if (years_unit == null) {
			let display = document.getElementById('display');
			display.prepend(createTimeBlock('years', addLeadingZero(years)));
		}
		else years_unit.innerHTML = addLeadingZero(years);
	}
	else removeTimeBLock('years');

	let months = Math.floor(date / SECONDS_PER_MONTH);
	if (months > 0) {
		let display = document.getElementById('display');
		date %= SECONDS_PER_MONTH;
		let months_unit = document.getElementById('months-unit');
		if (months_unit == null) {
			months_block = createTimeBlock('months', addLeadingZero(months));
			let hours_block = document.getElementById('hours-unit').parentElement;
			hours_block.before(months_block);
		}
		else months_unit.innerHTML = addLeadingZero(months);
	}

	let hours = Math.floor(time_of_day / SECONDS_PER_HOUR);
	if (hours > 0) time_of_day %= SECONDS_PER_HOUR;

	let minutes = Math.floor(time_of_day / SECONDS_PER_MINUTE);
	if (minutes > 0) time_of_day %= SECONDS_PER_MINUTE;

	let seconds = Math.floor(time_of_day);

	document.getElementById('hours-unit').innerHTML = addLeadingZero(hours);
	document.getElementById('minutes-unit').innerHTML = addLeadingZero(minutes);
	document.getElementById('seconds-unit').innerHTML = addLeadingZero(seconds);

	if (timestamp > 0 && document.getElementById('btn-start').value === 'Stop') setTimeout(tickCountdown, 100);
}

function createTimeBlock(name, value) {
	let time_block = document.createElement('div');
	time_block.className = 'time-block';

	let unit = document.createElement('div');
	unit.id = `${name}-unit`;
	unit.className = 'time-unit';
	unit.innerHTML = value;

	let marker = document.createElement('div');
	marker.id = `${name}-marker`;
	marker.className = 'time-marker';
	marker.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);

	time_block.prepend(unit);
	time_block.append(marker);

	return time_block;
}

function removeTimeBLock(name) {
	let unit = document.getElementById(`${name}-unit`);
	if (unit != null) {
		let block = unit.parentElement;
		let display = block.parentElement;
		display.removeChild(block);
	}
}

