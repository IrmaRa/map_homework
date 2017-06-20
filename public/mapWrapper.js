var MapWrapper = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {

  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

  },

  addClickEvent: function() {
    this.googleMap.addListener('click', function(event) {
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(coords);

    }.bind(this));
  },

  addInfoWindow: function(coords, message) {

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    var infoWindow = new google.maps.InfoWindow({
      content: message
    });

    marker.addListener('click', function () {
      infoWindow.open(marker.map, marker);
    });
  },

  newLocation: function(newLat,newLng) {
    var button = document.querySelector('#new-location');
    button.addEventListener('click', function(event) {

      this.googleMap.setCenter({
        lat : newLat,
        lng : newLng
      });

    }.bind(this));
  },

  currentLocation: function() {
    var button = document.querySelector('#current-location');

    button.addEventListener('click', function(event) {

      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        this.googleMap.setCenter({
          lat : lat,
          lng : lng
        });

      }.bind(this));
    }.bind(this));
  }


}