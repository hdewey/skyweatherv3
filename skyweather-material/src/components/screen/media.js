// should check state for live video

import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import { Typography, Paper } from '@material-ui/core';

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

    const classes = useStyles();

    console.log(props.targetDay)

    const showContent = (isLive, target) => {

        if (isLive) {
            let url = "https://storage.googleapis.com/raw_weather_photos/recent";
            return (
                <img className={classes.content} src={url} alt="" />
            )
        } else {
            let url = "https://storage.googleapis.com/sstx-timelapse/"
            return (
                <video className={classes.content} autoPlay loop controls>
                    <source src={`${url + target}.mp4`} type='video/mp4' />
                </video>
            )
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {showContent(props.live, props.targetDay)}
            </div>
        </div>
    )

}