import { Box } from '@mui/material'

import Mysvg from './images/illustration-section-01.svg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import Hero from './components/Hero'
import Titrage from './components/Titrage'
import Indexation from './components/Indexation'
import Classique from './components/Classique/Classique'
import Copropriete from './components/Copropriete/Copropriete'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TitrerG from './components/Classique/TitrerG'
import TitrerC from './components/Copropriete/TitrerC'

function App() {
  return (
    <Box sx={{ backgroundImage: 'url(' + Mysvg + ')', height: '2530px', width: '100%', backgroundRepeat: 'no-repeat', backgroundColor: '#151719' }}>
      <Router>
        <Routes>
          <Route path='/titrage/classique' element={<Classique />}></Route>
          <Route path='/classique/individuel/titrer' element={<TitrerG />} />
          <Route path='/copropriete/individuel/titrer' element={<TitrerC />} />
          <Route
            path='/titrage'
            element={
              <>
                {' '}
                <Navbar />
                <Titrage />
              </>
            }
          />
          <Route path='/indexation' element={<Indexation />} />

          <Route path='/titrage/copropriete' element={<Copropriete />} />
          <Route
            path='/'
            element={
              <>
                {' '}
                <Navbar />
                <Hero />
              </>
            }
          />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
