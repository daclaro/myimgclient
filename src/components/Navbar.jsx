import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { MenuItem, Menu } from '@mui/material'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { ReactComponent as Logoml } from '../images/logoml.svg'

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false)
  const ExpandableMenu = ['Titrage', 'Indexation', 'FAQ']
  const ButtonVariant = ['text', 'contained', 'text', 'outlined']

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ position: 'relative', flexGrow: 1 }}>
      <AppBar sx={{ position: 'relative', background: 'transparent', boxShadow: 'none' }}>
        <Box sx={{ mx: 46, p: 3, display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between' }}>
          <MenuItem component={Link} to='/'>
            <Logoml />
          </MenuItem>
          {ExpandableMenu.map((setting, id) => (
            <MenuItem key={setting}>
              <Button href={'../../' + setting.toLowerCase()} variant={ButtonVariant[id]} sx={{ textTransform: 'none', fontSize: '1rem' }}>
                {setting}
              </Button>
            </MenuItem>
          ))}
        </Box>
        <Toolbar sx={{ display: { lg: 'none' } }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <IconButton onClick={handleToggle} size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
            <Menu
              sx={{ mt: '45px', display: 'flex' }}
              id='menu-appbar'
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
            >
              <Box>
                {ExpandableMenu.map((setting) => (
                  <MenuItem key={setting} component={Link} to={props.order === '1' ? '/eee' : setting}>
                    {setting}
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
