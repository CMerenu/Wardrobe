import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
