import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import Typography from '@mui/material/Typography'
import { getAll, create, update, axios_del } from '../../services/Login'
import VerticalCopro from './VerticalCopro'

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
  const onSubmit = async (data) => {
    setInfo(data)
    console.log('data', info.example[0].name)

    await create(info.example[0], csrfcookie())
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
        {filenotfound()}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='filePath' placeholder='first name ...' accept='.xlsx' id='fileupload' type='file' {...register('example')} style={{ display: 'none' }} />
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
