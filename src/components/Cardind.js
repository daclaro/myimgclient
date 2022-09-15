import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Cardind(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#151719' }}>
      <CardMedia component='img' height='220' image={props.image} alt={props.alt} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' color='#84ffff'>
          {props.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' color='#84ffff'>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`${props.name.toLowerCase()}`} size='small'>
          Commencer
        </Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
