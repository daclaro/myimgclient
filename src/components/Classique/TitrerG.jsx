import * as React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import TitrerGform1 from './TitrerGform1'
import TitrerGform2 from './TitrerGform2'
import TitrerGform3 from './TitrerGform3'
import Navbar from '../../components/Navbar'

import Typography from '@mui/material/Typography'

const TitrerG = () => {
  const { register, handleSubmit } = useForm()
  const [page, setPage] = React.useState(2)

  const PageDisplay = () => {
    if (page == 0) {
      return <TitrerGform1 />
    } else if (page == 1) {
      return <TitrerGform2 />
    } else if (page == 2) {
      return <TitrerGform3 />
    }
  }

  return (
    <Box>
      {' '}
      <Navbar order='1' />
      {PageDisplay()}
    </Box>
  )
}

export default TitrerG
