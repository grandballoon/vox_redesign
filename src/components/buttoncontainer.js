import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const ButtonContainer = (props) => {

  return(
    <div className="button-container">
      <button className="icon-button"><FontAwesomeIcon className="social-icon" icon={["fab", "facebook"]} color="##3b5998" /></button>
      <button className="icon-button"> <FontAwesomeIcon className="social-icon" icon={["fab", "twitter"]} color="#1DA1F2" /></button>
      <button className="icon-button" onClick={props.toggleFull}><FontAwesomeIcon className="social-icon" icon="arrows-alt"/></button>
      <button className="icon-button" onClick={props.toggleSaved}><FontAwesomeIcon className="social-icon" icon="bookmark" /></button>
      <br/>
      <br/>
    </div>
  )
}

export default ButtonContainer
