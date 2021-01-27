import React from 'react'
import "./nav.css"

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     video: true,
        //     live : false
        // };
    }

    getTargetDay (x) {
        var yesterday = new Date(Date.now() - 86400000 * x);
        let day   = yesterday.getDate();
        let month = yesterday.getMonth();
        let year  = yesterday.getFullYear();

        return `${month + 1}/${day}/${year} (${x} ${x === 1 ? `day`: `days`} ago)`
    }

    renderItem(x) {
        return (
            <li>{this.getTargetDay(x)}</li>
        )
    }

    renderList() {
        return(
            <ul>
                {this.renderItem(1)}
                {this.renderItem(2)}
                {this.renderItem(3)}
                {this.renderItem(4)}
                {this.renderItem(5)}
                {this.renderItem(6)}
                {this.renderItem(7)}
            </ul>
        )
    }

    render() {
        return(
            <div id="nav-container">
                <div id="Nav">
                    <div className='buttons'>
                        <button >Timelapse</button> 
                        <button>Live</button>
                    </div>

                    {this.props.video ? this.renderList(): null}
                </div>
            </div>
        )
    }
}

export default Nav