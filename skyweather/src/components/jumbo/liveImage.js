import React from 'react'

import "./jumbo.css"

let recentURL = "https://storage.googleapis.com/raw_weather_photos/recent"

class LiveImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className='videoTag' src={recentURL} alt="no live image, sorry." />
        );
      }
}

export default LiveImage