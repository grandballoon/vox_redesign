import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowsAlt, faBookmark } from '@fortawesome/free-solid-svg-icons'
import ArticleContainer from './components/articlecontainer'


library.add(faTwitter, faFacebook, faArrowsAlt, faBookmark)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleContainer />
      </div>
    );
  }
}

export default App;
