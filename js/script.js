jQuery(document).ready(function() {


//creating the owl-carousel, options:
var itm = 1;
	jQuery(".owl-carousel").owlCarousel({

      nav:true,
      dots: true,
      lazyLoad: true,
      autoPlay:true,
      items : itm,
      itemsDesktop : true,
      itemsDesktopSmall : true,
      itemsTablet: true,
      itemsMobile : true,
      responsiveClass:true,
      responsive:{
          991:{
              items: 1

          }
      }
	});

//smooth scroll:
jQuery(".navbar-nav > .slim .nav-link ").on("click", function (event) {
    
    var id  = jQuery(this).attr('href');

    if(id == '#ex1'){
      jQuery('body,html').animate({scrollTop: 0}, 1500);
    }else{
      var  top = jQuery(id).offset().top - 70;
      jQuery('body,html').animate({scrollTop: top}, 1500);
    }
});


jQuery('.navbar-nav > .slim:first-of-type').addClass('active-link');

jQuery('.navbar-nav > .slim').on("click", function (event) {
    jQuery('.navbar-nav > .slim').removeClass('active-link');
    jQuery(this).addClass('active-link');
});

//creating google maps, options:
function initialize() {
  var myLatlng = new google.maps.LatLng(49.83826, 24.02324);

  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    styles: [
    {
    "elementType": "geometry",
    "stylers": [{"color": "#242f3e"} ]
    },
    {
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#746855"} ]
    },
    {
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#242f3e"} ]
    },
    {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{"visibility": "off"} ]
    },
    {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#d59563"} ]
    },
    {
    "featureType": "poi",
    "stylers": [{"visibility": "off"} ]
    },
    {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#d59563"} ]
    },
    {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{"color": "#263c3f"} ]
    },
    {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#6b9a76"} ]
    },
    {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"color": "#38414e"} ]
    },
    {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#212a37"} ]
    },
    {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"} ]
    },
    {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#9ca5b3"} ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{"color": "#746855"} ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#1f2835"} ]
    },
    {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#f3d19c"} ]
    },
    {
    "featureType": "transit",
    "stylers": [{"visibility": "off"} ]
    },
    {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{"color": "#2f3948"} ]
    },
    {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#d59563"} ]
    },
    {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color": "#17263c"} ]
    },
    {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#515c6d"} ]
    },
    {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#17263c"} ]
    }
  ]
}

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

});


var a = 1;
var b = 2;
var c = 3;


console.log(a & b);
console.log(a % b);
console.log(a - b);

console.log(a + b);

console.log((a + b)% 2);