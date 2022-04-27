/*=================================
  Restyling the control ZoomInOut
=================================*/

function ZoomControl(controlDiv, map) {  
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '10px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'transparent';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderWidth = '0';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '34px'; 
  controlWrapper.style.height = '75px';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '34px'; 
  zoomInButton.style.height = '39px';
  zoomInButton.style.backgroundImage = 'url("img/icon/controlzoomin.svg")';
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '34px'; 
  zoomOutButton.style.height = '36px';
  zoomOutButton.style.backgroundImage = 'url("img/icon/controlzoomout.svg")';
  controlWrapper.appendChild(zoomOutButton);

  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}



//MAPS
const googleMpasLatLng = new google.maps.LatLng(3.121453513533559, 101.63707494893099);
const newIconPins = {
  url: "img/icon/pin-google-map.svg", // url
  scaledSize: new google.maps.Size(60, 60), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(15, 15) // anchor //modifed the staging for preview only
};

const map = new google.maps.Map(document.getElementById('map_canvas'), {
  zoom: 18,
  center: googleMpasLatLng,
  disableDefaultUI: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

const myMarker = new google.maps.Marker({
  position: googleMpasLatLng,
  draggable: true,
  icon: newIconPins
});

map.setCenter(myMarker.position);
myMarker.setMap(map);


var zoomControlDiv = document.createElement('div');
var zoomControl = new ZoomControl(zoomControlDiv, map);

zoomControlDiv.index = 1;
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);