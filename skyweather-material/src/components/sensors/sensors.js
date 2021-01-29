import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { IconButton, Paper, Typography, Grid, Card, CardContent  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));


export default function Sensors (props) {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.timelapseCards}>
                <Grid container spacing={1} direction="row"
  justify="space-around"
  alignItems="center" margin={1}>

                {
                    sensorData.map((sensor) => {
                        return (
                            <Grid item xs={3}>
                                <Card square className>
                                  <CardContent>
                                      {sensor.text + sensor.value}
                                  </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
                    

                </Grid>
            </Paper>
        </div>
    )

}

let sensorData = [
    {
        name: 'temp',
        value: 55,
        text: 'temp: '
    },

]