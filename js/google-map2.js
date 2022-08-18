var google;

// Standard google maps function
    function init() {
        var myLatlng = new google.maps.LatLng(36.5954848, -6.237654);
        var myOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        TestMarker();
    }

    // Function for adding a marker to the page.
    function addMarker(location) {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Testing the addMarker function
    function TestMarker() {
           CentralPark = new google.maps.LatLng(36.59405410515228, -6.2354843174482095);
           addMarker(CentralPark);
    }
google.maps.event.addDomListener(window, 'load', init);
