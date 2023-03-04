import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Handicaps from './components/pages/handicaps/Handicaps';
import Contact from './components/pages/contact/Contact';
import Story from './components/pages/story/Story';
import Illness from './components/pages/illness/Illness';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/handicaps' element={<Handicaps />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/story' element={<Story />} />
        <Route path='/illness' element={<Illness />} />
    </Routes>
    </div>
  )
}

export default App
