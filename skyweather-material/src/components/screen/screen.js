import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MovieCreationIcon from '@material-ui/icons/MovieCreation';

import moment from 'moment';

import Media from './media'
import { Grid, Button, ButtonGroup, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    nav: {
        // height: '100%',
        // width: '30%',
    },
    buttonToggle: {
        border: '0'
    },

    active: {
        backgroundColor: '#b80041'
    },
    timelapseCards: {
        margin: '1vh'
    },
    icon: {
        padding: '1%',
        fontSize: '3vh'
    }
}));

export default function Screen () {

    // LUNE

    const [media, setMedia] = useState({live: true})

    const classes = useStyles();

    const liveActive = `${media.live ? classes.active : null}`
    const timeActive = `${!media.live ? classes.active : null}`
    
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        >
            <Grid item container xs={3} direction="column" justify="flex-start" alignItems="center">
                <div className={classes.nav}>
                    <Grid item xs={12}>
                        <Card className={classes.nowViewing} >
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                Today
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} spacing={3}>
                        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
                            <Button className={`${classes.buttonToggle} ${liveActive}`} onClick={() => setMedia({live:true})}>Live</Button>
                            <Button className={`${classes.buttonToggle} ${timeActive}`} onClick={() => setMedia({live:false})}>Timelapse</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} spacing={3}>
                        <div className={classes.timelapseCards} display={!media.live ? 'active' : 'active'}>
                            {dates.map((days) => {
                                return (
                                    <Card className={classes.timelapseCards}>
                                        <CardContent>
                                            <Typography className={classes.title} color="textPrimary">
                                            {days.time}
                                                <MovieCreationIcon className={classes.icon} color="secondary" />
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                   
                                )
                            })}
                        </div>
                    </Grid>
                </div>
            </Grid>

            <Grid item container xs={9}>
                <Media live={media.live} />
            </Grid>
        </Grid>
    )

}

let dates = [
    {
        time: moment().subtract(0, 'days').format("MMM Do")
    }, 
    {
        time: moment().subtract(1, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(2, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(3, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(4, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(5, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(6, 'days').format("MMM Do")
    }
]