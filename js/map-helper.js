"use strict"; // Start of use strict

// 7. google map
function gMap () {
    if ($('.google-map').length) {
        $('.google-map').each(function () {
            // getting options from html
            var Self = $(this); 
            var mapName = Self.attr('id');
            var mapLat = Self.data('map-lat');
            var mapLng = Self.data('map-lng');
            var iconPath = Self.data('icon-path');
            var mapZoom = Self.data('map-zoom');
            var mapTitle = Self.data('map-title');
            var markers = Self.data('markers');

            // defined default style
            var styles = [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#2DA9CA"} ] }, {"featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{"color": "#2DA9CA"}, {"weight": "1"}, {"saturation": "0"}, {"gamma": "1.00"}, {"lightness": "0"} ] }, {"featureType": "administrative.country", "elementType": "labels", "stylers": [{"visibility": "off"}, {"hue": "#2DA9CA"} ] }, {"featureType": "administrative.country", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.province", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.province", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.neighborhood", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#F5FAFC"}, {"visibility": "on"} ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#2DA9CA"}, {"gamma": "1.09"}, {"lightness": "23"} ] }, {"featureType": "landscape", "elementType": "labels", "stylers": [{"visibility": "off"}, {"color": "#fff"} ] }, {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.man_made", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.man_made", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.natural", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape.natural", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 }, {"visibility": "off"} ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station.bus", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station.rail", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#F5FAFC"}, {"visibility": "on"} ] }, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#F5FAFC"} ] }, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}, {"color": "#000000"}, {"lightness": "44"} ] } ];
            
            if ($(this).hasClass('skin-2')) {
                var styles = [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#E68F48"} ] }, {"featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{"color": "#E68F48"}, {"weight": "1"}, {"saturation": "0"}, {"gamma": "1.00"}, {"lightness": "0"} ] }, {"featureType": "administrative.country", "elementType": "labels", "stylers": [{"visibility": "off"}, {"hue": "#E68F48"} ] }, {"featureType": "administrative.country", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.stroke", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.province", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.province", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.locality", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.neighborhood", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#F5FAFC"}, {"visibility": "on"} ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#E68F48"}, {"gamma": "1.09"}, {"lightness": "23"} ] }, {"featureType": "landscape", "elementType": "labels", "stylers": [{"visibility": "off"}, {"color": "#fff"} ] }, {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.man_made", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.man_made", "elementType": "labels.text", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.natural", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape.natural", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "landscape.natural.terrain", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 }, {"visibility": "off"} ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station.bus", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit.station.rail", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#F5FAFC"}, {"visibility": "on"} ] }, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#F5FAFC"} ] }, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}, {"color": "#000000"}, {"lightness": "44"} ] } ];
            }
            // if zoom not defined the zoom value will be 15;
            if (!mapZoom) {
                var mapZoom = 15;
            };
            // init map
            var map;
            map = new GMaps({
                div: '#'+mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                styles: styles,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if(iconPath) {
                $.each(markers, function (index, value) {
                    var index = value;
                    var html;
                    if (index[2]) {
                        html = index[2];
                    };                    
                    if (!index[3]) {
                        index[3] = iconPath;
                    };
            
                    map.addMarker({
                        icon: index[3],                        
                        lat: index[0],
                        lng: index[1],
                        infoWindow: {
                          content: html
                        }
                    });   

                });
            }
        });  
    };
}



// instance of fuction while Document ready event   
jQuery(document).on('ready', function () {
    (function ($) {
        gMap();
    })(jQuery);
});