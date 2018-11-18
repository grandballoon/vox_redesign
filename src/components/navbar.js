import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class navbar extends React.Component {

  renderStories = () => {
    if (this.props.isSaved) {
      return (
        <div className="saved-story">
          <img className="savedImg" src={require('../images/juul.jpg')}/>
          <h3>The FDA may soon ban flavored vapes and menthol cigarettes</h3>
        </div>
      )
    } else {
      return (
        <div id="no-stories">
          <h3>You don't have any saved stories</h3>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="hocNavbar">
        <div id="spacer"></div>
        <img id="logo" src={require('../images/vox.png')}/>
        <div className="navbar">
          <p className="headItem"><b>FUTURE PERFECT</b></p>
          <p className="headItem"><b>EXPLAINERS</b></p>
          <p className="headItem"><b>THE GOODS</b></p>
          <p className="headItem"><b>POLITICS & POLICY</b></p>
          <p className="headItem"><b>CULTURE</b></p>
          <p className="headItem"><b>SCIENCE & HEALTH</b></p>
          <p className="headItem"><div id="my-stories"><b>MY STORIES <span className="arrow">&#x25BC;</span></b>
            <div className="dropdown-content">
              {this.renderStories()}
            </div>
          </div></p>
          <p className="headItem"><FontAwesomeIcon icon={["fab", "facebook"]} color="##3b5998" /></p>
          <p className="headItem"><FontAwesomeIcon icon={["fab", "twitter"]} color="#1DA1F2" /></p>
        </div>

      </div>
    )
  }

}

export default navbar
