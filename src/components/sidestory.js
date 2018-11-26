import React from 'react'

const SideStory = (props) => {
  return (
    <div>
      <img src={require(`../images/${props.imageSrc}.jpg`)} alt=''/>
      <p>{props.headline}</p>
    </div>
  )
}


export default SideStory
