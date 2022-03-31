import React, { Fragment } from 'react';
import Header from './components/header/Header'
import Avatar from './components/avatar/Avatar'
import Skills from './components/skills/Skills'

export default function App(props){
  return(
    <Fragment>
      <Header />
      <main>
        <Avatar />
        <Skills />
      </main>
    </Fragment>
  )
}