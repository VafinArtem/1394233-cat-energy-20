
function initMap() {
  // The location of Uluru
  let academy = { lat: 59.938635, lng: 30.323118 };
  // The map, centered at Uluru
  let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 17,
        center: academy,
        disableDefaultUI: true
      }
    );
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({
    position: academy,
    map: map,
    icon: "../img/map-pin.png"
  });
}

// ymaps.ready(function() {
//   var myMap = new ymaps.Map("map", {
//           center: [59.938635, 30.323118],
//           zoom: 17
//       }, {
//           autoFitToViewport: "always",
//           searchControlProvider: "yandex#search"
//       }),

//       myPlacemarkWithContent = new ymaps.Placemark([59.938784, 30.323126], {
//           hintContent: "ул. Большая Конюшенная, 19/8, Санкт-Петербург",
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: "default#imageWithContent",
//           // Своё изображение иконки метки.
//           iconImageHref: "../img/map-pin.png",
//           // Размеры метки.
//           iconImageSize: [124, 106],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-35, -140]
//       });

//   myMap.geoObjects
//       .add(myPlacemarkWithContent)

// });
