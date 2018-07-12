var currentLocationDiv = document.getElementById("currentlocation")

getCurrentLocation = function(){
    navigator.geolocation.getCurrentPosition(SuccessInFinding)
}
function SuccessInFinding(location)
    {
        var lat=location.coords.latitude
        var lon=location.coords.longitude
        currentLocationDiv.innerHTML=lat+","+lon
    }
