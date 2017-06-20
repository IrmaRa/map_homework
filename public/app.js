var initialize = function() {

  var container = document.querySelector('#main-map');
  var coords = {lat: 51.50, lng: -0.127};
  var zoom = 10;
  var mainMap = new MapWrapper(container, coords, zoom);


  mainMap.addMarker(coords);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(coords, "London");
  mainMap.newLocation(-8.4, 115.19);
  mainMap.currentLocation();

}


window.addEventListener('load', initialize);
