import React from 'react'

import "./jumbo.css"

let timelapseURL = "https://storage.googleapis.com/sstx-timelapse/"

class Video extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <video className='videoTag' autoPlay loop controls>
                <source src={`${timelapseURL + this.props.targetDay}.mp4`} type='video/mp4' />
            </video>
        );
      }
}

export default Video