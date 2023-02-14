import { Search } from 'react-router-dom'
import axios from 'axios'
import TypeCard from '../components/TypeCard'
import ClothingCard from '../components/ClothingCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
}
