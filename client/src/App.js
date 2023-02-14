// import logo from './logo.svg'
// import axios from 'axios'
import './App.css'
import Header from './components/Header'
import ClothesList from './components/ClothesList'


import { Route, Switch } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <Header />
    <main>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes>
    </main>
  </div>
  )
}

export default App
