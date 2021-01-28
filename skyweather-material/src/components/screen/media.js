// should check state for live video

import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    content: {
        width: '100%',
        height: '100%'
    },
    container: {
    }
}));


export default function Media (props) {

    let d = new Date();
    let day = '25';
    let month = d.getMonth();
    let year = d.getFullYear();

    const [targetDay, setDay] = useState({value: `${month}-${day}-${year}`})

    const classes = useStyles();

    const showContent = (isLive) => {

        if (isLive) {
            let url = "https://storage.googleapis.com/raw_weather_photos/recent";
            return (
                <img className={classes.content} src={url} alt="no live image, sorry." />
            )
        } else {
            let url = "https://storage.googleapis.com/sstx-timelapse/"
            return (
                <video className={classes.content} autoPlay loop controls>
                    <source src={`${url + targetDay.value}.mp4`} type='video/mp4' />
                </video>
            )
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {showContent(props.live)}
            </div>
        </div>
    )

}