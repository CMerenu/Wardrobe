import axios from 'axios'
import TypeCard from '../components/TypeCard'
import ClothingCard from '../components/ClothingCard'
import { useEffect } from 'react'
import { useState } from 'react'
import Search from '../components/Search'
import { BASE_URL } from './globals'

const Home = () => {
  const [types, setTypes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get(`${BASE_URL}`)
      setTypes(response.data.results)
    }
    getTypes()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(`${BASE_URL}/`)
    setSearchResults(response.data.results)
    toggleSearched(true)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="search">
      <Search
        value={searchQuery}
        onChange={handleChange}
        onSubmit={getSearchResults}
      />
      {searched && (
        <div>
          <h1>Search Results</h1>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <ClothingCard {...result} image={result.image} />
            ))}
          </section>
        </div>
      )}
      <div className="types">
        <h1>Types</h1>
        <section className="container-grid">
          {types.map((type) => (
            <TypeCard name={type.name} image={type.image} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
