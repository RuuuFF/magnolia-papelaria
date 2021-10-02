import React, { Fragment } from 'react'

import Header from './layout/header/Header'
import Nav from './layout/nav/Nav'
import Main from './layout/main/Main'

function App() {
  return (
    <Fragment>
      <Header>
        <Nav />
      </Header>

      <Main />
    </Fragment>
  )
}

export default App
