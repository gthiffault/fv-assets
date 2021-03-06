

if($('.c-delivery').length) {
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC4UPAbAca1-miG5RxWPxNAUQx3GUBsWu4").done(function(script, textStatus) {
	   	var bounds = new google.maps.LatLngBounds ();
		var geocoder;
		var map;
		var polygons 	= [];
		var mapAction = function(CurrentAnimation) {
            var map;
		    map = new google.maps.Map(document.getElementById('google-map'), {
				styles:[ { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 } ] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#fefefe" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 20 } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 21 } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#dedede" }, { "lightness": 21 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" }, { "lightness": 17 } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 16 } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#f2f2f2" }, { "lightness": 19 } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#e9e9e9" }, { "lightness": 17 } ] } ],
            	streetViewControl: false,
            	mapTypeControl: false,       			       			 
            })

			var colorOne 	= "#82FF9E",
				colorTwo 	= "#F61067",
				colorThree 	= "#FFBA08",
				colorFour 	= "#645DD7"	


		  	var editedPolygons = [
				[
					[
						{lat:45.706961, lng:-73.495410},
						{lat:45.701848, lng:-73.472842},
						{lat:45.704782, lng:-73.461426},
						{lat:45.783020, lng:-73.399648},
						{lat:45.796548, lng:-73.422175},
						{lat:45.794782, lng:-73.423534},
						{lat:45.790771, lng:-73.423907},
						{lat:45.784236, lng:-73.427083},
						{lat:45.788964, lng:-73.438841},
						{lat:45.782949, lng:-73.450729},
						{lat:45.772189, lng:-73.451917},
						{lat:45.809655, lng:-73.514044},
						{lat:45.759105, lng:-73.528207},
						{lat:45.729119, lng:-73.482114},
						{lat:45.717781, lng:-73.480528},
						{lat:45.712920, lng:-73.481298},
					],
					{
		      			"color": colorOne,
		      			"title": "Repentigny",
		      			"latlng": "45.506995, -73.553766",
		      			"deliveryDay" : "Mercredi"
		    		}
			  	],
				[
					[
						{lat:45.352939, lng:-72.666758},
						{lat:45.351896, lng:-72.659887},
						{lat:45.333045, lng:-72.622838},
						{lat:45.324598, lng:-72.620795},
						{lat:45.319009, lng:-72.587855},
						{lat:45.307427, lng:-72.588227},
						{lat:45.307192, lng:-72.593719},
						{lat:45.283786, lng:-72.595488},
						{lat:45.284528, lng:-72.609894},
						{lat:45.286942, lng:-72.610918},
						{lat:45.286954, lng:-72.621552},
						{lat:45.271420, lng:-72.624044},
						{lat:45.267387, lng:-72.633028},
						{lat:45.263347, lng:-72.634472},
						{lat:45.263360, lng:-72.648471},
						{lat:45.251739, lng:-72.648849},
						{lat:45.255320, lng:-72.731386},
						{lat:45.284876, lng:-72.730659},
						{lat:45.286136, lng:-72.777694},
						{lat:45.270979, lng:-72.778045},
						{lat:45.270974, lng:-72.798380},
						{lat:45.299711, lng:-72.797711},
						{lat:45.300197, lng:-72.784322},
						{lat:45.313618, lng:-72.784064},
						{lat:45.313798, lng:-72.774278},
						{lat:45.328704, lng:-72.773764},
						{lat:45.329177, lng:-72.765098},
						{lat:45.341650, lng:-72.763392},
						{lat:45.337895, lng:-72.667396},
					],
					{
						"color": colorOne,
						"title": "Bromont",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.232934, lng:-74.197237},
						{lat:45.260487, lng:-74.179755},
						{lat:45.264114, lng:-74.171174},
						{lat:45.271651, lng:-74.179243},
						{lat:45.273343, lng:-74.177870},
						{lat:45.274309, lng:-74.169458},
						{lat:45.271651, lng:-74.164480},
						{lat:45.291343, lng:-74.156063},
						{lat:45.303518, lng:-74.086658},
						{lat:45.296155, lng:-74.062129},
						{lat:45.302477, lng:-74.031346},
						{lat:45.317943, lng:-73.976561},
						{lat:45.257540, lng:-73.952278},
						{lat:45.219027, lng:-74.079073},
						{lat:45.229179, lng:-74.139508},
					],
					{
						"color": colorOne,
						"title": "Salaberry-de-Valleyfield",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.089151, lng:-74.193221},
						{lat:45.098362, lng:-74.178070},
						{lat:45.092605, lng:-74.171247},
						{lat:45.092998, lng:-74.170474},
						{lat:45.091726, lng:-74.168929},
						{lat:45.091211, lng:-74.169702},
						{lat:45.087786, lng:-74.165325},
						{lat:45.085514, lng:-74.169575},
						{lat:45.081484, lng:-74.164598},
						{lat:45.080242, lng:-74.166272},
						{lat:45.084454, lng:-74.171549},
						{lat:45.079000, lng:-74.174640},
						{lat:45.079273, lng:-74.175283},
						{lat:45.076940, lng:-74.178759},
					],
					{
						"color": colorOne,
						"title": "Huntingdon",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.440690, lng:-74.418854},
						{lat:45.530708, lng:-74.391303},
						{lat:45.518661, lng:-74.374139},
						{lat:45.532123, lng:-74.350062},
						{lat:45.499659, lng:-74.213404},
						{lat:45.432768, lng:-74.232221},
						{lat:45.444475, lng:-74.328268},
						{lat:45.458154, lng:-74.335917},
						{lat:45.499994, lng:-74.211316},
						{lat:45.499994, lng:-74.211316},
						{lat:45.386940, lng:-74.216123},
						{lat:45.390622, lng:-74.060258},
						{lat:45.372088, lng:-74.095671},
						{lat:45.327593, lng:-73.986847},
						{lat:45.421021, lng:-73.991230},
						{lat:45.373778, lng:-73.953749},
						{lat:45.393422, lng:-73.938115},
						{lat:45.420540, lng:-73.929835},
						{lat:45.434871, lng:-73.901504},
						{lat:45.404033, lng:-73.921601},
						{lat:45.414388, lng:-73.896025},
						{lat:45.443791, lng:-73.925668},
						{lat:45.471231, lng:-73.948668},
						{lat:45.474363, lng:-73.925669},
						{lat:45.474597, lng:-73.882415},
						{lat:45.487586, lng:-73.859055},
						{lat:45.508047, lng:-73.857658},
						{lat:45.518388, lng:-73.840122},
						{lat:45.511571, lng:-73.764541},
						{lat:45.483086, lng:-73.796185},
						{lat:45.467517, lng:-73.781085},
						{lat:45.465232, lng:-73.785035},
						{lat:45.455117, lng:-73.780582},
						{lat:45.445606, lng:-73.779046},
						{lat:45.448501, lng:-73.792429},
						{lat:45.443087, lng:-73.803071},
						{lat:45.435252, lng:-73.803063},
						{lat:45.430800, lng:-73.818168},
						{lat:45.425502, lng:-73.826063},
						{lat:45.445496, lng:-73.838590},
						{lat:45.439284, lng:-73.864844},
						{lat:45.442897, lng:-73.868276},
						{lat:45.441934, lng:-73.871537},
						{lat:45.442837, lng:-73.872824},
						{lat:45.441633, lng:-73.877115},
						{lat:45.438502, lng:-73.875828},
						{lat:45.438262, lng:-73.879089},
						{lat:45.439767, lng:-73.880204},
						{lat:45.438924, lng:-73.881749},
						{lat:45.436997, lng:-73.881149},
						{lat:45.436757, lng:-73.883380},
						{lat:45.437600, lng:-73.886726},
						{lat:45.435472, lng:-73.900887},
					],
					{
						"color": colorOne,
						"title": "Ouest de l’île",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.519547, lng:-73.594805},
						{lat:45.517973, lng:-73.578928},
						{lat:45.495869, lng:-73.582635},
					],
					{
						"color": colorOne,
						"title": "Plateau Mont-Royal",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.529806, lng:-73.678102},
						{lat:45.552089, lng:-73.624692},
						{lat:45.574423, lng:-73.589333},
						{lat:45.599400, lng:-73.570080},
						{lat:45.628951, lng:-73.566951},
						{lat:45.629505, lng:-73.585846},
						{lat:45.621108, lng:-73.614341},
						{lat:45.559950, lng:-73.636338},
						{lat:45.562071, lng:-73.657592},
						{lat:45.557985, lng:-73.668239},
						{lat:45.548848, lng:-73.664808},
					],
					{
						"color": colorOne,
						"title": "Ahuntsic / Saint-Léonard / Anjou",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],

	// Mercredi

				[
					[
						{lat:45.521438, lng:-73.892436},
						{lat:45.520261, lng:-73.863612},
						{lat:45.512095, lng:-73.853310},
						{lat:45.512117, lng:-73.765497},
						{lat:45.553174, lng:-73.679322},
						{lat:45.626686, lng:-73.634143},
						{lat:45.697910, lng:-73.525148},
						{lat:45.688727, lng:-73.600711},
						{lat:45.687748, lng:-73.649885},
						{lat:45.693435, lng:-73.686465},
						{lat:45.680183, lng:-73.714274},
						{lat:45.644077, lng:-73.774771},
						{lat:45.630759, lng:-73.787402},
						{lat:45.609112, lng:-73.800448},
						{lat:45.608139, lng:-73.824368},
						{lat:45.579598, lng:-73.834584},
						{lat:45.557699, lng:-73.881688},
						{lat:45.536289, lng:-73.881331},
						{lat:45.524226, lng:-73.894675},
					],
					{
						"color": colorTwo,
						"title": "Laval",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:46.884666, lng:-71.143177},
						{lat:46.868708, lng:-71.154936},
						{lat:46.852867, lng:-71.181114},
						{lat:46.838721, lng:-71.203772},
						{lat:46.845119, lng:-71.203773},
						{lat:46.840247, lng:-71.196736},
						{lat:46.835255, lng:-71.191756},
						{lat:46.825214, lng:-71.196221},
						{lat:46.806242, lng:-71.204460},
						{lat:46.789437, lng:-71.225832},
						{lat:46.815758, lng:-71.200353},
						{lat:46.772978, lng:-71.242076},
						{lat:46.748651, lng:-71.289265},
						{lat:46.734762, lng:-71.367551},
						{lat:46.749754, lng:-71.372014},
						{lat:46.754017, lng:-71.367637},
						{lat:46.759044, lng:-71.377078},
						{lat:46.756075, lng:-71.383387},
						{lat:46.756045, lng:-71.389609},
						{lat:46.763983, lng:-71.400083},
						{lat:46.755045, lng:-71.421236},
						{lat:46.842180, lng:-71.533704},
						{lat:46.952292, lng:-71.409534},
						{lat:46.933935, lng:-71.197817},
					],
					{
						"color": colorTwo,
						"title": "Québec",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.516626, lng:-73.626595},
						{lat:45.527812, lng:-73.617324},
						{lat:45.515778, lng:-73.590374},
						{lat:45.514758, lng:-73.597241},
						{lat:45.513255, lng:-73.599044},
						{lat:45.513194, lng:-73.596985},
						{lat:45.511526, lng:-73.596663},
						{lat:45.510660, lng:-73.593996},
						{lat:45.510111, lng:-73.594972},
						{lat:45.508036, lng:-73.591669},
						{lat:45.504037, lng:-73.595703},
						{lat:45.506473, lng:-73.602568},
						{lat:45.505751, lng:-73.603212},
						{lat:45.510563, lng:-73.613168},
						{lat:45.505029, lng:-73.618103},
						{lat:45.505240, lng:-73.618918},
						{lat:45.508368, lng:-73.616043},
						{lat:45.509240, lng:-73.617888},
						{lat:45.510383, lng:-73.616944},
						{lat:45.511195, lng:-73.618833},
						{lat:45.512518, lng:-73.617588},
					],
					{
						"color": colorTwo,
						"title": "Outremont",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:46.001059, lng:-74.820760},
						{lat:45.981609, lng:-74.788600},
						{lat:45.961684, lng:-74.800187},
						{lat:45.959059, lng:-74.774526},
						{lat:45.972839, lng:-74.763879},
						{lat:45.970983, lng:-74.705087},
						{lat:45.958701, lng:-74.705002},
						{lat:45.920513, lng:-74.442769},
						{lat:46.019449, lng:-74.411213},
						{lat:46.005589, lng:-74.279184},
						{lat:45.957351, lng:-74.256499},
						{lat:46.028540, lng:-74.126286},
						{lat:46.052502, lng:-74.164060},
						{lat:46.143880, lng:-74.022200},
						{lat:46.266756, lng:-74.185663},
						{lat:46.196225, lng:-74.260844},
						{lat:46.354867, lng:-74.332238},
						{lat:46.434987, lng:-74.478523},
						{lat:46.355401, lng:-74.643277},
						{lat:46.330068, lng:-74.581525},
						{lat:46.310778, lng:-75.035427},
						{lat:46.216024, lng:-75.030668},
						{lat:46.215567, lng:-75.075307},
						{lat:46.102943, lng:-75.089063},
						{lat:46.107560, lng:-74.928657},
					],
					{
						"color": colorTwo,
						"title": "Laurentides",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.406456, lng:-75.898160},
						{lat:45.477069, lng:-75.908267},
						{lat:45.476733, lng:-75.841085},
						{lat:45.467913, lng:-75.822160},
						{lat:45.473444, lng:-75.799096},
						{lat:45.456457, lng:-75.789270},
						{lat:45.459095, lng:-75.777211},
						{lat:45.471009, lng:-75.780265},
						{lat:45.482258, lng:-75.796762},
						{lat:45.482896, lng:-75.794558},
						{lat:45.480690, lng:-75.790098},
						{lat:45.484885, lng:-75.791849},
						{lat:45.484048, lng:-75.784372},
						{lat:45.481818, lng:-75.784501},
						{lat:45.483163, lng:-75.772621},
						{lat:45.491381, lng:-75.776653},
						{lat:45.477893, lng:-75.761978},
						{lat:45.479984, lng:-75.751441},
						{lat:45.480300, lng:-75.745391},
						{lat:45.481662, lng:-75.749682},
						{lat:45.507874, lng:-75.762214},
						{lat:45.517159, lng:-75.767836},
						{lat:45.523165, lng:-75.720753},
						{lat:45.532479, lng:-75.721402},
						{lat:45.545871, lng:-75.557954},
						{lat:45.528973, lng:-75.530751},
						{lat:45.535499, lng:-75.435563},
						{lat:45.582859, lng:-75.431337},
						{lat:45.581248, lng:-75.386004},
						{lat:45.531603, lng:-75.376263},
						{lat:45.460157, lng:-75.680583},
						{lat:45.423426, lng:-75.709594},
						{lat:45.373765, lng:-75.828893},
					],
					{
						"color": colorTwo,
						"title": "Gatineau",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[ 
					[
						{lat: 45.655161, lng: -73.880429},
						{lat: 45.630411, lng: -73.844400},
						{lat: 45.629801, lng: -73.840786},
						{lat: 45.628961, lng: -73.839092},
						{lat: 45.631796, lng: -73.822783},
						{lat: 45.640358, lng: -73.812030},
						{lat: 45.642934, lng: -73.813231},
						{lat: 45.661159, lng: -73.840180},									

						{lat: 45.659117, lng: -73.842720},
						{lat: 45.653311, lng: -73.834575},
						{lat: 45.650838, lng: -73.838475},
						{lat: 45.651756, lng: -73.840264},
						{lat: 45.650060, lng: -73.840185},

						{lat: 45.650840, lng: -73.841577},
						{lat: 45.649054, lng: -73.842535},
						{lat: 45.647074, lng: -73.845209},
						{lat: 45.663057, lng: -73.869912},
						{lat: 45.655161, lng: -73.880429}										
						
					],
			   		{
			      		"color": colorTwo,
			      		"title": "Sainte-Thérèse",
		      		"latlng": "45.646857, -73.842443",
		      		"deliveryDay" : "Mercredi"						      		
			    	}
			  	],
				[
						[ // Villeray
						{lat: 45.542942, lng: -73.640782},
						{lat: 45.535696, lng: -73.616855},
						{lat: 45.541586, lng: -73.612723},
						{lat: 45.546141, lng: -73.608688},
						{lat: 45.551446, lng: -73.620606},
						{lat: 45.552013, lng: -73.620081},
						{lat: 45.553607, lng: -73.623601},
						{lat: 45.549880, lng: -73.633108},
						{lat: 45.542942, lng: -73.640782}
						],
						{
							"color": colorTwo,
							"title": "Villeray",
							"latlng": "45.544899, -73.624311",
							"deliveryDay" : "Mercredi"
						}
					],
				    [ 
				    	[
							{lat: 45.512910, lng: -73.553251},
							{lat: 45.501342, lng: -73.561634},
							{lat: 45.498109, lng: -73.552537},
							{lat: 45.515447, lng: -73.544638}
						],
						{
							"color": colorTwo,
							"title": "Vieux-Montréal",
							"latlng": "45.506995, -73.553766",
							"deliveryDay" : "Mercredi"
						}
					],
				    [ 
				    	[
							{lat: 45.477130, lng: -75.736714},
							{lat: 45.475265, lng: -75.730774},
							{lat: 45.472680, lng: -75.727497},
							{lat: 45.463778, lng: -75.723810},

							{lat: 45.459871, lng: -75.719316},
							{lat: 45.458019, lng: -75.714081},
							{lat: 45.459403, lng: -75.707450},
							{lat: 45.457718, lng: -75.700391},								
						],
						{
						"color": colorTwo,
						"title": "Vieux-Montréal",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.489421, lng:-73.685110},
						{lat:45.530107, lng:-73.648713},
						{lat:45.523151, lng:-73.621500},
						{lat:45.513951, lng:-73.629276},
						{lat:45.515524, lng:-73.634720},
						{lat:45.506941, lng:-73.641691},
						{lat:45.502000, lng:-73.645694},
						{lat:45.504583, lng:-73.652179},
						{lat:45.505146, lng:-73.660026},
						{lat:45.501947, lng:-73.661948},
						{lat:45.499738, lng:-73.662017},
						{lat:45.499187, lng:-73.663589},
						{lat:45.494363, lng:-73.655946},
						{lat:45.486328, lng:-73.667073},
						{lat:45.491627, lng:-73.675225},
						{lat:45.484063, lng:-73.677434},
					],
					{
						"color": "#645DD7",
						"title": "Ville Mont-Royal",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.473979, lng:-73.597068},
						{lat:45.477019, lng:-73.604877},
						{lat:45.476778, lng:-73.605521},
						{lat:45.480479, lng:-73.613974},
						{lat:45.482675, lng:-73.612344},
						{lat:45.484661, lng:-73.617022},
						{lat:45.486737, lng:-73.615134},
						{lat:45.488211, lng:-73.618095},
						{lat:45.488663, lng:-73.617881},
						{lat:45.492965, lng:-73.614362},
						{lat:45.491732, lng:-73.611229},
						{lat:45.493989, lng:-73.609211},
						{lat:45.493505, lng:-73.608073},
						{lat:45.494225, lng:-73.607090},
						{lat:45.495304, lng:-73.606747},
						{lat:45.495321, lng:-73.602531},
						{lat:45.494525, lng:-73.602279},
						{lat:45.494238, lng:-73.600520},
						{lat:45.493805, lng:-73.600932},
						{lat:45.492044, lng:-73.597185},
						{lat:45.492534, lng:-73.595703},
						 {lat:45.488347, lng:-73.582406},
						{lat:45.488174, lng:-73.583147},
						{lat:45.485605, lng:-73.580637},
						{lat:45.482287, lng:-73.585208},
						{lat:45.482749, lng:-73.586155},
					],
					{
						"color": "#645DD7",
						"title": "Westmount",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.432039, lng:-73.665085},
						{lat:45.457270, lng:-73.613718},
						{lat:45.454535, lng:-73.607341},
						{lat:45.448675, lng:-73.605006},
						{lat:45.439460, lng:-73.611961},
						{lat:45.434938, lng:-73.583893},
						{lat:45.415970, lng:-73.611191},
						{lat:45.414823, lng:-73.632738},
						{lat:45.428076, lng:-73.665605},
					],
					{
						"color": "#645DD7",
						"title": "LaSalle",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.435067, lng:-73.583924},
						{lat:45.437204, lng:-73.598385},
						{lat:45.451085, lng:-73.585339},
						{lat:45.466888, lng:-73.579546},
						{lat:45.466587, lng:-73.571306},
						{lat:45.474954, lng:-73.568429},
						{lat:45.470980, lng:-73.561777},
						{lat:45.475141, lng:-73.538638},
						{lat:45.466951, lng:-73.531949},
						{lat:45.448657, lng:-73.547842},
						{lat:45.445470, lng:-73.559170},
					],
					{
						"color": "#645DD7",
						"title": "Verdun",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.315906, lng:-73.813908},
						{lat:45.316511, lng:-73.812703},
						{lat:45.315180, lng:-73.809260},
						{lat:45.318086, lng:-73.807711},
						{lat:45.322081, lng:-73.808229},
						{lat:45.329224, lng:-73.801516},
						{lat:45.329830, lng:-73.796178},
						{lat:45.331162, lng:-73.796178 },
						{lat:45.332009, lng:-73.795318},
						{lat:45.332735, lng:-73.795662},
						{lat:45.336609, lng:-73.791874},
						{lat:45.334915, lng:-73.789635},
						{lat:45.335762, lng:-73.786708},
						{lat:45.336246, lng:-73.787569},
						{lat:45.342541, lng:-73.781024},
						{lat:45.343994, lng:-73.783779},
						{lat:45.348593, lng:-73.774305},
						{lat:45.353314, lng:-73.776543},
						{lat:45.356460, lng:-73.768618},
						{lat:45.359608, lng:-73.771718},
						{lat:45.365540, lng:-73.772233},
						{lat:45.367719, lng:-73.769993},
						{lat:45.370745, lng:-73.772576},
						{lat:45.372077, lng:-73.776367},
						{lat:45.379945, lng:-73.769299},
						{lat:45.383577, lng:-73.767057},
						{lat:45.384414, lng:-73.772107},
						{lat:45.391856, lng:-73.766248},
						{lat:45.396938, lng:-73.764438},
						{lat:45.399355, lng:-73.761683},
						{lat:45.402137, lng:-73.755221},
						{lat:45.343078, lng:-73.675304},
						{lat:45.342170, lng:-73.675735},
						{lat:45.344048, lng:-73.683571},
						{lat:45.336604, lng:-73.687965},
						{lat:45.343383, lng:-73.725250},
						{lat:45.346166, lng:-73.750537},
						{lat:45.328419, lng:-73.763683},
						{lat:45.326469, lng:-73.770445},
						{lat:45.322447, lng:-73.773914},
						{lat:45.318790, lng:-73.790902},
						{lat:45.311963, lng:-73.796101},
						{lat:45.308550, lng:-73.795754},
						{lat:45.304765, lng:-73.798190},
					],
					{
						"color": "#645DD7",
						"title": "Châteauguay",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.432479, lng:-73.493790},
						{lat:45.477398, lng:-73.504274},
						{lat:45.476195, lng:-73.472157},
						{lat:45.485346, lng:-73.459271},
						{lat:45.432791, lng:-73.380171},
						{lat:45.428813, lng:-73.376745},
						{lat:45.427489, lng:-73.377949},
						{lat:45.429783, lng:-73.383438},
						{lat:45.427498, lng:-73.387047},
						{lat:45.422433, lng:-73.380876},
						{lat:45.419305, lng:-73.384314},
						{lat:45.415811, lng:-73.383805},
						{lat:45.413044, lng:-73.386899},
						{lat:45.414612, lng:-73.388956},
						{lat:45.417054, lng:-73.438028},
						{lat:45.421992, lng:-73.437681},
						{lat:45.422359, lng:-73.455526},
						{lat:45.421759, lng:-73.464105},
						{lat:45.430312, lng:-73.480062},
						{lat:45.432239, lng:-73.483837},
					],
					{
						"color": "#645DD7",
						"title": "Brossard",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.517924, lng:-73.523772},
						{lat:45.533561, lng:-73.526969},
						{lat:45.590696, lng:-73.490044},
						{lat:45.604683, lng:-73.462167},
						{lat:45.545193, lng:-73.419951},
						{lat:45.550959, lng:-73.411364},
						{lat:45.524002, lng:-73.391532},
						{lat:45.501962, lng:-73.383942},
						{lat:45.495404, lng:-73.378451},
						{lat:45.502381, lng:-73.371239},
						{lat:45.508063, lng:-73.332303},
						{lat:45.480122, lng:-73.335422},
						{lat:45.481928, lng:-73.338791},
						{lat:45.445205, lng:-73.363262},
						{lat:45.447001, lng:-73.366608},
						{lat:45.442062, lng:-73.375875},
						{lat:45.438690, lng:-73.373814},
						{lat:45.437966, lng:-73.379478},
						{lat:45.432667, lng:-73.381191},
						{lat:45.482215, lng:-73.453941},
						{lat:45.475114, lng:-73.471705},
						{lat:45.495031, lng:-73.499603},
						{lat:45.502673, lng:-73.493166},
					],
					{
						"color": "#645DD7",
						"title": "Longueuil",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.479547, lng:-73.335515},
						{lat:45.508188, lng:-73.371512},
						{lat:45.498485, lng:-73.376935},
						{lat:45.499698, lng:-73.379059},
						{lat:45.497733, lng:-73.380418},
						{lat:45.503984, lng:-73.387467},
						{lat:45.505233, lng:-73.394516},
						{lat:45.507099, lng:-73.393546},
						{lat:45.508592, lng:-73.394995},
						{lat:45.527588, lng:-73.377009},
						{lat:45.537259, lng:-73.389967},
						{lat:45.541618, lng:-73.387069},
						{lat:45.532959, lng:-73.375135},
						{lat:45.538898, lng:-73.371892},
						{lat:45.556472, lng:-73.371101},
						{lat:45.568827, lng:-73.366435},
						{lat:45.573825, lng:-73.361670},
						{lat:45.572394, lng:-73.355380},
						{lat:45.567036, lng:-73.349095},
						{lat:45.570844, lng:-73.348581},
						{lat:45.563341, lng:-73.338388},
						{lat:45.565957, lng:-73.334304},
						{lat:45.557499, lng:-73.322585},
						{lat:45.558455, lng:-73.320641},
						{lat:45.557369, lng:-73.318647},
						{lat:45.557130, lng:-73.314314},
						{lat:45.568134, lng:-73.311588},
						{lat:45.553730, lng:-73.291632},
						{lat:45.541457, lng:-73.293424},
						{lat:45.515843, lng:-73.316662},
						{lat:45.508029, lng:-73.332364},
						{lat:45.504147, lng:-73.327060},
					],
					{
						"color": "#645DD7",
						"title": "Saint-Bruno",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.593618, lng:-73.469868},
						{lat:45.590012, lng:-73.490980},
						{lat:45.612833, lng:-73.491334},
						{lat:45.635418, lng:-73.474682},
						{lat:45.643693, lng:-73.457506},
						{lat:45.645253, lng:-73.444796},
						{lat:45.591001, lng:-73.364582},
						{lat:45.572822, lng:-73.362892},
						{lat:45.533929, lng:-73.375617},
						{lat:45.541629, lng:-73.386945},
						{lat:45.548544, lng:-73.400321},
					],
					{
						"color": "#645DD7",
						"title": "Boucherville",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.628505, lng:-73.184749 },
						{lat:45.589300, lng:-73.130857},
						{lat:45.590024, lng:-73.135664},
						{lat:45.565034, lng:-73.141197},
						{lat:45.557094, lng:-73.129194},
						{lat:45.543397, lng:-73.132305},
						{lat:45.540108, lng:-73.140526},
						{lat:45.534931, lng:-73.147539},
						{lat:45.532276, lng:-73.142559},
						{lat:45.527966, lng:-73.150260},
						{lat:45.526408, lng:-73.150090},
						{lat:45.520181, lng:-73.161040},
						{lat:45.527732, lng:-73.173009},
						{lat:45.510958, lng:-73.196440},
						{lat:45.522660, lng:-73.212973},
						{lat:45.536055, lng:-73.196097},
						{lat:45.545707, lng:-73.185244},
						{lat:45.551499, lng:-73.197649},
						{lat:45.553912, lng:-73.198855},
						{lat:45.554359, lng:-73.200058},
						{lat:45.548871, lng:-73.204796},
						{lat:45.548087, lng:-73.210136},
					],
					{
						"color": "#645DD7",
						"title": "Saint-Hilaire",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.562851, lng:-72.979466},
						{lat:45.565004, lng:-73.001354},
						{lat:45.600906, lng:-72.996704},
						{lat:45.600910, lng:-73.041886},
						{lat:45.631632, lng:-73.044053},
						{lat:45.632202, lng:-73.033134},
						{lat:45.637614, lng:-73.033541},
						{lat:45.717518, lng:-72.996223},
						{lat:45.687064, lng:-72.954998},
						{lat:45.698278, lng:-72.938864},
						{lat:45.684963, lng:-72.918792},
						{lat:45.711935, lng:-72.911386},
						{lat:45.655764, lng:-72.822496},
						{lat:45.571640, lng:-72.913893},
					],
					{
						"color": "#645DD7",
						"title": "Saint-Hyacinthe",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.253355, lng:-73.192321},
						{lat:45.259901, lng:-73.208434},
						{lat:45.259222, lng:-73.244468},
						{lat:45.233596, lng:-73.246836},
						{lat:45.259291, lng:-73.272194},
						{lat:45.233860, lng:-73.270861},
						{lat:45.259064, lng:-73.296571},
						{lat:45.238523, lng:-73.296591},
						{lat:45.272369, lng:-73.344634},
						{lat:45.255452, lng:-73.361801},
						{lat:45.251586, lng:-73.357338},
						{lat:45.244577, lng:-73.366604},
						{lat:45.257865, lng:-73.385146},
						{lat:45.255680, lng:-73.409863},
						{lat:45.265300, lng:-73.401115},
						{lat:45.267651, lng:-73.389267},
						{lat:45.281837, lng:-73.378093},
						{lat:45.294886, lng:-73.381856},
						{lat:45.311551, lng:-73.369469},
						{lat:45.329449, lng:-73.409656},
						{lat:45.347514, lng:-73.404197},
						{lat:45.358846, lng:-73.387362},
						{lat:45.374776, lng:-73.396275},
						{lat:45.398528, lng:-73.385065},
						{lat:45.402730, lng:-73.380693},
						{lat:45.410615, lng:-73.391285},
						{lat:45.410607, lng:-73.384113},
						{lat:45.385853, lng:-73.348923},
						{lat:45.389212, lng:-73.346637},
						{lat:45.383003, lng:-73.326268},
						{lat:45.391544, lng:-73.322907},
						{lat:45.404131, lng:-73.306452},
						{lat:45.382539, lng:-73.275640},
						{lat:45.385070, lng:-73.253126},
						{lat:45.361779, lng:-73.220036},
						{lat:45.373316, lng:-73.220927},
						{lat:45.375449, lng:-73.217273},
						{lat:45.369892, lng:-73.209678},
						{lat:45.324169, lng:-73.208582},
						{lat:45.299324, lng:-73.169759},
						{lat:45.279664, lng:-73.169214},
					],
					{
						"color": "#645DD7",
						"title": "Saint-Jean-sur-Richelieu",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],




				[
					[
						{lat:45.754604, lng:-72.385760},
						{lat:45.828400, lng:-72.513090},
						{lat:45.831742, lng:-72.508284},
						{lat:45.881485, lng:-72.591959},
						{lat:45.943587, lng:-72.519458},
						{lat:45.973806, lng:-72.553732},
						{lat:46.008225, lng:-72.652727},
						{lat:46.028502, lng:-72.617994},
						{lat:46.016330, lng:-72.600816},
						{lat:46.020198, lng:-72.594792},
						{lat:46.016035, lng:-72.587050},
						{lat:46.031057, lng:-72.566078},
						{lat:46.020794, lng:-72.551671},
						{lat:46.028176, lng:-72.540325},
						{lat:46.022448, lng:-72.533811},
						{lat:46.015122, lng:-72.544641},
						{lat:45.987190, lng:-72.507274},
						{lat:45.991951, lng:-72.499712},
						{lat:45.979999, lng:-72.477087},
						{lat:45.957066, lng:-72.503338},
						{lat:45.937665, lng:-72.469043},
						{lat:45.926123, lng:-72.482750},
						{lat:45.908165, lng:-72.451519},
						{lat:45.897664, lng:-72.467347},
						{lat:45.864191, lng:-72.409048},
						{lat:45.874933, lng:-72.395630},
						{lat:45.851436, lng:-72.353458},
						{lat:45.844281, lng:-72.364469},
						{lat:45.838523, lng:-72.352816},
						{lat:45.815112, lng:-72.340583},
						{lat:45.843625, lng:-72.309785},
						{lat:45.833563, lng:-72.268959},
						{lat:45.830237, lng:-72.293345},
					],
					{
						"color": colorThree,
						"title": "Drummondville",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.307548, lng:-72.037313},
						{lat:45.296160, lng:-72.043658},
						{lat:45.302119, lng:-72.103268},
						{lat:45.390313, lng:-72.104288},
						{lat:45.397768, lng:-72.084768},
						{lat:45.399636, lng:-72.068247},
						{lat:45.437519, lng:-72.067869},
						{lat:45.444354, lng:-72.061302},
						{lat:45.441881, lng:-71.978903},
						{lat:45.450906, lng:-71.978198},
						{lat:45.449252, lng:-71.996592},
						{lat:45.467192, lng:-72.029282},
						{lat:45.501915, lng:-71.980429},
						{lat:45.498126, lng:-71.975707},
						{lat:45.509526, lng:-71.959305},
						{lat:45.523945, lng:-71.919666},
						{lat:45.495614, lng:-71.877697},
						{lat:45.485114, lng:-71.890142},
						{lat:45.480439, lng:-71.883832},
						{lat:45.467077, lng:-71.893962},
						{lat:45.452448, lng:-71.869586},
						{lat:45.452716, lng:-71.822765},
						{lat:45.409411, lng:-71.819419},
						{lat:45.409030, lng:-71.801862},
						{lat:45.378718, lng:-71.818690},
						{lat:45.368846, lng:-71.818646},
						{lat:45.366464, lng:-71.809633},
						{lat:45.357479, lng:-71.811608},
						{lat:45.357811, lng:-71.817917},
						{lat:45.317569, lng:-71.815599},
						{lat:45.319048, lng:-71.824225},
						{lat:45.337482, lng:-71.843623},
						{lat:45.343787, lng:-71.857313},
						{lat:45.350814, lng:-71.856798},
						{lat:45.351870, lng:-71.872590},
						{lat:45.359229, lng:-71.872590},
						{lat:45.360350, lng:-71.929456},
						{lat:45.308416, lng:-71.950999},
					],
					{
						"color": colorThree,
						"title": "Sherbrooke",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.296606, lng:-72.047694},
						{lat:45.309427, lng:-72.232400},
						{lat:45.229913, lng:-72.228392},
						{lat:45.221189, lng:-72.201982},
						{lat:45.164796, lng:-72.249822},
						{lat:45.159852, lng:-72.104409},
						{lat:45.273209, lng:-72.102952},
						{lat:45.281296, lng:-72.050326},
					],
					{
						"color": colorThree,
						"title": "Magog",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
				[
					[
						{lat:45.338501, lng:-72.668152},
						{lat:45.341821, lng:-72.756472},
						{lat:45.355573, lng:-72.756640},
						{lat:45.355351, lng:-72.816172},
						{lat:45.368542, lng:-72.811880},
						{lat:45.368573, lng:-72.845697},
						{lat:45.455787, lng:-72.820095},
						{lat:45.457613, lng:-72.699905},
						{lat:45.449426, lng:-72.699238},
						{lat:45.449159, lng:-72.662354},
					],
					{
						"color": colorThree,
						"title": "Granby",
						"latlng": "45.506995, -73.553766",
						"deliveryDay" : "Mercredi"
					}
				],
			];

			var multiply = function(prout,prout2) {

				var prev_infowindow =false; 
				var infowindow = new google.maps.InfoWindow();
				var title = editedPolygons[i][1].title;
				poly.addListener('click', (function(content) {
  					if( prev_infowindow ) {
       					prev_infowindow.close();
    				}
    				return function() {
      					// set the content

	    				infowindow.setContent(content);
       					infowindow.setPosition(new google.maps.LatLng(prout,prout2));
      					// open it
      					 map.setZoom(11);
      					infowindow.open(map);
      					        map.setCenter(new google.maps.LatLng(prout,prout2));
    				}
  				})('<h5>' + editedPolygons[i][1].title + "</h5>" + '<p>' + editedPolygons[i][1].deliveryDay + "</p>"));
			}

			for (var i = 0; i < editedPolygons.length; i++) {

			    var poly = new google.maps.Polygon({
					fillColor: editedPolygons[i][1].color,
					strokeWeight: 0,
					path: editedPolygons[i][0],
					map: map
			    });

				for (var pathidx = 0; pathidx < poly.getPath().getLength(); pathidx++) {
  					bounds.extend(poly.getPath().getAt(pathidx));
				}

			    if(i == 0 ) { // Villeray
					multiply(45.545496, -73.624133);
				} else if (i == 1) {
					multiply(45.506607, -73.553869);
				} else if (i == 2) {
					multiply(45.646857, -73.842443);
			    }		
			}

			map.fitBounds(bounds);
			google.maps.event.addListener(map, "click", function(event) {
				return function() {
					infowindow.close();
				}
			});

	        /* ==================================================================
	           #CLOSE INFOWINDOW
	        ================================================================== */

	            $(document).on('click','.marker',function(){
	                var mid=$(this).data('marker');
	                console.log(infowindow);
	                infowindow.close();
	                google.maps.event.trigger(marker001[mid], "click");
	            });

		}

	    $(document).ready(function() {
	    	if($('#google-map').length) {
	        	mapAction();
	    	}
	    }); 

	});

}