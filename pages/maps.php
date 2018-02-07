<h1 class="title">TP Maps</h1>
<p class="intro">
    Intégrer une google maps avec l'api JS. <a href="https://developers.google.com/maps/documentation/javascript/tutorial?hl=fr" target="_blank">Voir la doc</a>
</p>
<style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 1000px;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
<div id="map"></div>
<script>
     var map;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 8
       });
     }
   </script>
   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATk_YHxFzMKfTbilPLirQ3HMoRZLGbws0&callback=initMap"
    async defer></script>
