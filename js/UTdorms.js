var app = angular.module('housingApp', ['ngRoute'],
    function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

app.directive('mapbox', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                callback: "="
            },
            template: '<div id="homepage-map"></div>',
            link: function (scope, elem) {
                // build the map here
                L.mapbox.accessToken = 'pk.eyJ1Ijoic2NpZiIsImEiOiJjaWgyOHJkZW8weHJrd3dtMHJ1cnV0ZDY2In0.5wK8t52sB90Exoi6StYlBw';
                var southWest = L.latLng(30.293, -97.732),
                    northEast = L.latLng(30.281, -97.743),
                    bounds = L.latLngBounds(southWest, northEast);
                var map = L.mapbox.map(elem[0], 'mapbox.streets',
                    {
                        maxBounds: bounds,
                        minZoom: 14
                    }
                ).setView([30.287, -97.738], 16).fitBounds(bounds);

                scope.callback(map);
            }
        };
    }
]);

app.controller('homepageController', function ($scope) {
    $scope.geoData = [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        //geojson markers
                        "stroke": "#333F48",
                        "stroke-width": 2,
                        "stroke-opacity": 1,
                        "fill": "#BF5700",
                        "fill-opacity": 0.5,

                        //details
                        "name": "Andrews",
                        "address": "2401 Whitis Avenue",
                        "link": "andrews",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                          [
                            [
                              -97.7401551604271,
                              30.288068923435727
                            ],
                            [
                              -97.74013370275497,
                              30.28826347472509
                            ],
                            [
                              -97.73954898118973,
                              30.288221785195557
                            ],
                            [
                              -97.73955702781677,
                              30.288094400412238
                            ],
                            [
                              -97.74003714323044,
                              30.288129141733204
                            ],
                            [
                              -97.74004250764847,
                              30.288061975168258
                            ],
                            [
                              -97.7401551604271,
                              30.288068923435727
                            ]
                          ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "blanton",
                        "name": "Blanton",
                        "address": "2500 University Avenue",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73937463760376,
                            30.288661840447016
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Brackenridge",
                        "link": "brackenridge",
                        "address": "303 East 21st Street",
                        "area": 'jester',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73593068122864,
                            30.283135529663728
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "carothers",
                        "name": "Carothers",
                        "address": "2501 Whitis Avenue",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.74010956287384,
                            30.288689633344013
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "creekside",
                        "name": "Creekside",
                        "address": "2500 San Jacinto Blvd",
                        "area": 'creekside',
                        'gender': 'male',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73337721824645,
                            30.288527508000662
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "duren",
                        "name": "Duren",
                        "address": "2604 Whitis Avenue",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.74039924144745,
                            30.291390138943623
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Jester East",
                        "link": "jester%20east",
                        "address": "201 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73595750331877,
                            30.2823758113038
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Jester West",
                        "link": "jester%20west",
                        "address": "201 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73670315742491,
                            30.282125658849186
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "kinsolving",
                        "name": "Kinsolving",
                        "address": "2605 Whitis Avenue",
                        "area": 'whitis',
                        'gender': 'female',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73965895175934,
                            30.290320136184143
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "littlefield",
                        "name": "Littlefield",
                        "address": "2503 Whitis Avenue",
                        "area": 'whitis',
                        'gender': 'female',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73972332477568,
                            30.289319603563253
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Moore-Hill",
                        "link": "moore-hill",
                        "address": "304 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73538887500763,
                            30.283603402068238
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Prather",
                        "link": "prather",
                        "address": "305 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73509919643402,
                            30.282389708643695
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "Roberts",
                        "link": "roberts",
                        "address": "303 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73516893386841,
                            30.2830660434728
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "name": "San Jacinto",
                        "link": "san%20jacinto",
                        "address": "309 East 21st Street",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73434281349182,
                            30.282496254850795
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
                        "link": "whitis%20court",
                        "name": "Whitis Court",
                        "address": "2610 Whitis Avenue",
                        "area": 'whitis',
                        'gender': 'coed',
                        'price': 10223,
                        //walking directions
                        'walk_to_greg': 10,
                        'walk_to_pcl': 10,
                        'walk_to_drag': 5,
                        'walk_to_stadium': 15
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.74073183536528,
                            30.290852822999625
                        ]
                    }
                }
            ]
        }
    ];
    $scope.geoJSON_attractions = [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "america-football",
                        "name": "Darrell K Royal - Texas Memorial Stadium"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.7325189113617,
                            30.283686785034806
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "basketball",
                        "name": "Gregory Gym"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.7363920211792,
                            30.28396472774488
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "library",
                        "name": "Perry-Casteñeda Library"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.7382481098175,
                            30.282788098216884
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "town-hall",
                        "name": "Main Building (UT Tower)"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73939609527588,
                            30.28604927297253
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "art-gallery",
                        "name": "Blanton Museum of Art"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.73743271827698,
                            30.281027759978798
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "marker-color": "#a0a0a0",
                        "marker-size": "small",
                        "marker-symbol": "art-gallery",
                        "name": "Harry Ransom Center"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -97.74125218391418,
                            30.28433531680018
                        ]
                    }
                }
            ]
        }
    ];

    $scope.selectedFilters = {
        price: '',
        area: '',
        gender: ''
    };

    $scope.buildMap = function(map) {
        var listings = document.getElementById('listings');
        var locations = L.mapbox.featureLayer().addTo(map);
        locations.setGeoJSON($scope.geoData); // add our dorm data to the map
        var attractions = L.mapbox.featureLayer().addTo(map); // add our attractions data to the map
        attractions.setGeoJSON($scope.geoJSON_attractions);

        // determine which dorm is the active one selected by the user
        function setActive(el) {
            var siblings = listings.getElementsByTagName('div');
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].className = siblings[i].className
                    .replace(/active/, '').replace(/\s\s*$/, ''); // i'm very confused by what this does
            }
            el.className += ' active';
        }

        locations.eachLayer(function (locale) {
            var prop = locale.feature.properties;
            var popup = '<a href="' + prop.link + '" target="_blank">' + '<h2>' + prop.name + '</h2></a><p>' + prop.address + "</p>"; // add popups

            var listing = listings.appendChild(document.createElement('div'));
            listing.className = 'list-item';

            var link = listing.appendChild(document.createElement('a'));
            link.href = '/' + prop.link;
            link.className = 'title';
            link.innerHTML = prop.name;

            var direct_link = listing.appendChild(document.createElement('a'));
            direct_link.href = '#';
            direct_link.className = 'direct-link';
            direct_link.innerHTML = "<i class='fa fa-location-arrow'></i>";

            // what happens when we click the location icon in the list
            direct_link.onclick = function () {
                setActive(listing);
                if(window.innerWidth < 767) {
                    // mobile specific click events
                    $('html, body').animate({
                        scrollTop: $('.main-container').offset().top - 18
                    }, 750);
                }
                setActive(listing);
                map.setView(locale.getLatLng(), 18);
                locale.openPopup();
                return false;
            };
            // what happens when we click a dorm on the list
            locale.on('click', function (e) {
                map.setView(locale.getLatLng(), 18);
                setActive(listing);
            });
            locale.bindPopup(popup); // bind the popup to the map
        });
        // what happens when we click an attraction in the map
        attractions.eachLayer(function (layer) {
            var prop = layer.feature.properties;
            var attraction_popup = '<span>' + prop.name + '</span>';
            layer.bindPopup(attraction_popup);
        });

        // certain filter actions have to be within buildMap() because they access variables inside this scope

        $scope.filterSelectorAction = function(filter, value) {
            if(filter === 'price') {
                switch (value) {
                    case 'ascending':
                        // TODO: place code for ascending list builder here
                        break;
                    case 'descending':
                        // TODO: build descending list builder here
                        break;
                }
            }
            //TODO: figure out how to filter multiple values at once
            $scope.selectedFilters[filter] = value;
            locations.setFilter(function (f) {
                return f.properties[filter] === value;
            });
            return false;
        };

        $scope.resetFilters = function () {
            $('#filter-reset-icon').addClass('fast-spin');
            setTimeout(function() {
                $('#filter-reset-icon').removeClass('fast-spin');
            }, 300);
            $scope.selectedFilters.price = '';
            $scope.selectedFilters.area = '';
            $scope.selectedFilters.gender = '';
            $('.radio-filter-selector').each(function(){
                if($(this).is(':checked')) {
                    $(this).removeAttr('checked');
                }
            });
            locations.setFilter(function() {
                return true;
            })
        };
    };

    /* --------------------------

    FILTER CONTROLS -------------

    ----------------------------- */

    $scope.filterConfig = {
        // filterConfiguration elements
        trigger: '#filter-trigger',
        icon: '#filter-trigger-icon',
        element: '.filter-menu',
        filter_selector_trigger: '',
        filter_option_trigger: ''
    };
    // filter menu control
    $scope.initializeFilters = function () {
        // hide the filter menu element
        $($scope.filterConfig.element).hide();
    };
    $scope.menuShow = false;
    $scope.trigger = function () {
        if ($($scope.filterConfig.element).is(':hidden')) {
            $($scope.filterConfig.icon).removeClass('fa-chevron-down').addClass('fa-close');
            $($scope.filterConfig.element).slideDown(150);
            if(window.innerWidth < 767) {
                $('html, body').animate({scrollTop: $($scope.filterConfig.element).offset().top - 10}, 500);
            }
            $scope.menuShow = true;
        } else {
            $($scope.filterConfig.icon).removeClass('fa-close').addClass('fa-chevron-down');
            $($scope.filterConfig.element).slideUp(100);
            $scope.menuShow = false;
        }
    };
});

