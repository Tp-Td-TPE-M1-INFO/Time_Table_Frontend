import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../media/logo2.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'right'
    },
    list: {
        width: 250,
        height: '100%',
        background: 'linear-gradient(#00009C 15%, 50%, blueviolet 80%)',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 8
    }
}))

const Navbar = () => {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon color='#fff' />
                    </IconButton>
                    <img src={logo} alt='' width={100} height={80} />
                    <Typography variant="h6" className={classes.title}>
                        <InfoIcon color='#fff' />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <div className={classes.list} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <List>
                        <ListItem button>
                            <ListItemText className={classes.text} primary="Accueil" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText className={classes.text} primary="Calendrier" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText className={classes.text} primary="Tâches" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText className={classes.text} primary="Contacts" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar