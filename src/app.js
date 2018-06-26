const express = require('express');
const app = express();
const port = 3001;

const characters = [
	{
		"name": 'Geralt de Rívia',
		"alias": [
			"White Wolf",
			"Gwynbleidd",
			"White One",
			"Butcher of Blaviken",
			"Ravix of Fourhorn",
		],
		"race": "Human",
		"sex": "Male",
		"eye_color": "Dark",
		"hair_color": "White",
		"skin_color": "Milk White",
		"profession": [
			"Witcher"
		],
		"affiliations": [
		],
		"nationality": "Kaedweni / Unknown",
		"titles": [

		],
		"habilities": [
			"Superhuman abilities",
			"Swordsmanship",
			"Alchemy",
			"Signs"
		],
		"weapons": [
			"Silver Sword",
			"Steel Sword",
			"Crossbowl"
		],
		"family": [
			{
				"mother": "Visenna",
				"father": "Korin",
				"sibilings": [],
				"partners": [
					"Yennefer of Vengenberg",
					"Triss Merigold"
				],
				"children": [
					"Cirilla"
				]
			}
		],
		"picture": "./assets/chars/geralt.gif"
	},
	{
		"name": 'Yennefer de Vengenberg',
		"alias": [
			"Janka",
			"Jenny",
			"Yen",
			"Yenna",
			"Horsewoman of War",
		],
		"race": "Quadroon",
		"sex": "Female",
		"eye_color": "Violet",
		"hair_color": "Black",
		"skin_color": "Pale",
		"profession": [
			"Advisor",
			"Mage"
		],
		"affiliations": [
			"Brotherhood of Sorcerers",
			"King Demavend III of Aedirn",
			"Lodge of Sorceresses"
		],
		"nationality": "Aedirn",
		"titles": [

		],
		"habilities": [
			"Magic"
		],
		"weapons": [
		],
		"family": [
			{
				"mother": "",
				"father": "",
				"sibilings": [],
				"partners": [
					"Geralt of Rivia",
					"Istredd",
					"Crach an Craite"
				],
				"children": [
					"Cirilla"
				]
			}
		],
		"picture": './assets/chars/yennefer.gif'
	},
	{
		"name": 'Jaskier',
		"alias": [
			"Julian Alfred Pankratz",
			"Dandelion",
			"The Crimson Avenger"
		],
		"race": "Human",
		"sex": "Male",
		"eye_color": "Cornflower blue",
		"hair_color": "Blond",
		"skin_color": "White",
		"profession": [
			"Bard",
			"Poet"
		],
		"affiliations": [
			"Geralt's company",
			"Redanian Secret Service",
			"University of Oxenfurt"
		],
		"nationality": "Redania",
		"titles": [
		],
		"titles": [
			"Viscount de Lettenhove"
		],
		"habilities": [
			"Lute playing",
			"Singing",
			"Writing poetry and prose"
		],
		"weapons": [
		],
		"family": [
			{
				"mother": "",
				"father": "",
				"sibilings": [],
				"partners": [
					"Anna Henrietta",
					"Vespula"
				],
				"children": [
					
				]
			}
		],
		"picture": './assets/chars/jaskier.gif'
	},
	{
		"name": 'Triss Merigold',
		"alias": [
			"Fourteenth of the Hill",
			"Merigold the Fearless"
		],
		"race": "Human",
		"sex": "Female",
		"eye_color": "Cornflower blue",
		"hair_color": "Chestnut ",
		"skin_color": "White",
		"profession": [
			"Advisor",
			"Mage"
		],
		"affiliations": [
			"King Foltest of Temeria",
			"Lodge of Sorceresses",
			"Temerian Royal Council"
		],
		"nationality": "Temeria",
		"titles": [
		],
		"habilities": [
			"Magic",
			"Alchemy"
		],
		"weapons": [
		],
		"family": [
			{
				"mother": "",
				"father": "",
				"sibilings": [],
				"partners": [
					"Geralt of Rivia"
				],
				"children": [
					
				]
			}
		],
		"picture": './assets/chars/triss.gif'
	}
	// {
	// 	"name": 'Cirilla Fiona Elen Riannon',
	// 	"alias": [
	// 		"Ciri",
	// 		"Lion Cub of Cintra",
	// 		"Falka",
	// 		"Zireael",
	// 		"Swallow",
	// 		"Ashen one",
	// 		"Lady of Space and Time"
	// 	],
	// 	"race": "Human",
	// 	"sex": "Female",
	// 	"eye_color": "Emerald-green",
	// 	"hair_color": "Ashen-gray",
	// 	"skin_color": "White",
	// 	"profession": [
	// 		"Witcher",
	// 		"Empress of Nilfgaard"
	// 	],
	// 	"affiliations": [
	// 		"Geralt's company",
	// 		"Redanian Secret Service",
	// 		"University of Oxenfurt"
	// 	],
	// 	"nationality": "Cintra",
	// 	"titles": [
	// 		"Heiress to the throne of Cintra",
	// 		"Heiress to Inis Ard Skellig and Inis An Skellig",
	// 		"Princess of Brugge",
	// 		"Duchess of Sodden",
	// 		"Suzerain of Attre and Abb Yarra"
	// 	],
	// 	"habilities": [
	// 		"Elder blood gene",
	// 		"Swordsmanship"
	// 	],
	// 	"weapons": [
	// 	],
	// 	"family": [
	// 		{
	// 			"mother": [
	// 				"Pavetta",
	// 				"Yennefer of Vengenberg"
	// 			],
	// 			"father": [
	// 				"Dunny",
	// 				"Geralt of Rivia"
	// 			],
	// 			"sibilings": [],
	// 			"partners": [
	// 				"Mistle"
	// 			],
	// 			"children": [
	// 			]
	// 		}
	// 	],
	// 	"picture": './assets/chars/ciri.gif'
	// }
	
]


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/characters', (req, res) => res.json(characters));

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
	console.log('To shutdown the server: ctrl + c')
})
