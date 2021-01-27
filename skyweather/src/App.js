import React from 'react'
import './main.css';

import Header from './components/header/header'
import Jumbo from './components/jumbo/jumbo'
import Nav   from './components/nav/nav'
import Data from './components/data/data'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          video: true,
          daysAgo: 1
      };
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Jumbo video={this.state.video} />
      </div>
    )
  }
  
}

export default App;
