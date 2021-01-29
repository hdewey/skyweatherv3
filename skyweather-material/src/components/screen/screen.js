import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

import Media from './media'
import { Grid, Button, ButtonGroup, Card, CardContent, Typography} from '@material-ui/core';

import Date from './dates';

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
    }
}));

export default function Screen () {

    // LUNE

    const [media, setMedia] = useState({live: true})

    const yesterday = moment().subtract(1, 'days');

    const [selectedDay, setDay] = useState({time: yesterday.format('M-D-YYYY'), text: yesterday.format('MMM Do')})

    const classes = useStyles();

    const liveActive = `${media.live ? classes.active : null}`
    const timeActive = `${!media.live ? classes.active : null}`
    
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={10}
        >
            <Grid item container xs={2} spacing={1} direction="column" justify="flex-start" alignItems="center">
                    <Grid item xs={12}>
                        <Card className={classes.nowViewing} >
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary">
                                Viewing: {selectedDay.text}
                                </Typography>
                            </CardContent>
                        </Card>
                        <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
                            <Button className={`${classes.buttonToggle} ${liveActive}`} onClick={() => setMedia({live:true})}>Live</Button>
                            <Button className={`${classes.buttonToggle} ${timeActive}`} onClick={() => setMedia({live:false})}>Timelapse</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={10} spacing={3}>
                        <div className={classes.timelapseCards} display={!media.live ? 'active' : 'active'}>
                            {dates.map((days) => {
                                return (
                                    <Date text={days.text} value={days.time}/>
                                )
                            })}
                        </div>
                    </Grid>
            </Grid>

            <Grid item container xs={9}>
                <Media live={media.live} targetDay={selectedDay.time} />
            </Grid>
        </Grid>
    )

}

let dates = [
    {
        time: moment().subtract(1, 'days').format('M-D-YYYY'),
        text: moment().subtract(1, 'days').format("MMM Do")
    }, 
    {
        time: moment().subtract(2, 'days').format('M-D-YYYY'),
        text: moment().subtract(2, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(3, 'days').format('M-D-YYYY'),
        text: moment().subtract(3, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(4, 'days').format('M-D-YYYY'),
        text: moment().subtract(4, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(5, 'days').format('M-D-YYYY'),
        text: moment().subtract(5, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(6, 'days').format('M-D-YYYY'),
        text: moment().subtract(6, 'days').format("MMM Do")
    },
    {
        time: moment().subtract(7, 'days').format('M-D-YYYY'),
        text: moment().subtract(7, 'days').format("MMM Do")
    }
]