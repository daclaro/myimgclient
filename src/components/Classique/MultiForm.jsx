import React from 'react'
import { Grid, Box, Button } from '@mui/material'

const MultiForm = () => {
  const [page, setPage] = useState(0)
  return (
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
  )
}

export default MultiForm
