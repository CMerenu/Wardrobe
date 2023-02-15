import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
// import ClothesList from './components/ClothesList'
// import Clothing from '../../models/clothing'

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
