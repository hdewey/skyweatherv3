// should check state for live video

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    content: {
        width: '100%',
        height: '100%',
        borderRadius: '1vh'

    },
    rounded: {
        borderRadius: '1vh'
    }
    
}));


export default function Media (props) {

    const classes = useStyles();


    const showContent = () => {

        if (props.live) {
            let url = "https://storage.googleapis.com/raw_weather_photos/recent.jpg";
            return (
                <img className={classes.content} src={url} alt="" />
            )
        } else if(!props.live && props.targetDay) {
            let url = "https://storage.googleapis.com/sstx-timelapse/" + props.targetDay;
            return (
                <video className={classes.content} src={`${url}.mp4`} autoPlay loop controls type='video/mp4'>
                </video>
            )
        } else if (props.radar) {
            return (
                <iframe  height={'670'} width={10720/9} className={classes.rounded} src="https://embed.windy.com/embed2.html?lat=30.305&lon=-97.765&detailLat=30.288&detailLon=-97.764&width=670&height=1191&zoom=11&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
            )
        }
    }


    return (
        <div className={classes.root}>
                {showContent()}
        </div>
    )

}