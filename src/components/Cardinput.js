import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
export default function Cardinput(props) {
  const [nonebutton, setNonebutton] = React.useState(0)
  const [checked, setChecked] = React.useState(true)
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  const biggerapple = () => {
    if (checked) {
      return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#151719' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label='Activer' />
          </FormGroup>
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
            {props.multipleTernary ? (
              <input name={props.name1} placeholder='first name ...' multiple accept='image/*' id={props.name1} {...props.register(props.name)} type='file' style={{ display: 'none' }} />
            ) : (
              <input name={props.name1} placeholder='first name ...' accept='image/*' id={props.name1} {...props.register(props.name)} type='file' style={{ display: 'none' }} />
            )}

            <label htmlFor={props.name1} style={{ cursor: 'pointer', backgroundColor: 'blue' }}>
              Select {props.name} ...
            </label>
          </CardActions>
        </Card>
      )
    } else {
      return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#151719' }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked checked={checked} onChange={handleChange} />} label='Hide' />
          </FormGroup>
          <CardMedia component='img' height='220' image={props.image} alt={props.alt} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' color='#84ffff'>
              {props.name}
            </Typography>
            <Typography variant='body2' color='text.secondary' color='#84ffff'>
              {props.desc}
            </Typography>
          </CardContent>
        </Card>
      )
    }
  }
  return <>{biggerapple()}</>
}
