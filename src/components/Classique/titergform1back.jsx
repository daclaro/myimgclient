import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalClassique from './VerticalClassique'

const TitrerGform1 = (props) => {
  const { register, handleSubmit } = useForm()
  const [info, setInfo] = React.useState({})
  let csrfcookie = function () {
    // for django csrf protection
    let cookieValue = null,
      name = 'csrftoken'
    if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim()
        if (cookie.substring(0, name.length + 1) == name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
  const onSubmit = (data) => {
    setInfo(data)
    console.log('info', info)
    create(info.example[0], csrfcookie())
  }

  const filenotfound = () => {
    if (info.example && info.example[0].name) {
      return (
        <p>
          votre fichier <b>{info.example[0].name}</b> est televerse
        </p>
      )
    } else {
      return <p></p>
    }
  }
  return (
    <Box sx={{ mx: 'auto', backgroundColor: '#111243', width: '85%', my: '8%', pb: '5%' }}>
      {' '}
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='h4' component='h4'>
        Upload
      </Typography>
      <Typography color='#84ffff' sx={{ ml: 5, pt: 2 }} variant='caption' component='h4'>
        Inserer ici le fichier sicad sous format (.xlsx)
        <p>{filenotfound()}</p>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <form action='' method='post' enctype='multipart/form-data' onSubmit={handleSubmit()}>
          <input name='filePath' {...register('example')} accept='.xlsx' style={{ display: 'none' }} id='raised-button-file' multiple type='file' />
          <label htmlFor='raised-button-file'>
            <Button align='center' variant='contained' component='span'>
              Upload
            </Button>
          </label>
          <Button type='submit' sx={{ mx: 3 }} onClick={handleSubmit(onSubmit)} align='center' variant='outlined' component='span'>
            Confirmer
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TitrerGform1
