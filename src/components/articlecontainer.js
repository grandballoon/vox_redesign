import React from 'react'
import Fullscreen from 'react-full-screen'
import Header from './header'

class ArticleContainer extends Component {
  this.state = {isFull: false}

  toggleFull = () => {
    this.setState(prevState => ({
      isFull: !prevState.isFull
    }))
  }


  render(){
    return (
      <FullScreen
      enabled={this.state.isFull}
      >
        <Header />  
      </FullScreen>
    )

  }
}
