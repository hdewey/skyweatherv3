import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Media from './media'
import { Paper, Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    nav: {
        height: '100%',
        width: '30%',
        backgroundColor: '#000',

        display: 'flex',
        justifyContent: 'center',
    },
    button: {

        border: '0',
        "&:focus": {
            outline: '0'
        
        }
    },
}));

export default function Screen () {

    const [media, setMedia] = useState({live: true})

    const classes = useStyles();

    const buttonClasses = `${classes.button} ${media.live ? classes.button.active : false}`
    
    return (
        <div className={classes.root}>
            <div className={classes.nav}>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button className={buttonClasses} onClick={() => setMedia({live:true})}>Live</Button>
                        <Button className={buttonClasses} onClick={() => setMedia({live:false})}>Timelapse</Button>
                    </ButtonGroup>
            </div>
            <Media live={media.live} />
        </div>
    )

}