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
                <Grid direction="row" justify="center" alignItems="center">

                    <Grid item xs={2}>
                        <Card>
                            <CardContent>
                                Temp:
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card>
                            <CardContent>
                                Humidity:
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )

}