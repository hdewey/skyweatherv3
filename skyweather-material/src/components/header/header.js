import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from './logo.png'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#4F2D7F',
    },
}));

export default function Header () {

    const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <img src={logo} width='5%'/>
          <Typography variant="h5" className={classes.title}>
            St. Stephen's Weather Station
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )

}