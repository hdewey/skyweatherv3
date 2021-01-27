import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './header/header'
import Screen from './screen/screen'

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
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container} spacing={10}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid className={classes.screen} item xs={8}>
                    <Paper >
                        <Screen />
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>sensors</Paper>
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
