import React, { Fragment } from 'react'

import './App.css'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'

function App() {
  return (
    <Fragment>
      <Header>
        <Nav />
      </Header>
    </Fragment>
  )
}

export default App
