const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const notes = [
  {
      id: 1,
      name:'Eating noddles',
      completed: true,
      description: 'Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.',
  },
  {
      id: 2,
      name:'Go to grocery',
      completed: false,
      description: 'A grocery store or grocer\'s shop is a retail shop that primarily sells food, either fresh or preserved.',
  },
  {
      id: 3,
      name:'Watching Netflix',
      completed: false,
      description: 'Netflix, Inc. is an American media-services provider and production company',
  },
  {
      id: 4,
      name:'Doing some coding',
      completed: true,
      description: 'Coding is basically the computer language used to develop apps, websites, and software.'
  }
]

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('<h1>Welcome to backend</h1>'))
app.get('/api/notes', (req, res) => {
  res.send(notes);
})

app.listen(port, () => console.log(`Server listening on port ${port}`))