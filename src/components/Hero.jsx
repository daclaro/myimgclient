import React from 'react'
import Cardind from './Cardind.js'
import { Box, Button, TextField, Grid, Typography, createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Hero = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      color: '#FFFFFF',
    },
  })

  return (
    <Box sx={{ mt: 6 }}>
      <ThemeProvider theme={theme}>
        <Typography color='#84ffff' align='center' variant='h3'>
          Titrage &{' '}
          <Box component='span' sx={{ color: 'primary.main' }}>
            Indexation
          </Box>
        </Typography>
      </ThemeProvider>
      <Typography color='#84ffff' sx={{ mt: 2, fontSize: 18, fontWeight: 1 }} align='center' variant='subtitle2' component='h2'>
        Cet outil permet de faire l'indexation des pieces, <br />
        ainsi que le titrage automatique des pieces. <br />
      </Typography>
      <Typography color='#84ffff' sx={{ mt: 2, fontSize: 18, fontWeight: 1, color: 'info.light' }} align='center' variant='subtitle2' component='h2'>
        Etabli par
      </Typography>
      <Grid container spacing={2} sx={{ mx: 'auto', width: '24%', mt: 2 }}>
        <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button href='titrage' variant='contained' sx={{ px: { xs: 17, lg: 4 }, textTransform: 'none' }}>
            Titrage
          </Button>
        </Grid>

        <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button variant='outlined' sx={{ px: { xs: 17, lg: 4 }, textTransform: 'none' }}>
            Indexation
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
