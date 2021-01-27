import React from 'react'
import "./jumbo.css"

import Video from './video'
import LiveImage from './liveImage'

class Jumbo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetDay: this.props.targetDay,
        };
    }


    getTargetDay (x) {
        var yesterday = new Date(Date.now() - 86400000 * x);
        let day   = yesterday.getDate();
        let month = yesterday.getMonth();
        let year  = yesterday.getFullYear();

        console.log(`${month}-${day}`)

        return `${month}-${day}-${year}`
    }

    isVideo() {
        if(this.props.video) {
            return (
                <Video targetDay={this.getTargetDay(1)}/>
            )
        } else {
            return (
                <LiveImage />
            )
        }
    }

    render() {
        return(
            <div id="jumbo-container">
                <div id="Jumbo">
                    {this.isVideo()}
                </div>
            </div>
        )
    }
}

export default Jumbo