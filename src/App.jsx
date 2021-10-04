import React, { Fragment } from 'react'

import Header from './layout/header/Header'
import Nav from './layout/nav/Nav'
import Main from './layout/main/Main'
import Footer from './layout/footer/Footer'

function App() {
  return (
    <Fragment>
      <Header>
        <Nav />
      </Header>

      <Main />

      <Footer>
        <Nav />
      </Footer>
    </Fragment>
  )
}

export default App
