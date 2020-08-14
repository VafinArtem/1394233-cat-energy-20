;
function initMap() {
  let academy = {lat: 59.938635, lng: 30.323118};
  let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 17,
        center: academy,
        disableDefaultUI: true
      }
    );
  let marker = new google.maps.Marker({
    position: academy,
    map: map,
    icon: "../img/map-pin.png"
  });
}
