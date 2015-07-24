
var locations = [
      ['伊斯蘭脫維善紀念中學', 22.266677, 114.240051, 4],
      ['伊斯蘭學校', 22.388710, 113.972279, 5],
      ['伊斯蘭鮑伯濤紀念小學', 22.349763, 114.197115, 3],
      ['伊斯蘭博愛幼稚園', 22.361162, 114.103472, 2],
      ['伊斯蘭徐錦享紀念幼稚園', 22.280054, 114.218498, 1],
      ['穆民國際小學', 22.449446, 114.018614, 6],
      ['穆斯林幼稚園', 22.277454, 114.178885, 7]
    ];

    var map = new google.maps.Map(document.getElementById('schoolmap'), {
      zoom: 11,
      center: new google.maps.LatLng(22.282467, 114.161573),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      }) (marker, i));
    }
