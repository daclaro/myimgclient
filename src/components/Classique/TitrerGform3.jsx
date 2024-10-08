import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalClassique from './VerticalClassique'
import Cardinput from '../Cardinput.js'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material'
import { green, purple } from '@mui/material/colors'
import mec from '../../images/mec.PNG'
import mec2 from '../../images/mec2.jpg'

import cont from '../../images/cont.jpg'
import taba from '../../images/taba.jpg'

const TitrerGform1 = (props) => {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#EFF7FF', // your color
      },
    },
  })
  const {
    register,
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { errors },
  } = useForm()

  const [gem, setGem] = React.useState([])
  const [nonebutton, setNonebutton] = React.useState(0)
  const errorMe = (errors) => {}
  const onSubmit = async (data) => {
    console.log('my data is', data)
    console.log('my  diff is', getValues().plan[0].name)
    const generatedImage = await create(data)
    await console.log('my try is', generatedImage)
    setGem(generatedImage)
  }

  const pagePlan = watch('plan', false)
  const pageCont = watch('cont', false)
  const pageTab = watch('taba', false)
  const checkValues = (n) => {
    switch (n) {
      case 1:
        return pagePlan ? pagePlan[0]?.name || ' ' : ' '
      case 2:
        return pageCont ? pageCont[0]?.name || ' ' : ' '
      case 3:
        return pageTab ? pageTab[0]?.name || ' ' : ' '
      default:
        return ' '
    }
  }

  console.log('watchp', pagePlan)

  console.log('watchc', pageCont)

  console.log('watcht', pageTab)
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
  const helper = (errors) => {
    if (errors.titreName?.type === 'pattern') {
      return 'Verifier le type du texte.'
    } else if (errors.titreName?.type === 'required') {
      return 'Verifier le required du texte.'
    }
  }

  return (
    <Box sx={{ mx: 'auto', width: '85%', my: '0%', pb: '3%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2, textAlign: 'center' }} variant='h4' component='h4'>
        Titrer un plan
      </Typography>
      {generatedImageFunc()}
      <Box>
        <Typography color='#84ffff' sx={{ position: 'absolute', ml: 5, mr: 5, pt: 2, display: 'flex', alignItems: 'center' }} variant='caption' variant='h7' component='h4'>
          <Typography>Tapper le titre : </Typography>
          <Controller
            control={control}
            name='titrename'
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => (
              <TextField
                {...register('titreName', {
                  required: true,
                  pattern: {
                    value: /[TR][0-9]+\/[0-9]+/i,
                  },
                })}
                error={errors.titreName?.type === 'pattern' || errors.titreName?.type === 'required'}
                label='T5222/21'
                color='primary'
                variant='outlined'
                helperText={helper(errors)}
                InputLabelProps={{
                  style: { color: '#808080' },
                }}
                sx={{
                  '& .MuiInputBase-input': { color: '#fff' },
                  mx: 5,
                }}
              />
            )}
          />
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mx: 'auto', width: '90%', my: 3 }}>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={mec2} name4={checkValues(1)} name='plan' name1='filePath' register={register} desc='Inserier ici le plan' sx={{ display: 'none' }} />
            </Grid>

            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={cont} name4={checkValues(2)} desc='calcul des contenances' name='cont' name1='filePath2' register={register} sx={{ backgroundColor: 'white' }} />
            </Grid>
            <Grid item xs={12} lg={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinput image={taba} name4={checkValues(3)} desc='Inserier ici le tableau A' name='taba' name1='filePath3' register={register} />
            </Grid>
          </Grid>

          <Button sx={{ display: 'flex', justifyContent: 'center', mx: '30%', py: 1 }} onClick={handleSubmit(onSubmit)} align='center' variant='outlined' component='span'>
            Confirmer
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TitrerGform1
