import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './header/header'
import Screen from './screen/screen'
import Sensors from './sensors/sensors'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    addPadding: {
        padding: '1vh'
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container} spacing={3}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid className={classes.screen} item xs={11}>
                    <Paper className={classes.addPadding}>
                        <Screen />
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Sensors />
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
