// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.2006918, lng: 19.1753065 };
    // The map, centered at Uluru 50.1902941,19.1436139
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }