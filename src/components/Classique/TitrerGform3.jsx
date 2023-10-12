import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalClassique from './VerticalClassique'
import Cardinput from '../Cardinput.js'

import mec from '../../images/mec.PNG'
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
    const generatedImage = await create(data)
    await console.log('my try is', generatedImage)
    setGem(generatedImage)
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
    <Box sx={{ mx: 'auto', backgroundColor: '#111243', width: '85%', my: '0%', pb: '0%' }}>
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
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mx: 'auto', width: '90%', my: 3 }}>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={mec} name='plan' name1='filePath' register={register} desc='Inserier ici le plan' sx={{ display: 'none' }} />
            </Grid>

            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={cont} desc='calcul des contenances' name='cont' name1='filePath2' register={register} />
            </Grid>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={taba} desc='Inserier ici le tableau A' name='taba' name1='filePath3' register={register} />
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
