startClock();



function startClock(){
	var day = new Date();
	var hour = day.getHours();
	var minute = day.getMinutes();
	var second = day.getSeconds();
	hour = getZero(hour);
	minute = getZero(minute);
	second = getZero(second);
	var timeArray = [hour, minute, second];
	var color = "#" + hour + minute + second;
	document.getElementById("clock").style.background = color;
	document.getElementById("time").innerText = hour + ":" + minute + ":" + second;
	//changeImage(timeArray);
	//changeImage(second);
	changeGreeting(timeArray);
	setTimeout(startClock, 500); 
}


document.getElementById('btn').addEventListener('click', addName);
document.getElementById('counterBtn').addEventListener('click', reAddName);

function addName(){
	var addedName = document.getElementById('name').value;
	document.getElementById('greeting').style.display = "inline-block";
	document.getElementById('input').style.display = "none";
	document.getElementById('h2Name').innerText = addedName;
	document.getElementById('counterName').innerText = addedName;
}

function reAddName(){
	document.getElementById('greeting').style.display = "none";
	document.getElementById('input').style.display = "inline-block";
	document.getElementById('name').value = "";
}

function getZero(i) {
	if (i < 10){i = "0" + i};
	return i;
}

 function changeGreeting(i){
 	var greeting = document.getElementById('timeOfDay');
 	switch(true){
 		case (i[0] > 22 || i[0] < 5):
 			greeting.innerText= "Good night,";
 			nightPhotos(i[2]);
 			break;
 		case (i[0] >= 5 && i[0] < 10):
 			greeting.innerText= "Good morning,";
 			morningPhotos(i[2]);
 			break;
 		case (i[0] >= 10 && i[0] < 14):
 			greeting.innerText= "Good day,";
 			dayPhotos(i[2]);
 			break;
 		case (i[0] >= 14 && i[0] < 16):
 			greeting.innerText= "Good afternoon,";
 			afternoonPhotos(i[2]);
 			break;
 		case (i[0] >= 16 && i[0] < 22):
 			greeting.innerText= "Good evening,";
 			eveningPhotos(i[2]);
 			break;
 	}
}


function nightPhotos(i){
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

function morningPhotos(i){
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "url('https://static1.squarespace.com/static/56abdbab3c44d82aff9a7904/t/56ac1df776d99cc55187fde1/1454120444416/sunsets_New_Zealand_Sky_Rays_of_light_Grass_Nature_sunrise_landscape_3072x2052.jpg')";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundImage = "url('http://cdn.paper4pc.com/images/lovely-tokyo-wallpaper-2.jpg')";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundImage = "url('http://img05.deviantart.net/09c7/i/2013/132/f/c/spring_sunrise_by_adamstephensonscfc-d64zvgj.jpg')";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundImage = "url('https://c2.staticflickr.com/4/3784/13526803403_7f1e9ed265_b.jpg')";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundImage = "url('https://c6.staticflickr.com/3/2427/3919161197_0f1f4f9944_b.jpg')";
	}
	if (i >= 50 && i < 59){
		image.style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-s/02/2a/a6/31/sunrise-on-tiger-hill.jpg')";
	}
}


function dayPhotos(i){
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "url('http://2.bp.blogspot.com/-QmVOOrO8Z9k/T8UKXqEibnI/AAAAAAAAAv0/ZShOYhfK6b4/s640/Top-10-Best-Nature-Scene-HD-wallpaper-02-beautiful-mountain.jpg')";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundImage = "url('http://www.art-crafts-emporium.com/wp-content/uploads/2015/12/BD-Landscape.jpg')";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundImage = "url('http://images2.fanpop.com/images/photos/6900000/Landscape-national-geographic-6909819-500-375.jpg')";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundImage = "url('http://community-wealth.org/sites/clone.community-wealth.org/files/Kansas%20CityTheresa%20L%20Wysocki.jpg')";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundImage = "url('http://www.destination360.com/caribbean/images/s/caribbean-aruba.jpg')";
	}
	if (i >= 50 && i < 60){
		image.style.backgroundImage = "url('http://krstarenja.rs/wp-content/uploads/2016/02/norveski_fjordi1.jpg')";
	}
}

function afternoonPhotos(i){
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/564x/69/6d/f4/696df4faee45a6d4bb43ddd5c218a15c.jpg')";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundImage = "url('http://farm6.static.flickr.com/5220/5423423031_0abcf624cc.jpg')";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundImage = "url('http://www.fodors.com/ee/files/slideshows/3-Empire-State-Building.jpg')";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundImage = "url('https://c1.staticflickr.com/1/1/693601_13638a1968_z.jpg?zz=1')";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundImage = "url('https://c1.staticflickr.com/1/380/20347172586_0b0623e521_b.jpg')";
	}
	if (i >= 50 && i < 60){
		image.style.backgroundImage = "url('http://turningpointct.org/wp-content/uploads/2015/06/sunshine1.jpg')";
	}
}

function eveningPhotos(i){
	var image = document.getElementById("img");
	if (i >= 0 && i < 10){
		image.style.backgroundImage = "url('http://img06.deviantart.net/153e/i/2016/072/1/1/forest_sunset_by_seventhson77-d9uwuag.jpg')";
	}
	if (i >= 10 && i < 20){
		image.style.backgroundImage = "url('http://www.siestakeywatersports.com/img/sunset/sunset01.jpg')";
	}
	if (i >= 20 && i < 30){
		image.style.backgroundImage = "url('https://apod.nasa.gov/apod/image/1603/EquinoxSunset_Christen_1852.jpg')";
	}
	if (i >= 30 && i < 40){
		image.style.backgroundImage = "url('http://cdn.paper4pc.com/images/winter-sunset-wallpaper-1.jpg')";
	}
	if (i >= 40 && i < 50){
		image.style.backgroundImage = "url('http://www.quipidity.com/wp-content/uploads/2015/03/sunset.jpg')";
	}
	if (i >= 50 && i < 60){
		image.style.backgroundImage = "url('http://danieljknaggs.com/wp-content/uploads/2014/05/sunset-on-the-missouri-river.jpg')";
	}
}

