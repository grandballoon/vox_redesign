import React from 'react'
import FullScreen from 'react-full-screen'
import Header from './header'
import ArticleText from './articletext'
import ButtonContainer from './buttoncontainer'
import NavBar from './navbar'
import SideStoryContainer from './sidestorycontainer'
import Test from './test'

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isFull: false, isSaved: false}
  }

  toggleSaved = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }


  toggleFull = () => {
    this.setState(prevState => ({
      isFull: !prevState.isFull
    }))
  }


  render(){
    return (
      <React.Fragment>
        <NavBar isSaved={this.state.isSaved}/>
          <FullScreen
          enabled={this.state.isFull}
          >
            <div className="header-container">
              <Header />
            </div>
              <ButtonContainer toggleFull={this.toggleFull} toggleSaved={this.toggleSaved} />
              <div className="body-container">
              <ArticleText />
              <SideStoryContainer />
            </div>
          </FullScreen>
      </React.Fragment>
    )

  }
}

export default ArticleContainer
