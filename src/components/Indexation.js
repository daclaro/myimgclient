import Navbar from '../components/Navbar'
import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { getAll, createInd, update, axios_del } from '../services/Login'
import Cardinputind from './Cardinputind.js'
import mec2 from '../images/mec2.jpg'

const Indexation = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const [info, setInfo] = React.useState({})
  const [gem, setGem] = React.useState("")
  const onSubmit = async (data) => {
    setInfo(data)
    console.log(data)
    const alerta=await createInd(data)
    console.log("alerta",alerta)
    setGem(alerta)
  }
  const generatedImageFunc = () => {
    if (gem===''){
      return <h1></h1>
    }
    else{return (  <>    <Typography color='#84ffff' sx={{ ml: 5, pt: 2, textAlign: 'center' }} variant='h6' component='h6'>
    {gem.toString().split("ges/")[1].split("split")[0]}

  </Typography>
  <Typography color='#84ffff' sx={{ ml: 5, pt: 2, textAlign: 'center' }} variant='h6' component='h6'>
  probabilité est {parseFloat(gem.toString().split("split")[1].split(".png")[0])*100+"%"}
  </Typography></>)
  }
  }

  return (
    <Box sx={{ mx: 'auto', width: '85%', my: '0%', pb: '3%' }}>

      <Navbar />

      {generatedImageFunc()}

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mx: 'auto', width: '90%' }}>
            <Grid item xs={12} lg={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Cardinputind image={mec2}  name='piecePath' name1='Index' register={register} desc='Indexer ici la piece' sx={{ display: 'none' }} />
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

export default Indexation
