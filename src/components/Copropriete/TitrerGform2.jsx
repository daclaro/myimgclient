import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalCopropriete from './VerticalCopropriete'

const TitrerGform1 = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const [info, setInfo] = React.useState({})
  const [gem, setGem] = React.useState('')
  const onSubmit = async (data) => {
    setInfo(data)
    console.log('my data is', data)
    const generatedImage = await create(data)
    console.log('my try is', generatedImage)
    setGem(generatedImage)
  }
  const generatedImageFunc = () => {
    if (gem.length > 10) {
      return (
        <a href={gem} target='_blank'>
          <img style={{ width: '40%', marginLeft: '20%' }} src={gem} />{' '}
        </a>
      )
    } else {
      return <p>10000000000</p>
    }
  }
  return (
    <Box sx={{ mx: 'auto', backgroundColor: '#111243', width: '85%', my: '8%', pb: '5%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='h4' component='h4'>
        Titrer un plan
      </Typography>
      {generatedImageFunc()}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
        Tapper le titre
        <input
          name='titrename'
          placeholder='Numero du titre "T1100/21"  ...'
          accept='image/*'
          id='titrename'
          {...register('titreName', {
            required: true,
            pattern: {
              value: /[TR][0-9]+\/[0-9]+/i,
              message: 'Please enter a valid email',
            },
          })}
        />
        {errors.titreName && <p>Please check the First Name</p>}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='filePath' placeholder='first name ...' accept='image/*' id='fileupload' type='file' {...register('image')} style={{ display: 'none' }} />
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
