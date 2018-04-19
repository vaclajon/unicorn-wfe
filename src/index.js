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

	new google.maps.Marker({
		position: location,
		map: map
	});
}

function getLocationFromUrl() {
	const params = new URLSearchParams(location.search);

	if (params.has('latitude') && params.has('longitude')) {
		return {
			lat: parseFloat(params.get('latitude')),
			lng: parseFloat(params.get('longitude'))
		}
	}

	return false;
}

function getLocationFromStorage() {
	var location = localStorage.getItem("geoLocation");
	return location ? JSON.parse(location) : false;
}

function showMap() {
	var location = getLocationFromUrl() || getLocationFromStorage();

	if (location) {
		showPosition(location);
	}
	else {
		getCoords(function (location) {
			saveCoordinates(location);
			showMap();
		});
	}
}

showMap();