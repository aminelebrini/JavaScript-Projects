const posi = document.getElementById('demo');

function posit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(ShowPosition);
    }
    else{
        posi = "is not supported by this browser";
    }
}

function ShowPosition(position){
    posi.innerHTML = "your position:<br>" + "<br>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}