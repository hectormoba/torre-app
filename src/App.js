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
 const [name , setName] = useState("torrenegra")

  useEffect(() => {
    getUserBio("https://bio.torre.co/api/bios", name, setUser);
  }, [name])

  return(
    <Fragment>
      <Header changeName={setName} />
      <main>
        <Avatar user={user} />
        <Skills user={user} name={name} />
      </main>
    </Fragment>
  )
}