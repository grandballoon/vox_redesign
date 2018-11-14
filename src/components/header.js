import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  return (
    <React.Fragment>
    <h1>The FDA may soon ban flavored vapes and menthol cigarettes</h1>
    <h4>It’s likely a response to new data showing a 75 percent increase in the use of vaping devices since 2017.</h4>
    <h5>By Julia Belluz@juliaoftorontojulia.belluz@voxmedia.com  Nov 14, 2018, 3:10pm EST</h5>
    <FontAwesomeIcon icon={["fab", "facebook"]} color="##3b5998" />
    <FontAwesomeIcon icon={["fab", "twitter"]} color="#1DA1F2" />
  </React.Fragment>
  )

}

export default Header
