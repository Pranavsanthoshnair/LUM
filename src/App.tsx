import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import JoinUs from './pages/JoinUs'
import Esports from './pages/Esports'
import './App.css';
import './animations.css'

function App() {
  return (
    <Router basename="/lumino25">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/join-us" element={<Layout><JoinUs /></Layout>} />
          <Route path="/esports" element={<Layout><Esports /></Layout>} />
        </Routes>
      </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

