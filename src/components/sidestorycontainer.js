import React from 'react'
import SideStory from './sidestory'

class SideStoryContainer extends React.Component {


render(){
  return (
    <div className="sidestory-container">
    <img className="side-header" src={require('../images/mostread.png')} alt=""/>
    <br/>
    <div className="sidestory">
      <img className="side-image" src={require('../images/mcraven.jpg')} alt=""/>
      <p className="side-title">Trump attacks retired Navy SEAL Adm. Bill McRaven, suggestts he should have gotten bin Laden sooner</p>
    </div>
    <div className="sidestory">
      <img className="side-image" src={require('../images/trump1.jpg')} alt=""/>
      <p className="side-title">Trump's latest interview with Fox News should make us glad he's mostly too lazy to govern</p>
    </div>
    <div className="sidestory">
      <img className="side-image" src={require('../images/trump2.jpg')} alt=""/>
      <p className="side-title">How the media should respond to Trump's lies, explainer by a linguist</p>
    </div>
  </div>
  )
}

}

export default SideStoryContainer
