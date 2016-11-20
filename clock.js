startClock();


function startClock(){
	var day = new Date();
	var hour = day.getHours();
	var minute = day.getMinutes();
	var second = day.getSeconds();
	hour = getZero(hour);
	minute = getZero(minute);
	second = getZero(second);
	var color = "#" + hour + minute + second;
	document.getElementById("clock").style.background = color;
	document.getElementById("time").innerText = hour + ":" + minute + ":" + second;
	setTimeout(startClock, 500); 
	changeImage(second);
}

function getZero(i) {
	if (i < 10){i = "0" + i};
	return i;
}

/*function changeImage(i) {
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "red";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundColor = "orange";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundColor = "yellow";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundColor = "green";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundColor = "blue";
	}
	if (i >= 50 && i < 60){
		image.style.backgroundColor = "purple";
	}
}*/