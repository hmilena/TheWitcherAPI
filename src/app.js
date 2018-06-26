const express = require('express')
const app = express()
const port = 3001
const characters = [
     {
          name: 'Geralt de Rívia',
          picture: './assets/chars/geralt.gif'
     },
     {
          name: 'Yennefer de Vengenberg',
          picture: './assets/chars/yennefer.gif'
     },
     {
          name: 'Cerys',
          picture: './assets/chars/cerys.gif'
     },
     {
          name: 'Jaskier',
          picture: './assets/chars/jaskier.gif'
     },
     {
          name: 'Triss',
          picture: './assets/chars/triss.gif'
     },
     {
          name: 'Roche',
          picture: './assets/chars/roche.gif'
     },
     {
          name: 'Morenn',
          picture: './assets/chars/morenn.gif'
     },
     {
          name: 'Vilgefortz',
          picture: './assets/chars/vilgefortz.gif'
     }
]
app.get('/characters', (req, res) => res.json(characters))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To shutdown the server: ctrl + c')
})