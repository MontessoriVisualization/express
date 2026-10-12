import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios'

const App = () => {
  const [jokes, setJokes] = React.useState([])
  useEffect(() => {
    Axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error)
      })
  }, [])                          
  return (
    <div>
      <h1>Jokes</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
      
    </div>
  )
}

export default App
