import './index.html';
import './style.scss';

function getCoords(successFn) {
	console.log("Loading coordinates");
	navigator.geolocation.getCurrentPosition(successFn);
}

function saveCoordinates(location) {
	var lat = location.coords.latitude;
	var lng = location.coords.longitude;
	localStorage.setItem("geoLocation", JSON.stringify({ lat: lat, lng: lng }));
}

function showPosition(location) {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}

function showMap() {
	var location = localStorage.getItem("geoLocation");

	if (location) {
		showPosition(JSON.parse(location));
	}
	else {
		getCoords(function (location) {
			saveCoordinates(location);
			showMap();
		});
	}
}

showMap();