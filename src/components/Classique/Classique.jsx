import * as React from 'react'
import { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { ListSubheader } from '@mui/material'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import VerticalClassique from './VerticalClassique'
export default function Classique() {
  return (
    <>
      <VerticalClassique
        main={
          <Typography color='#84ffff' sx={{ mx: 25, pt: 2 }} variant='p' component='p'>
            Le titrage classique des plans topographiques consiste à donner un titre clair et concis à chaque plan topographique, généralement situé en haut du plan ou sur la couverture. Ce titre doit inclure les informations les plus importantes sur le
            plan, telles que la région représentée, l'échelle du plan et les dates de publication et de révision. Le titrage classique est particulièrement important pour les plans topographiques, car il permet aux utilisateurs de comprendre rapidement et
            facilement les informations contenues dans le plan. Les plans topographiques sont utilisés pour une variété de raisons, notamment pour la planification urbaine, l'ingénierie civile, l'agriculture, la foresterie, la gestion de l'eau, la gestion
            des ressources naturelles et la recherche scientifique. Les titres des plans topographiques doivent être clairs, concis et descriptifs pour aider les utilisateurs à comprendre rapidement les informations contenues dans le plan. Ils doivent
            également inclure les coordonnées géographiques et les références de projection cartographique, ainsi que les noms des organismes qui ont produit le plan et les sources de financement. En résumé, le titrage classique des plans topographiques
            est un élément essentiel pour faciliter l'utilisation et la compréhension de ces plans. Il permet aux utilisateurs de trouver rapidement les informations dont ils ont besoin, ce qui est particulièrement important pour les projets qui
            nécessitent l'utilisation de plusieurs plans topographiques.
          </Typography>
        }
      />
    </>
  )
}
