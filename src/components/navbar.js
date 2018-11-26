import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class navbar extends React.Component {

  renderStories = () => {
    if (this.props.isSaved) {
      return (
        <div className="saved-story">
          <img className="savedImg" src={require('../images/juul.jpg')}/>
          <h3 className="saved-title">The FDA may soon ban flavored vapes and menthol cigarettes</h3>
        </div>
      )
    } else {
      return (
        <div id="no-stories">
          <h3 className="saved-title">You don't have any saved stories</h3>
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
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fab", "twitter"]} color="#4c4e4d" /></p>
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fab", "facebook"]} color="#4c4e4d" /></p>
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fab", "youtube"]} color="#4c4e4d" /></p>
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fa", "rss"]} color="#4c4e4d" /></p>
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fa", "user"]} color="#4c4e4d" /></p>
          <p className="headItem"><FontAwesomeIcon size={42} icon={["fa", "search"]} color="#4c4e4d" /></p>

        </div>

      </div>
    )
  }

}

export default navbar
