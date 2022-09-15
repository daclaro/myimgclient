import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import TitrerGform1 from './TitrerGform1'
import TitrerGform2 from './TitrerGform2'
import TitrerGform3 from './TitrerGform3'

import Typography from '@mui/material/Typography'

import VerticalClassique from './VerticalClassique'

const TitrerG = () => {
  const { register, handleSubmit } = useForm()
  const [page, setPage] = React.useState(0)

  const PageDisplay = () => {
    if (page == 0) {
      return <TitrerGform1 />
    } else if (page == 1) {
      return <TitrerGform2 />
    } else if (page == 2) {
      return <TitrerGform3 />
    }
  }

  return (
    <VerticalClassique
      main={
        <Box sx={{ mx: 'auto', pb: 5, pt: 3, backgroundColor: '#BAA898', width: '70%' }}>
          <Typography color='#84ffff' sx={{ ml: 5, mt: 3 }} variant='subtitle' component='div'>
            Titrage groupe Etape {page} sur 3
          </Typography>
          {PageDisplay()}

          <Grid container spacing={2} sx={{ mx: 'auto', width: '24%', mb: 5 }}>
            <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1)
                }}
                variant='outlined'
                sx={{ px: { xs: 17, lg: 4 }, textTransform: 'none' }}
              >
                Precedent
              </Button>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                disabled={page == 2}
                variant='contained'
                onClick={() => {
                  setPage((currPage) => currPage + 1)
                }}
                sx={{ px: { xs: 17, lg: 4 }, textTransform: 'none' }}
              >
                Suivant
              </Button>
            </Grid>
          </Grid>
        </Box>
      }
    />
  )
}

export default TitrerG
