var map;
var service;
var infowindow;
var resultsDisplayEntriesHeader = $(".user-inputs-display");
var resultsDisplayEntries = $("#results");
var resultsDisplayResponse = $("#response-results");
const apik = 'AIzaSyDTt9aaiFRWAsIfdmvIN7tCBSzVc-eDEmU'
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  //mode: 'no-cors'
};


$('#submit-btn').on('click', function () {
  const cityEntry = $('#city-input').val();
  const stateEntry = $('#state-input').val();
  const activityEntry = $('#activity-input').val()
  const searchAreaEntry = $('#searcharea-input').val()
  console.log(`--> input - cityEntry:  ${cityEntry}`)
  console.log(`--> input - stateEntry:  ${stateEntry}`)
  console.log(`--> input - activityEntry:  ${activityEntry}`)
  console.log(`--> input - searchAreaEntry:  ${searchAreaEntry} meters`)
  resultsDisplayEntriesHeader.append('<p class="is-size-3">User Inputs</p>')
  /*
  resultsDisplayEntriesHeader.append('<ul id="results"></ul>')
  resultsDisplayEntries.append(`<li>CITY:  ${cityEntry}</li>`);
  resultsDisplayEntries.append(`<li>STATE:  ${stateEntry}</li>`);
  resultsDisplayEntries.append(`<li>ACTIVITY:  ${activityEntry}</li>`)
  resultsDisplayEntries.append(`<li>SEARCH RADIUS:  ${searchAreaEntry} meters</li>`)
  */
  resultsDisplayEntriesHeader.append(`<ul id="results">
    <li>CITY:  ${cityEntry}</li>
    <li>STATE:  ${stateEntry}</li>
    <li>ACTIVITY:  ${activityEntry}</li>
    <li>SEARCH RADIUS:  ${searchAreaEntry} meters</li>
  </ul>`)

  placeInfoGet(cityEntry, stateEntry, activityEntry, searchAreaEntry);

  // let newPassword = passwordGenerator(15);
  // passwordDisplayEl.text(newPassword);
});

function placeInfoGet(city, state, activity, searcharea) {
  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${activity}+${city}+${state}&radius=${searcharea}&key=${apik}`

  //fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=park+greensboro+nc&radius=100&key=AIzaSyDTt9aaiFRWAsIfdmvIN7tCBSzVc-eDEmU", requestOptions)
  fetch(searchUrl, requestOptions)
    //.then(response => response.text())
    .then(function (response) {
      console.log(`--> RESPONSE STATUS:  ${response.status}`);
      if (response.ok) {
        console.log(`--> RESPONSE STATUS:  ${response.status}`);
        response.json()
    //})
        .then(function (data) {


  //fetch(searchUrl).then(function (res) {

      //console.log(`--> RESPONSE:  `, response.json())
      console.log(`--> RESPONSE data (raw):  ${data}`)
      console.log(`--> RESPONSE data (JSON):  ${data.json()}`)
      for (let i = 0; i < data.length; i++) {
        const placeName = data.results.name[i]
        const placeTypes = data.results.types[i]
        const placeAddress = data.results.formatted_address[i]

        const resultsDisplayResponse = `<p class="is-size-3">Google Places Responses</p>
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Response #${[i]}]</p>
              <ul>
                <li id="response-name-item">Place Name:  ${placeName}</li>
                <li id="response-name-item">Place Types: ${placeTypes}</li>
                <li id="response-name-item">Place Address:  ${placeAddress}</li>
            </div>
          </div>
        </div>`
        $("#response-results").append(resultsDisplayResponse);
      }
    })
  }


    //return res.json();
  })

  //.then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//
/*
function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function initMap(coOrdinatesCenter, coOrdinatesList) {
  bounds = new google.maps.LatLngBounds();

  //markerContent =

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: coOrdinatesCenter,
  });
  console.log(`INSIDE initMap | coOrdinatesList LENGTH:  ${coOrdinatesList.length}`)
  for (let i = 0; i < coOrdinatesList.length; i++) {
    coOrdinateExtractLat = coOrdinatesList[i].lat;
    coOrdinateExtractLng = coOrdinatesList[i].lng;
    coOrdinatesMarker = `${parseFloat(coOrdinateExtractLat)}, ${parseFloat(coOrdinateExtractLng)}`;
    markerPosition = new google.maps.LatLng(parseFloat(coOrdinateExtractLat), parseFloat(coOrdinateExtractLng));
    bounds.extend(markerPosition);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(parseFloat(coOrdinateExtractLat), parseFloat(coOrdinateExtractLng)),
      map: map,
      //title: `LOCATION ${[i]}`
    });
    ;
  };
  marker = new google.maps.Marker({
    position: coOrdinatesCenter,
    map: map,
  });
  map.fitBounds(bounds);
};

initMap();
*/
