import './App.css'
import Header from './components/Header'
import Wardrobe from './pages/Wardrobe'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import AddClothes from './components/AddClothes'

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="navUl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<Wardrobe />} />
            <Route path="/about" element={<About />} />
            <Route path="/addClothes" element={<AddClothes />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
