import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { IconButton, Paper, Typography  } from '@material-ui/core';

import MovieCreationIcon from '@material-ui/icons/MovieCreation';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    timelapseCards: {
        margin: '1vh',
        padding: '.5vh'
    },
    icon: {
        padding: '1%',
        fontSize: '2vh',
        margin: '0'
    },
    iconButton: {
    }
}));


export default function Dates (props) {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.timelapseCards}>
                    <Typography>
                    {props.text}
                        <IconButton className={classes.iconButton}>
                            <MovieCreationIcon className={classes.icon} color="secondary" />
                        </IconButton>
                    </Typography>
            </Paper>
        </div>
    )

}