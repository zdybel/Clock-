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

function changeImage(i) {
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/c6/28/0e/c6280e8f909cdaa96f599f4b611e876c.jpg')";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundImage = "url('http://dreamatico.com/data_images/stars/stars-2.jpg')";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundImage = "url('http://img00.deviantart.net/8dea/i/2016/230/5/1/ocean__stars__sky__and_you_by_muddymelly-d4bg1ub.jpg')";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/c9/d7/ce/c9d7ce2bd08d1179fefdcbebfe56ce16.jpg')";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg')";
	}
	if (i >= 50 && i < 60){
		image.style.backgroundImage = "url('http://www.space.com/images/i/000/019/091/original/july-skywatching-portland.jpg?interpolation=lanczos-none&downsize=*:1000')";
	}
}