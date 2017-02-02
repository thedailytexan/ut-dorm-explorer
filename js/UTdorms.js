"use strict";

var app = angular.module('housingApp', ['LocalStorageModule'],
    function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setStorageCookie(15, '/', false);
});

app.directive('mapbox', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                callback: "="
            },
            template: '<div id="main-map"></div>',
            link: function (scope, elem) {
                // build the map here
                mapboxgl.accessToken = 'pk.eyJ1Ijoic2NpZiIsImEiOiJjaWgyOHJkZW8weHJrd3dtMHJ1cnV0ZDY2In0.5wK8t52sB90Exoi6StYlBw';

                var bounds = [
                    [-97.728,30.293],
                    [-97.755,30.28]
                ];

                var map = new mapboxgl.Map({
                    container: elem[0],
                    style: 'mapbox://styles/scif/civr8g5vj005n2jm9n9r6r593',
                    center: [-97.743, 30.287],
                    minZoom: 13,
                    maxBounds: bounds
                });

                scope.callback(map);

                return map;
            }
        };
    }
]);

app.filter('camelcase', function() {
    return function(input) {
        if (typeof input !== 'string') {
            return;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});

app.filter('orderObjectBy', function () {
    return function (input, attribute) {
        if (!angular.isObject(input)) return input;

        // Filter out angular objects.
        var array = [];
        for (var objectKey in input) {
            if (typeof(input[objectKey]) === "object" && objectKey.charAt(0) !== "$")
                array.push(input[objectKey]);
        }

        var attributeChain = attribute.split(".");

        array.sort(function (a, b) {

            for (var i = 0; i < attributeChain.length; i++) {
                a = (typeof(a) === "object") && a.hasOwnProperty(attributeChain[i]) ? a[attributeChain[i]] : 0;
                b = (typeof(b) === "object") && b.hasOwnProperty(attributeChain[i]) ? b[attributeChain[i]] : 0;
            }

            var a_num = Math.round(a * 10) / 10;
            var b_num = Math.round(b * 10) / 10;

            return b_num - a_num;

        });

        return array;
    };
});

app.controller('homepageController', function ($scope, localStorageService) {
    (window.innerWidth < 768) ? $scope.mobile = true : $scope.mobile = false;
    // start data
    $scope.geoData = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "id": 0,
                        "name": "Andrews",
                        "address": "2401 Whitis Avenue",
                        "link": "andrews",
                        "area": "whitis",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 4.5,
                        "location": 4,
                        "comfort": 4.25,
                        "food": 4.5,
                        "environment": 5
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
                        "id": 1,
                        "link": "blanton",
                        "name": "Blanton",
                        "address": "2500 University Avenue",
                        "area": "whitis",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 4.1,
                        "location": 4.3,
                        "comfort": 4,
                        "food": 3.5,
                        "environment": 4.5
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73942291736601,
                                    30.28897219401623
                                ],
                                [
                                    -97.73928076028822,
                                    30.288960613676814
                                ],
                                [
                                    -97.73933708667755,
                                    30.288314428570455
                                ],
                                [
                                    -97.73942828178406,
                                    30.28831906073691
                                ],
                                [
                                    -97.73944705724716,
                                    30.28809671650068
                                ],
                                [
                                    -97.73954898118973,
                                    30.288101348677436
                                ],
                                [
                                    -97.73954093456268,
                                    30.28822641736639
                                ],
                                [
                                    -97.73968577384949,
                                    30.288237997792496
                                ],
                                [
                                    -97.73968040943146,
                                    30.288288951651094
                                ],
                                [
                                    -97.73958384990691,
                                    30.2882820033992
                                ],
                                [
                                    -97.73957580327988,
                                    30.288379278880807
                                ],
                                [
                                    -97.73948192596434,
                                    30.2883746467172
                                ],
                                [
                                    -97.73942291736601,
                                    30.28897219401623
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 2,
                        "name": "Brackenridge",
                        "link": "brackenridge",
                        "address": "303 East 21st Street",
                        "area": "Waller Creek",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.5,
                        "location": 3.3,
                        "comfort": 3.6,
                        "food": 3.3,
                        "environment": 3.6
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73564100265503,
                                    30.283061411058313
                                ],
                                [
                                    -97.73611575365067,
                                    30.283096154161566
                                ],
                                [
                                    -97.73612648248672,
                                    30.28301045448459
                                ],
                                [
                                    -97.73630887269974,
                                    30.283026667942746
                                ],
                                [
                                    -97.73629814386366,
                                    30.283144794485473
                                ],
                                [
                                    -97.73620158433914,
                                    30.283140162074705
                                ],
                                [
                                    -97.73619085550308,
                                    30.283230494045124
                                ],
                                [
                                    -97.73601114749908,
                                    30.283218913027916
                                ],
                                [
                                    -97.73601114749908,
                                    30.283195750989403
                                ],
                                [
                                    -97.73562759160995,
                                    30.283170272740747
                                ],
                                [
                                    -97.73564100265503,
                                    30.283061411058313
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 3,
                        "link": "carothers",
                        "name": "Carothers",
                        "address": "2501 Whitis Avenue",
                        "area": "whitis",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.7,
                        "location": 3.75,
                        "comfort": 3.5,
                        "food": 3.5,
                        "environment": 3.75
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.74014979600906,
                                    30.288999986825292
                                ],
                                [
                                    -97.73998886346817,
                                    30.28898840648913
                                ],
                                [
                                    -97.74004250764847,
                                    30.288395491451716
                                ],
                                [
                                    -97.74020612239836,
                                    30.288409387938913
                                ],
                                [
                                    -97.74014979600906,
                                    30.288999986825292
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 4,
                        "link": "creekside",
                        "name": "Creekside",
                        "address": "2500 San Jacinto Blvd",
                        "area": "Waller Creek",
                        "gender": "male-only",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 1.75,
                        "location": 1.5,
                        "comfort": 1.5,
                        "food": 1.5,
                        "environment": 2.5
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73347645998001,
                                    30.288942085130895
                                ],
                                [
                                    -97.73333698511122,
                                    30.288923556581462
                                ],
                                [
                                    -97.73336112499237,
                                    30.28879848878134
                                ],
                                [
                                    -97.733294069767,
                                    30.288791540565523
                                ],
                                [
                                    -97.73333698511122,
                                    30.288573829554668
                                ],
                                [
                                    -97.73300170898438,
                                    30.28852519192237
                                ],
                                [
                                    -97.73302048444748,
                                    30.28841865226261
                                ],
                                [
                                    -97.73336112499237,
                                    30.288462657788298
                                ],
                                [
                                    -97.73339867591856,
                                    30.288279687315132
                                ],
                                [
                                    -97.73346304893494,
                                    30.288288951651094
                                ],
                                [
                                    -97.73348987102509,
                                    30.288147670432657
                                ],
                                [
                                    -97.7336212992668,
                                    30.288163883041836
                                ],
                                [
                                    -97.73357570171356,
                                    30.288400123614327
                                ],
                                [
                                    -97.73351401090622,
                                    30.288390859288874
                                ],
                                [
                                    -97.7334576845169,
                                    30.28868036904589
                                ],
                                [
                                    -97.73352473974228,
                                    30.28869426549273
                                ],
                                [
                                    -97.73347645998001,
                                    30.288942085130895
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 5,
                        "link": "duren",
                        "name": "Duren",
                        "address": "2604 Whitis Avenue",
                        "area": "whitis",
                        "gender": "co-ed",
                        "price": 12791,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 4,
                        "location": 3.5,
                        "comfort": 4.2,
                        "food": 3.9,
                        "environment": 4.4
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.74083375930786,
                                    30.291730591919237
                                ],
                                [
                                    -97.74082571268082,
                                    30.291818599979212
                                ],
                                [
                                    -97.74024367332458,
                                    30.291779227962145
                                ],
                                [
                                    -97.74026244878769,
                                    30.291603211692582
                                ],
                                [
                                    -97.74024635553359,
                                    30.29160089568691
                                ],
                                [
                                    -97.74027854204178,
                                    30.291248862191832
                                ],
                                [
                                    -97.7410563826561,
                                    30.291309078537168
                                ],
                                [
                                    -97.74101614952087,
                                    30.291670375832698
                                ],
                                [
                                    -97.74092227220535,
                                    30.29166342782034
                                ],
                                [
                                    -97.74092763662338,
                                    30.29159394766964
                                ],
                                [
                                    -97.74085521697998,
                                    30.291589315657834
                                ],
                                [
                                    -97.74087131023406,
                                    30.291445723183646
                                ],
                                [
                                    -97.7405172586441,
                                    30.29142024707754
                                ],
                                [
                                    -97.74051189422607,
                                    30.291501307392117
                                ],
                                [
                                    -97.7404260635376,
                                    30.291498991384078
                                ],
                                [
                                    -97.74040728807448,
                                    30.29170048388061
                                ],
                                [
                                    -97.74083375930786,
                                    30.291730591919237
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 6,
                        "name": "Jester East",
                        "link": "jestereast",
                        "address": "201 East 21st Street",
                        "area": "jester",
                        "gender": "co-ed",
                        "price": 10544,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.7,
                        "location": 4.7,
                        "comfort": 3.2,
                        "food": 3.7,
                        "environment": 3.2
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73639470338821,
                                    30.282762619862353
                                ],
                                [
                                    -97.73555248975754,
                                    30.2826977658392
                                ],
                                [
                                    -97.7355444431305,
                                    30.282790414430615
                                ],
                                [
                                    -97.73541569709778,
                                    30.28278346578927
                                ],
                                [
                                    -97.73545861244202,
                                    30.28230864079993
                                ],
                                [
                                    -97.73560345172882,
                                    30.28231790569974
                                ],
                                [
                                    -97.73560881614685,
                                    30.282250735156197
                                ],
                                [
                                    -97.73557126522064,
                                    30.282250735156197
                                ],
                                [
                                    -97.7355819940567,
                                    30.28213492376627
                                ],
                                [
                                    -97.73562222719193,
                                    30.282139556224497
                                ],
                                [
                                    -97.73563027381897,
                                    30.282053855712004
                                ],
                                [
                                    -97.73542374372482,
                                    30.282037642093115
                                ],
                                [
                                    -97.73543447256087,
                                    30.28193341162195
                                ],
                                [
                                    -97.73563295602798,
                                    30.281944992790883
                                ],
                                [
                                    -97.73563563823699,
                                    30.281912565514432
                                ],
                                [
                                    -97.73576706647873,
                                    30.28192183045167
                                ],
                                [
                                    -97.73576438426971,
                                    30.281954257725044
                                ],
                                [
                                    -97.73598968982697,
                                    30.281975103823708
                                ],
                                [
                                    -97.73595213890076,
                                    30.282285478546537
                                ],
                                [
                                    -97.73626059293746,
                                    30.282306324574826
                                ],
                                [
                                    -97.73625522851944,
                                    30.28235264906629
                                ],
                                [
                                    -97.73643225431442,
                                    30.28236423018573
                                ],
                                [
                                    -97.73639470338821,
                                    30.282762619862353
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 7,
                        "name": "Jester West",
                        "link": "jesterwest",
                        "address": "201 East 21st Street",
                        "area": "jester",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.4,
                        "location": 4,
                        "comfort": 3,
                        "food": 3.2,
                        "environment": 3.4
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.737255692482,
                                    30.282558792788024
                                ],
                                [
                                    -97.7364644408226,
                                    30.282498571071397
                                ],
                                [
                                    -97.73649394512177,
                                    30.282202094389095
                                ],
                                [
                                    -97.73642420768738,
                                    30.282197461933823
                                ],
                                [
                                    -97.73642420768738,
                                    30.282151137369105
                                ],
                                [
                                    -97.73624449968338,
                                    30.282139556224497
                                ],
                                [
                                    -97.73625791072844,
                                    30.281979736289465
                                ],
                                [
                                    -97.73621499538422,
                                    30.281975103823708
                                ],
                                [
                                    -97.73622304201126,
                                    30.2818755057568
                                ],
                                [
                                    -97.73627132177353,
                                    30.281877821992058
                                ],
                                [
                                    -97.73627936840056,
                                    30.28177822382643
                                ],
                                [
                                    -97.73606210947037,
                                    30.281759693923988
                                ],
                                [
                                    -97.7360674738884,
                                    30.28166472811908
                                ],
                                [
                                    -97.73729592561722,
                                    30.28175506144785
                                ],
                                [
                                    -97.73723691701889,
                                    30.282313273249937
                                ],
                                [
                                    -97.73728251457214,
                                    30.282320221924564
                                ],
                                [
                                    -97.737255692482,
                                    30.282558792788024
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 8,
                        "link": "kinsolving",
                        "name": "Kinsolving",
                        "address": "2605 Whitis Avenue",
                        "area": "whitis",
                        "gender": "female-only",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.5,
                        "location": 3.2,
                        "comfort": 3.3,
                        "food": 3.6,
                        "environment": 3.7
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73936659097672,
                                    30.290862087092567
                                ],
                                [
                                    -97.73937463760376,
                                    30.29078334227472
                                ],
                                [
                                    -97.73921102285385,
                                    30.290771762149113
                                ],
                                [
                                    -97.73928612470627,
                                    30.289947253692027
                                ],
                                [
                                    -97.73927003145218,
                                    30.289947253692027
                                ],
                                [
                                    -97.7392727136612,
                                    30.289889352556795
                                ],
                                [
                                    -97.73946851491928,
                                    30.289900932786573
                                ],
                                [
                                    -97.7394711971283,
                                    30.28986850813975
                                ],
                                [
                                    -97.73958921432495,
                                    30.28987545627926
                                ],
                                [
                                    -97.73958653211594,
                                    30.289912513015004
                                ],
                                [
                                    -97.73987621068954,
                                    30.289933357422683
                                ],
                                [
                                    -97.73987889289856,
                                    30.289891668602873
                                ],
                                [
                                    -97.73999154567719,
                                    30.289898616740725
                                ],
                                [
                                    -97.73996740579605,
                                    30.290137169175694
                                ],
                                [
                                    -97.7400130033493,
                                    30.29014180125607
                                ],
                                [
                                    -97.73996472358702,
                                    30.29063511656373
                                ],
                                [
                                    -97.73991912603378,
                                    30.29063280053521
                                ],
                                [
                                    -97.73988962173462,
                                    30.29089914345555
                                ],
                                [
                                    -97.73936659097672,
                                    30.290862087092567
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 9,
                        "link": "littlefield",
                        "name": "Littlefield",
                        "address": "2503 Whitis Avenue",
                        "area": "whitis",
                        "gender": "female-only",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.7,
                        "location": 3.7,
                        "comfort": 3.4,
                        "food": 3.7,
                        "environment": 3.9
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73991376161575,
                                    30.28917369170338
                                ],
                                [
                                    -97.74005323648453,
                                    30.28918295595489
                                ],
                                [
                                    -97.74003177881241,
                                    30.28941456195867
                                ],
                                [
                                    -97.73955971002579,
                                    30.2893844532091
                                ],
                                [
                                    -97.73955166339874,
                                    30.289470147318195
                                ],
                                [
                                    -97.7394014596939,
                                    30.289463199149985
                                ],
                                [
                                    -97.73943364620209,
                                    30.28914358287987
                                ],
                                [
                                    -97.7395811676979,
                                    30.28915284713423
                                ],
                                [
                                    -97.73957312107086,
                                    30.289245489629796
                                ],
                                [
                                    -97.73990035057068,
                                    30.289266334179274
                                ],
                                [
                                    -97.73991376161575,
                                    30.28917369170338
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 10,
                        "name": "Moore-Hill",
                        "link": "moore-hill",
                        "address": "304 East 21st Street",
                        "area": "Waller Creek",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 3.9,
                        "location": 4.4,
                        "comfort": 3.7,
                        "food": 3.4,
                        "environment": 4
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73596286773682,
                                    30.2836219316225
                                ],
                                [
                                    -97.73567855358124,
                                    30.28360108587372
                                ],
                                [
                                    -97.73568391799927,
                                    30.283545497188655
                                ],
                                [
                                    -97.7355819940567,
                                    30.28353854860082
                                ],
                                [
                                    -97.73557931184769,
                                    30.283570975339885
                                ],
                                [
                                    -97.73545056581497,
                                    30.283564026753854
                                ],
                                [
                                    -97.73542374372482,
                                    30.283839653622778
                                ],
                                [
                                    -97.73544251918793,
                                    30.283841969811675
                                ],
                                [
                                    -97.73543179035185,
                                    30.28396936011672
                                ],
                                [
                                    -97.73500800132751,
                                    30.283939249695912
                                ],
                                [
                                    -97.73501604795456,
                                    30.28383270505578
                                ],
                                [
                                    -97.73529231548308,
                                    30.283853550755325
                                ],
                                [
                                    -97.73532450199127,
                                    30.2835547619717
                                ],
                                [
                                    -97.73501336574554,
                                    30.283531600012473
                                ],
                                [
                                    -97.7350053191185,
                                    30.28362656401052
                                ],
                                [
                                    -97.73487120866776,
                                    30.283614983040053
                                ],
                                [
                                    -97.73489534854889,
                                    30.2833856795437
                                ],
                                [
                                    -97.7359789609909,
                                    30.283464430299844
                                ],
                                [
                                    -97.73596286773682,
                                    30.2836219316225
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 11,
                        "name": "Prather",
                        "link": "prather",
                        "address": "305 East 21st Street",
                        "area": "Waller Creek",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 4,
                        "location": 4,
                        "comfort": 4,
                        "food": 3.5,
                        "environment": 4.5
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73505628108978,
                                    30.282095547862568
                                ],
                                [
                                    -97.73519575595856,
                                    30.282104812782503
                                ],
                                [
                                    -97.73514211177826,
                                    30.282612065814224
                                ],
                                [
                                    -97.73499190807343,
                                    30.28260048472404
                                ],
                                [
                                    -97.73498386144638,
                                    30.282674603677663
                                ],
                                [
                                    -97.73486584424973,
                                    30.28266765502815
                                ],
                                [
                                    -97.7348792552948,
                                    30.282521733274482
                                ],
                                [
                                    -97.73501336574554,
                                    30.282530998154165
                                ],
                                [
                                    -97.73505628108978,
                                    30.282095547862568
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 12,
                        "name": "Roberts",
                        "link": "roberts",
                        "address": "303 East 21st Street",
                        "area": "Waller Creek",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 10,
                        "walk_to_pcl": 10,
                        "walk_to_drag": 5,
                        "walk_to_stadium": 15,
                        "average": 4.5,
                        "location": 5,
                        "comfort": 5,
                        "food": 4,
                        "environment": 4
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.7354907989502,
                                    30.283144794485473
                                ],
                                [
                                    -97.73548811674118,
                                    30.28315637551141
                                ],
                                [
                                    -97.73492753505707,
                                    30.283112367605547
                                ],
                                [
                                    -97.7349328994751,
                                    30.283059094850994
                                ],
                                [
                                    -97.73483097553253,
                                    30.283054462436176
                                ],
                                [
                                    -97.73484975099562,
                                    30.282857584604677
                                ],
                                [
                                    -97.73496240377426,
                                    30.28286221702878
                                ],
                                [
                                    -97.7349516749382,
                                    30.28298960860589
                                ],
                                [
                                    -97.7351126074791,
                                    30.28299424102376
                                ],
                                [
                                    -97.73510992527007,
                                    30.283019719318144
                                ],
                                [
                                    -97.73550152778625,
                                    30.283049830021156
                                ],
                                [
                                    -97.73549616336823,
                                    30.283098470368017
                                ],
                                [
                                    -97.73560881614685,
                                    30.28310773519325
                                ],
                                [
                                    -97.73560345172882,
                                    30.28315637551141
                                ],
                                [
                                    -97.7354907989502,
                                    30.283144794485473
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 13,
                        "name": "San Jacinto",
                        "link": "sanjacinto",
                        "address": "309 East 21st Street",
                        "area": "Waller Creek",
                        "gender": "co-ed",
                        "price": 12791,
                        "walk_to_greg": 5,
                        "walk_to_pcl": 5,
                        "walk_to_drag": 10,
                        "walk_to_stadium": 3,
                        "average": 4.4,
                        "location": 4.5,
                        "comfort": 4.8,
                        "food": 3.9,
                        "environment": 4.2
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.73457616567612,
                                    30.283100786574423
                                ],
                                [
                                    -97.73461908102036,
                                    30.28271166313347
                                ],
                                [
                                    -97.7345010638237,
                                    30.282704714486577
                                ],
                                [
                                    -97.73452788591383,
                                    30.28244993042714
                                ],
                                [
                                    -97.73455202579498,
                                    30.282452246648834
                                ],
                                [
                                    -97.734554708004,
                                    30.282433716873694
                                ],
                                [
                                    -97.73458689451216,
                                    30.28243603309577
                                ],
                                [
                                    -97.73461103439331,
                                    30.282158086055208
                                ],
                                [
                                    -97.7346619963646,
                                    30.2821604022838
                                ],
                                [
                                    -97.73467004299164,
                                    30.282079334250547
                                ],
                                [
                                    -97.73491144180298,
                                    30.282097864092634
                                ],
                                [
                                    -97.73493021726607,
                                    30.281926462919944
                                ],
                                [
                                    -97.73451447486877,
                                    30.28189171940251
                                ],
                                [
                                    -97.73450642824172,
                                    30.281970471357724
                                ],
                                [
                                    -97.73440182209015,
                                    30.28196120642509
                                ],
                                [
                                    -97.73440718650816,
                                    30.281907933045495
                                ],
                                [
                                    -97.73425698280334,
                                    30.281894035637386
                                ],
                                [
                                    -97.7342489361763,
                                    30.28195194149159
                                ],
                                [
                                    -97.73413896560669,
                                    30.281942676557204
                                ],
                                [
                                    -97.73414701223373,
                                    30.281856975872735
                                ],
                                [
                                    -97.73375272750854,
                                    30.28183381351273
                                ],
                                [
                                    -97.73373663425446,
                                    30.28200058238271
                                ],
                                [
                                    -97.73396730422974,
                                    30.28201679600773
                                ],
                                [
                                    -97.73395925760269,
                                    30.282104812782503
                                ],
                                [
                                    -97.7343025803566,
                                    30.28213029130784
                                ],
                                [
                                    -97.73429185152054,
                                    30.282255367608954
                                ],
                                [
                                    -97.73422747850418,
                                    30.282250735156197
                                ],
                                [
                                    -97.73422211408615,
                                    30.282320221924564
                                ],
                                [
                                    -97.73428112268448,
                                    30.282324854374036
                                ],
                                [
                                    -97.73427844047546,
                                    30.28235264906629
                                ],
                                [
                                    -97.73415237665176,
                                    30.282343384169735
                                ],
                                [
                                    -97.73410946130753,
                                    30.282403605981603
                                ],
                                [
                                    -97.73409068584442,
                                    30.282461511535107
                                ],
                                [
                                    -97.73408263921736,
                                    30.282524049494473
                                ],
                                [
                                    -97.73408532142639,
                                    30.282586587413995
                                ],
                                [
                                    -97.73410946130753,
                                    30.282674603677663
                                ],
                                [
                                    -97.73424357175826,
                                    30.282686184759118
                                ],
                                [
                                    -97.73423552513123,
                                    30.28274872257528
                                ],
                                [
                                    -97.73429721593857,
                                    30.28275567121907
                                ],
                                [
                                    -97.7342864871025,
                                    30.28282515762984
                                ],
                                [
                                    -97.7344098687172,
                                    30.28283673869351
                                ],
                                [
                                    -97.73438572883605,
                                    30.283086889335237
                                ],
                                [
                                    -97.73457616567612,
                                    30.283100786574423
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "id": 14,
                        "link": "whitiscourt",
                        "name": "Whitis Court",
                        "address": "2610 Whitis Avenue",
                        "area": "whitis",
                        "gender": "co-ed",
                        "price": 10223,
                        "walk_to_greg": 12,
                        "walk_to_pcl": 12,
                        "walk_to_drag": 3,
                        "walk_to_stadium": 15,
                        "average": 3.3,
                        "location": 3.25,
                        "comfort": 3.75,
                        "food": 2.5,
                        "environment": 4
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -97.74027854204178,
                                    30.291165485652684
                                ],
                                [
                                    -97.74028927087782,
                                    30.29103115663497
                                ],
                                [
                                    -97.74040728807448,
                                    30.29103810469211
                                ],
                                [
                                    -97.74043947458267,
                                    30.290679121095053
                                ],
                                [
                                    -97.74032145738602,
                                    30.290672173012464
                                ],
                                [
                                    -97.74032950401305,
                                    30.290549423472388
                                ],
                                [
                                    -97.74071305990219,
                                    30.290577215834517
                                ],
                                [
                                    -97.7407157421112,
                                    30.290556371563653
                                ],
                                [
                                    -97.74105101823807,
                                    30.290579531864363
                                ],
                                [
                                    -97.74102956056595,
                                    30.290785658299654
                                ],
                                [
                                    -97.74110734462738,
                                    30.2907926063742
                                ],
                                [
                                    -97.74108856916428,
                                    30.291028840615812
                                ],
                                [
                                    -97.74100810289383,
                                    30.291026524596603
                                ],
                                [
                                    -97.74098664522171,
                                    30.291223386034634
                                ],
                                [
                                    -97.74027854204178,
                                    30.291165485652684
                                ]
                            ]
                        ]
                    }
                }
            ]
        };

    $scope.buildMap = function (map) {

        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        map.on('load', function() {
            map.addSource('dorms', {
                type: 'geojson',
                data: $scope.geoData
            });

            map.addLayer({
                id: 'dorms',
                type: 'fill',
                source: 'dorms',
                paint: {
                    'fill-color': '#bf5700',
                    'fill-outline-color': '#994500',
                    'fill-opacity': 0.75
                }
            });

            map.addLayer({
                id: 'dorm_highlight',
                type: 'fill',
                source: 'dorms',
                paint: {
                    'fill-color': '#bf5700',
                    'fill-outline-color': '#994500',
                    'fill-opacity': 1
                }
            });

            map.setFilter("dorm_highlight", ["==", "name", ""]);

            $('[data-toggle="tooltip"]').tooltip();
        });

        // hide our listings when the user moves within the map

        var popup = new mapboxgl.Popup({
            closeOnClick: false,
            closeButton: false
        });

        if ($scope.mobile === true) {
            map.setCenter([-97.737, 30.287]);
            map.on('click', function(e) {
                map.setFilter("dorm_highlight", ["==", "name", ""]);
                var features = map.queryRenderedFeatures(e.point, { layers: ['dorms'] });
                if (!features.length) {
                    return;
                } else {
                    map.setFilter("dorm_highlight", ["==", "name", features[0].properties.name]);
                }

                var feature = features[0];

                map.flyTo({
                    center: map.unproject(e.point),
                    zoom: 17
                });

                var prop = feature.properties;

                function capFirst(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }

                // unholy chain of appends
                var list_parent = $('#mobile-listings');
                if (list_parent.children().length > 0)
                    list_parent.empty();
                // please forgive me
                list_parent.append('<div class="homepage--listitem"><a class="homepage--listitem__name" href="/' + prop.link + '" >' + prop.name + '</a><a class="homepage--listitem__prompt" href="/' + prop.link + '" >' + "<p style='font-size: 1.4rem; font-style: italic;'>Read resident reviews</p>" + '</a><div class="homepage--listitem__address">' + prop.address + '</div><div class="homepage--listitem__rating">Average Rating: <b>' + prop.average.toFixed(1) + '</b> / 5</div><div class="homepage--listitem__details">Beginning Price: $' + prop.price + ' | Gender: ' + capFirst(prop.gender) + ' | Area: ' + capFirst(prop.area) + '</div>');
                });
        } else {
            map.on('mousemove', function (e) {
               var features = map.queryRenderedFeatures(e.point, { layers: ['dorms'] });
                map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
                if (!features.length) {
                    popup.remove();
                    return;
                }

                var feature = features[0];

                var currentListing = $('#dorm-listing-' + feature.properties.link);

                if (currentListing !== null) {
                    $('.homepage--listitem').removeClass('homepage--listitem__active');
                    currentListing.addClass('homepage--listitem__active');
                    currentListing.get(0).scrollIntoView();

                }

                popup.setLngLat(map.unproject(e.point))
                    .setHTML('<a class="popup--content__header" href="' + feature.properties.link + '" target="_blank">' +  feature.properties.name + '</a><p class="popup--content__body">Average ranking: <b style="font-size: 1.5em">' + feature.properties.average.toFixed(1) + '</b> / 5</p>')
                    .addTo(map);
            });


            map.on('click', function (e) {
                var features = map.queryRenderedFeatures(e.point, { layers: ['dorms'] });
                if (!features.length) {
                    map.setFilter("dorm_highlight", ["==", "name", ""]);
                    $('.homepage--listitem').removeClass('homepage--listitem__active');
                    return;
                } else {
                    map.setFilter("dorm_highlight", ["==", "name", features[0].properties.name]);
                }

                var feature = features[0];

                map.flyTo({
                    center: [map.unproject(e.point).lng - 0.001, map.unproject(e.point).lat],
                    zoom: 17
                });

                var currentListing = document.getElementById('#dorm-listing-' + feature.properties.link);

                if (currentListing !== null) {
                    currentListing.addClass('homepage--listitem__active');
                    currentListing.get(0).scrollIntoView();
                }
            });
        }


    };

    // build our comparison list

    if(localStorageService.isSupported) { //if localstorage is supported
        if (localStorageService.get('dt-selected_dorms') === null) { //first session on page
            localStorageService.set('dt-selected_dorms', []); //set an empty array
        }
        $scope.selected_comparisons = localStorageService.get('dt-selected_dorms'); //not first session on page, even if empty - we reflect that
    } else { // no localstorage support, same logic as before
        if (localStorageService.cookie.get('dt-selected_dorms') === undefined) {
            localStorageService.cookie.set('dt-selected_dorms', []);
        }
        $scope.selected_comparisons = localStorageService.cookie.get('dt-selected_dorms'); // [ ... ]
    }


    $scope.$watchCollection('selected_comparisons', function() {
        if (localStorageService.isSupported) {
            localStorageService.set('dt-selected_dorms', $scope.selected_comparisons);
        } else if ($scope.selected_comparisons.length === 0) {
            localStorageService.cookie.set('dt-selected_dorms', $scope.selected_comparisons);
        }

    });

    $scope.compareAction = {
        show: false,
        addToList: function(index) {
            function containsObject(obj, list) {
                var i;
                for (i = 0; i < list.length; i++) {
                    if (list[i] === obj) {
                        return true;
                    }
                }

                return false;
            }
            if(containsObject($scope.geoData.features[index], $scope.selected_comparisons))
                return;
            $scope.selected_comparisons.push($scope.geoData.features[index]);
        },
        removeFromList: function(index) {
            $scope.selected_comparisons.splice(index, 1);
        }
    };

    $scope.credits = false;
    $scope.alphabetical = true;
});

