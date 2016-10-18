app.controller('homepageController', function ($scope) {
    $scope.geoData = [
        {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        //geojson markers
                        "marker-color": "#cc5527",
                        "marker-size": "medium",
                        "marker-symbol": "building",
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
                        "type": "Point",
                        "coordinates": [
                            -97.73982524871825,
                            30.288177779561856
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
                        "area": 'whitis',
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