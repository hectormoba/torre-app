import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';
import { getUserBio } from './helpers/api'
import Header from './components/header/Header'
import Avatar from './components/avatar/Avatar'
import Skills from './components/skills/Skills'

export default function App(props){
 const [user, setUser] = useState({});

  useEffect(() => {
    getUserBio("https://bio.torre.co/api/bios","torrenegra", setUser);
  }, [])

  return(
    <Fragment>
      <Header />
      <main>
        <Avatar user={user} />
        <Skills user={user} />
      </main>
    </Fragment>
  )
}