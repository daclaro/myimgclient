import React from 'react'
import Cardind from './Cardind.js'
import Copro from '../images/copropriete.PNG'
import Mec from '../images/mec.PNG'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Box, Button, TextField, Grid, Typography, createTheme, ThemeProvider } from '@mui/material'

const Titrage = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ mx: 'auto', width: '40%', mt: 3 }}>
        <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Cardind image={Mec} alt='classique' name='Classique' nameLINK='/Classique/individuel/titrer' desc='Pour titrer les calcul  de contenances , les tableau a , plans , chemises  ' />
        </Grid>

        <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Cardind image={Copro} alt='Copropriete' name='Copropriete' nameLINK='/copropriete/individuel/titrer' desc='pour titrer les plans de copropriete' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Titrage
