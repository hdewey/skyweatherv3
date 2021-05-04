import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

import Media from './media'
import { Grid, Button, ButtonGroup, Card, CardContent, Typography, Paper, IconButton} from '@material-ui/core';

import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const spartan = {
    red: '#D61D42',
    purple: '#4F2D7F'
}

export default function Screen () {

    const [media, setMedia] = useState({live: true})

    const [radar, setRadar] = useState({live: false})

    const yesterday = moment().subtract(1, 'days');

    const [selectedDay, setDay] = useState({time: yesterday.format('M-D-YYYY'), text: yesterday.format('MMM Do')})

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        buttonToggle: {
            border: '0'
        },
        timelapseCards: {
            margin: '1vh',
            padding: '.5vh',

        },
        centerText: {
            textAlign: 'center'
        },
        icon: {
            padding: '1%',
            fontSize: '2vh',
            margin: '0',
            color: spartan.red,
        },
        
        selectedRed: {
            backgroundColor: spartan.red,
        },
        selectedPurple: {
            color: spartan.purple,
        }
    }));


    const classes = useStyles();

    const liveClicked = () => {
        setMedia({live: true});
        setRadar({live: false});
        setDay({
            time: null,
            text: null
        });
    }

    const radarClicked = () => {
        setRadar({live: true});
        setMedia({live: false});
        setDay({
            time: null,
            text: null
        });
    }

    const timelapseClicked = (day) => {
        setMedia({live: false});
        setRadar({live: false});
        setDay({
            time: day.time,
            text: day.text
        });
    }

    const paperColor = (time) => {
        if (time === selectedDay.time && !media.live) {
            return (classes.selectedRed)
        } else if (!time) {
            if (media.live) {
                return (classes.selectedRed)
            }
        } else if (time === 'radar') {
            if (radar.live === true) {
                return classes.selectedRed
            }
        }
    }

    const iconColor = (time) => {
        if (time === selectedDay.time && !media.live) {
            return (classes.selectedPurple)
        } else if (!time) {
            if (media.live) {
                return classes.selectedPurple
            }
        } else if (time === 'radar') {
            if (radar.live) {
                return classes.selectedPurple
            }
        }
    }
    
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={1}
        >
            <Grid item container xs={2} spacing={3} direction="column" justify="flex-start" alignItems="center">

                    <Grid container item xs={12} direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item xs={10}>
                                <Paper elevation={3} className={`${classes.timelapseCards} ${paperColor(false)}`}>
                                        <Typography className={classes.centerText}>
                                        {"Live"}
                                            <IconButton className={classes.iconButton} onClick={() => {liveClicked()}}>
                                                <LinkedCameraIcon className={`${classes.icon} ${iconColor(false)}`} />
                                            </IconButton>
                                        </Typography>
                                </Paper>
                            </Grid>
                            
                            {
                                dates.map((day) => {
                                    return (
                                        <Grid item xs={10} key={day.text}>
                                            <Paper elevation={3} className={`${classes.timelapseCards} ${paperColor(day.time)}`}>
                                                    <Typography className={classes.centerText}>
                                                    {day.text}
                                                        <IconButton onClick={() => {timelapseClicked(day)}}>
                                                            <MovieCreationIcon className={`${classes.icon} ${iconColor(day.time)}`} />
                                                        </IconButton>
                                                    </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }


                            <Grid item xs={10}>
                                <Paper elevation={3} className={`${classes.timelapseCards} ${paperColor('radar')}`}>
                                        <Typography className={classes.centerText}>
                                        {"Radar"}
                                            <IconButton className={classes.iconButton} onClick={() => {radarClicked()}}>
                                                <TrackChangesIcon className={`${classes.icon} ${iconColor('radar')}`} />
                                            </IconButton>
                                        </Typography>
                                </Paper>
                            </Grid>
                    </Grid>
            </Grid>

            <Grid item container xs={10}>
                <Media live={media.live} targetDay={selectedDay.time} radar={radar.live}/>
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