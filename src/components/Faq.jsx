import React from 'react'
import Cardind from './Cardind.js'
import { Box, Button, TextField, Grid, Typography, createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Faq = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      color: '#FFFFFF',
    },
  })

  return (
    <Grid container spacing={2} sx={{ mx: 'auto', width: '80%', mt: 3 }}>
      <Grid item xs={12} lg={6}>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='block' component='h2'>
          Quel est le but de cet outil ?
        </Typography>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
          Le but de cet outil est de simplifier le processus d'indexation et de titrage des documents. Il automatise ces tâches, ce qui permet de gagner du temps et de réduire les risques d'erreurs qui peuvent survenir lorsqu'elles sont effectuées
          manuellement.
        </Typography>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='block' component='h2'>
          Comment fonctionne cet outil ?
        </Typography>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
          L'outil utilise des algorithmes et l'apprentissage automatique pour analyser le contenu de chaque document et extraire les informations pertinentes telles que les mots clés, les sujets et les phrases importantes. Il utilise ensuite ces
          informations pour créer un index pour chaque document et générer un titre approprié.{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='block' component='h2'>
          Quels types de documents peuvent être indexés et titrés à l'aide de cet outil ?
        </Typography>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
          Cet outil peut être utilisé pour indexer et titrer tout type de document, qu'il s'agisse de documents textuels, d'images, de fichiers audio ou vidéo, ou de tout autre type de fichier numérique.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='block' component='h2'>
          Est-ce que cet outil nécessite une formation ou des compétences particulières pour être utilisé ?
        </Typography>
        <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
          L'outil est conçu pour être facile à utiliser, sans nécessiter de compétences techniques ou informatiques avancées. Il est accessible aux utilisateurs débutants et expérimentés.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography color='#84ffff' sx={{ mx: 30, pt: 2 }} variant='block' component='h2'>
          Est-ce que cet outil peut être personnalisé pour répondre aux besoins spécifiques de mon entreprise ?
        </Typography>
        <Typography color='#84ffff' sx={{ mx: 30, pt: 2 }} variant='caption' component='h4'>
          Oui, cet outil peut être personnalisé pour répondre aux besoins spécifiques de votre entreprise, tels que les critères d'indexation, les paramètres de titrage, et les formats de sortie. Des options de personnalisation sont disponibles pour
          s'adapter aux besoins de chaque utilisateur.{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Faq
