import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Button, Typography, TextField } from '@mui/material'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import AddIcon from '@mui/icons-material/Add'
import FolderIcon from '@mui/icons-material/Folder'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import SearchIcon from '@mui/icons-material/Search'
import SignpostIcon from '@mui/icons-material/Signpost'
import RoomIcon from '@mui/icons-material/Room'
import SettingsIcon from '@mui/icons-material/Settings'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Main = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'space-between' }} columnSpacing={20} item xs={12} lg={4}>
        <Grid align='center' sx={{ backgroundColor: '#181A1B', mx: 1, alignItems: 'center', justifyContent: 'center' }} item xs={12}>
          <PersonIcon sx={{ fontSize: '75px' }} />
          <Typography>Espace prive</Typography>
          <Button sx={{ m: 1, width: '80%' }} variant='contained'>
            <LockIcon />
            <Link to='/login'>
              {' '}
              <Typography>Se Connecter</Typography>
            </Link>
          </Button>
          <Button sx={{ m: 1, width: '80%' }} variant='contained'>
            <AddIcon />
            <Link to='/register'>
              {' '}
              <Typography>S'enregistrer</Typography>
            </Link>
          </Button>
          <Typography align='left' sx={{ display: 'block', m: 1, alignSelf: 'flex-start' }}>
            Mot de passe oublie
          </Typography>
        </Grid>
        <Grid align='center' sx={{ backgroundColor: '#181A1B', mx: 1, alignItems: 'center', justifyContent: 'center' }} item xs={12}>
          <FolderIcon sx={{ fontSize: '75px' }} />
          <Typography>Etat dossier</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FindInPageIcon />
            <TextField id='outlined-basic' label='Votre reference dossier' variant='outlined' sx={{ width: '90%' }} />
          </Box>

          <Typography align='left' variant='p' sx={{ ml: 2, display: 'block', fontSize: '12px' }}>
            Saisissez la référence du dossier recherché telle qu'elle figure sur la demande soumise. Exemple : PCT-PANF-MRF-456/2020
          </Typography>
          <Button sx={{ ml: 14, my: 2 }} variant='contained'>
            <LockIcon />
            Verifier
          </Button>
        </Grid>
      </Grid>

      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} columnSpacing={20} item xs={12} lg={8}>
        <Grid align='center' sx={{ mx: 1, backgroundColor: '#181A1B', alignItems: 'center', justifyContent: 'center' }} item xs={12}>
          <Typography align='left' sx={{ pt: 2, pl: 4 }} variant='h6'>
            Pont de confiance Usager / Administration
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField id='outlined-basic' label='Recherche par activite:Exemple pein' variant='outlined' sx={{ width: '80%' }} />
            <SearchIcon />
          </Box>
          <Typography align='left' sx={{ mx: 2, fontSize: 12 }}>
            Un parcours d'autorisation 100% digital, 100% traçable avec Zéro papier déposé et Zéro papier délivré.
          </Typography>
          <Grid sx={{ p: 4, display: { lg: 'flex' }, mb: 4, mt: 4 }}>
            <Grid lg={8} sx={{ ml: 8, p: 4, border: 1 }}>
              <Typography align='left' sx={{ mb: 2, fontSize: 18 }}>
                <b>Quelle procédure suivre ?</b>
              </Typography>
              <Typography align='left'>
                <SignpostIcon />
                Répondez à quelques questions pour être mieux orienté.
              </Typography>
              <Button sx={{ ml: 13, mt: 2 }} variant='contained'>
                Demarrer simulation
              </Button>
            </Grid>
            <Grid lg={4} sx={{ mr: 8, ml: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', mb: 2, p: 2, border: 1, justifyContent: ' space-evenly' }}>
                <RoomIcon />
                <Typography sx={{}}>Autorisations urbanistiques</Typography>
              </Box>
              <Box sx={{ display: 'flex', p: 2, border: 1, justifyContent: ' space-evenly' }}>
                <SettingsIcon />
                <Typography>Autorisations économiques</Typography>
              </Box>{' '}
            </Grid>{' '}
          </Grid>

          <Typography> Support@rokhas.ma</Typography>
          <Typography> +212 (0) 5 22 23 23 44</Typography>
          <Button sx={{ mt: 1 }} variant='contained'>
            <Typography>Réserver un rendez-vous</Typography>
          </Button>
          <Typography sx={{ mb: 4, mt: 2, fontSize: '13px' }}>Lundi au Vendredi de 08:30 à 18:30</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main
