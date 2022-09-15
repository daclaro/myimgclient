import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalClassique from './VerticalClassique'

const TitrerGform1 = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const [info, setInfo] = React.useState({})

  const onSubmit = async (data) => {
    setInfo(data)

    await create(data)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='filePath' placeholder='first name ...' accept='.xlsx,image/*' id='fileupload' type='file' {...register('image')} style={{ display: 'none' }} />
          {errors.image && <p>Please check the First Name</p>}
          <label htmlFor='fileupload' style={{ cursor: 'pointer' }}>
            Select file ...
          </label>
          <Button type='submit' sx={{ mx: 3 }} align='center' variant='outlined' component='button'>
            Confirmer
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TitrerGform1
