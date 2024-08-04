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
    control,
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
  const helper = (errors) => {
    if (errors.titreName?.type === 'pattern') {
      return 'Verifier le type du texte.'
    } else if (errors.titreName?.type === 'required') {
      return 'Verifier le required du texte.'
    }
  }
  const generatedImageFunc = () => {
    console.log('?SSSSFGDFFGDFG????', gem)
    console.log('GGGGGGGG?', gem.length)
    console.log('??????????????', gem[0])

    gem.map((x) => console.log('x', x))
    return   <Grid container spacing={2}>
    {gem.map((x) => (
      <Grid item xs={12} sm={6} md={4} >
      
      <Typography  sx={{ textAlign: 'center' }} variant='p' component='p' color='#84ffff'>{x.split("cop/")[1].split(".jpg")[0]}</Typography>
      <a href={x} key={x} target='_blank'>
        <img style={{ width: '80%', marginLeft: '20%' }} src={x} />{' '}
      </a>
      </Grid>
    ))}
  </Grid>
  }
  return (
    <Box sx={{ mx: 'auto', width: '85%', my: '0%', pb: '5%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2, textAlign: 'center' }} variant='h4' component='h4'>
        Titrer un plan
      </Typography>
      {generatedImageFunc()}
      <Box>
        <Typography color='#84ffff' sx={{ ml: 5, mr: 5, pt: 2, display: 'flex', alignItems: 'center' }} variant='caption' variant='h7' component='h4'>
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
      <Typography color='#84ffff' sx={{ ml: 5, mr: 5, pt: 2, display: 'flex', alignItems: 'center' }} variant='caption' variant='h7' component='h4'>
        <Typography> Numero des titres copro (pour T68000/21 tapper seulement 68000) : </Typography>
        <Controller
          control={control}
          name='titredu'
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => (
            <TextField
              {...register('titreDu', {
                required: true,
                pattern: {
                  value: /^[0-9]{0,10}$/,
                },
              })}
              error={errors.titreName?.type === 'pattern' || errors.titreName?.type === 'required'}
              label='68000  ...'
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
        Au
        <Controller
          control={control}
          name='titreau'
          render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => (
            <TextField
              {...register('titreAu', {
                required: true,
                pattern: {
                  value: /^[0-9]{0,10}$/,
                },
              })}
              error={errors.titreName?.type === 'pattern' || errors.titreName?.type === 'required'}
              label='68050  ...'
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
