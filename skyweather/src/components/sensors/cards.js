import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Paper, Grid, Card, CardContent } from '@material-ui/core';

import { WiCelsius, WiHumidity, WiThermometer } from "weather-icons-react";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    sensor: {
        textAlign: 'center',
        color: spartan.purple
    }
}));


const spartan = {
    red: '#D61D42',
    purple: '#4F2D7F'
}

export default function Cards(props) {

    const classes = useStyles();


    const displayTemp = () => {
        let temp = props.data.sensors[0].value;

        return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classes.sensor}>
                <WiThermometer item size={40} color={spartan.purple}/>
                <Typography item>{temp}</Typography>
                <WiCelsius item size={35} color={spartan.purple} />

            </Grid>
        </div>
        )
    }

    const displayHumidity = () => {
        let humidity = props.data.sensors[1].value;

        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classes.sensor}>
                    <Typography item>{Math.floor(humidity)}</Typography>
                    <WiHumidity item size={40} color={spartan.purple} />
                </Grid>
            </div>
        )
    }



    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
                <Grid item xs={'auto'}>
                    <Card className={classes.sensorCard}>
                        <CardContent >
                            {props.data.sensors ? displayTemp() : ''}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={'auto'}>
                    <Card className={classes.sensorCard}>
                        <CardContent>
                            {props.data.sensors ? displayHumidity() : ''}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}