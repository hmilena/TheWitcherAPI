const express = require('express');
const app = express();
const port = 3001;
const characters = [
	{
		name: 'Geralt de Rívia',
		alias: [
			"White Wolf",
			"Gwynbleidd",
			"White One",
			"Butcher of Blaviken",
			"Ravix of Fourhorn",
		],
		race: "Human",
		sex: "Male",
		"Eye color": "Dark",
		"Hair Color": "White",
		"Skin Color": "Milk White",
		profession: [
			"Witcher"
		],
		affiliations: [
		],
		nationality: "Kaedweni / Unknown",
		titles: [

		],
		habilities: [
			"Superhuman abilities",
			"Swordsmanship",
			"Alchemy",
			"Signs"
		],
		weapons: [
			"Silver Sword",
			"Steel Sword",
			"Crossbowl"
		],
		family: [
			{
				mother: "Visenna",
				father: "Korin",
				sibilings: [],
				partners: [
					"Yennefer of Vengenberg",
					"Triss Merigold"
				],
				children: [
					"Cirilla"
				]
			}
		],
		picture: "./assets/chars/geralt.gif"
	},
	{
		name: 'Yennefer de Vengenberg',
		alias: [
			"Janka",
			"Jenny",
			"Yen",
			"Yenna",
			"Horsewoman of War",
		],
		race: "Quadroon",
		sex: "Female",
		"Eye color": "Violet",
		"Hair Color": "Black",
		"Skin Color": "Pale",
		profession: [
			"Advisor",
			"Mage"
		],
		affiliations: [
			"Brotherhood of Sorcerers",
			"King Demavend III of Aedirn",
			"Lodge of Sorceresses"
		],
		nationality: "Aedirn",
		titles: [

		],
		habilities: [
			"Magic"
		],
		weapons: [
		],
		family: [
			{
				mother: "",
				father: "",
				sibilings: [],
				partners: [
					"Geralt of Rivia",
					"Istredd",
					"Crach an Craite"
				],
				children: [
					"Cirilla"
				]
			}
		],
		picture: './assets/chars/yennefer.gif'
	},
	{
		name: 'Jaskier',
		alias: [
			"Julian Alfred Pankratz",
			"Dandelion",
			"The Crimson Avenger",
			"Viscount de Lettenhove"
		],
		race: "Human",
		sex: "Male",
		"Eye color": "Cornflower blue",
		"Hair Color": "Blond",
		"Skin Color": "White",
		profession: [
			"Bard",
			"Poet"
		],
		affiliations: [
			"Geralt's company",
			"Redanian Secret Service",
			"University of Oxenfurt"
		],
		nationality: "Redania",
		titles: [
		],
		habilities: [
			"Lute playing",
			"Singing",
			"Writing poetry and prose"
		],
		weapons: [
		],
		family: [
			{
				mother: "",
				father: "",
				sibilings: [],
				partners: [
					"Anna Henrietta",
					"Vespula"
				],
				children: [
					
				]
			}
		],
		picture: './assets/chars/jaskier.gif'
	},
	{
		name: 'Cirilla Fiona Elen Riannon',
		alias: [
			"Ciri",
			"Lion Cub of Cintra",
			"Falka",
			"Zireael",
			"Swallow",
			"Ashen one",
			"Lady of Space and Time"
		],
		race: "Human",
		sex: "Female",
		"Eye color": "Emerald-green",
		"Hair Color": "Ashen-gray",
		"Skin Color": "White",
		profession: [
			"Witcher",
			"Empress of Nilfgaard"
		],
		affiliations: [
			"Geralt's company",
			"Redanian Secret Service",
			"University of Oxenfurt"
		],
		nationality: "Cintra",
		titles: [
			"Heiress to the throne of Cintra",
			"Heiress to Inis Ard Skellig and Inis An Skellig",
			"Princess of Brugge",
			"Duchess of Sodden",
			"Suzerain of Attre and Abb Yarra"
		],
		habilities: [
			"Elder blood gene",
			"Swordsmanship"
		],
		weapons: [
		],
		family: [
			{
				mother: [
					"Pavetta",
					"Yennefer of Vengenberg"
				],
				father: [
					"Dunny",
					"Geralt of Rivia"
				],
				sibilings: [],
				partners: [
					"Mistle"
				],
				children: [
				]
			}
		],
		picture: './assets/chars/ciri.gif'
	}
	
]

app.get('/characters', (req, res) => res.json(characters));

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
	console.log('To shutdown the server: ctrl + c')
})