import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del, createcop } from '../../services/Login'
import VerticalCopropriete from './VerticalCopropriete'
import Cardinput from '../Cardinput.js'
import TextField from '@mui/material/TextField'
import mec from '../../images/copropriete.PNG'
import cont from '../../images/cont.jpg'
import taba from '../../images/taba.jpg'
const TitrerGform1 = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const [gem, setGem] = React.useState([])
  const [nonebutton, setNonebutton] = React.useState(0)

  const onSubmit = async (data) => {
    console.log('my data is', data)
    const generatedImage = await createcop(data)
    await console.log('my try is', generatedImage[0])
    setGem(generatedImage[0])
  }

  const generatedImageFunc = () => {
    console.log('?SSSSFGDFFGDFG????', gem)
    console.log('GGGGGGGG?', gem.length)
    console.log('??????????????', gem[0])

    gem.map((x) => console.log('x', x))
    return gem.map((x) => (
      <a href={x} key={x} target='_blank'>
        <img style={{ width: '40%', marginLeft: '20%' }} src={x} />{' '}
      </a>
    ))
  }
  return (
    <Box sx={{ mx: 'auto', width: '85%', my: '0%', pb: '0%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2, textAlign: 'center' }} variant='h4' component='h4'>
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
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
        Numero des titres copro (pour T68000/21 tapper seulement 68000)
        <input
          name='titredu'
          placeholder='68000  ...'
          accept='image/*'
          id='titredu'
          {...register('titreDu', {
            required: true,
            pattern: {
              value: /^[0-9]{0,10}$/,
              message: 'Please enter a valid email',
            },
          })}
        />
        Au
        <input
          name='titreau'
          placeholder=' 68050  ...'
          accept='image/*'
          id='titreau'
          {...register('titreAu', {
            required: true,
            pattern: {
              value: /^[0-9]{0,10}$/,
              message: 'Please enter a valid number',
            },
          })}
        />
        {errors.titreDu && <p>Please check the digit of titre</p>}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mx: 'auto', width: '90%', my: 3 }}>
            <Grid item xs={12} lg={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={mec} name='copro' name1='filePathc' multipleTernary={'True'} register={register} desc='Inserer ici le plan' sx={{ display: 'none' }} />
            </Grid>
          </Grid>

          <Button sx={{ mx: 3 }} onClick={handleSubmit(onSubmit)} align='center' variant='outlined' component='span'>
            Confirmer
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TitrerGform1
