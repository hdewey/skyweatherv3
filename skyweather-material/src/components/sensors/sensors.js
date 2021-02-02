import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Cards from './cards'

import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));


export default function Sensors (props) {

    const classes = useStyles();
    
    const [data,setData] = useState([]);

    const sensorData = () => {

        fetch('https://storage.googleapis.com/raw_weather_photos/recentData.json',
        {
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson)
            setData(myJson);
        });
    }
    

    useEffect( () => {
        sensorData()
    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.timelapseCards}>
                    <Cards data={data}/>
            </Paper>
        </div>
    )

}