mapboxgl.accessToken = "";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    // default to London
    setupMap([51.507351, -0.127758]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 17,
    });

    // Add navigation
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // Add direction
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/driving",
    });

    map.addControl(directions, "top-left");
}
