import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import Typography from '@mui/material/Typography'

import VerticalClassique from './VerticalClassique'

const TitrerGform3 = () => {
  const { register, handleSubmit } = useForm()
  const [page, setPage] = React.useState(0)
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Box sx={{ mx: 'auto', backgroundColor: '#111243', width: '85%', my: '8%', pb: '5%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='h4' component='h4'>
        Upload
      </Typography>
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
        Inserer ici le fichier sicad sous format (.xlsx)
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input {...register('example')} accept='.xlsx' style={{ display: 'none' }} id='raised-button-file' multiple type='file' />
          <label htmlFor='raised-button-file'>
            <Button align='center' variant='contained' component='span'>
              Upload
            </Button>
          </label>
          <Button sx={{ mx: 3 }} onClick={handleSubmit(onSubmit)} align='center' variant='outlined' component='span'>
            Confirmer
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TitrerGform3
