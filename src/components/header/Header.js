import React, { useState } from 'react';
import Magnifier from '../../assets/magnifier.png' 

export default function Header(props){
  const { changeName } = props;
  const [ input, setInput ] = useState("")
  const [ imageClick, setImageClick] = useState(false);
  let form = "form display-none";

  const hadleImageClick = () => {
    setImageClick(!imageClick)
  }

  const handleChange = event => {
    setInput(event.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName(input)
  }

  if(imageClick) {
    form = "form flex"
  } else {
    form = "form  display-none"
  }

  return(
    <header className="header size-container flex">
      <h1 className="logo xl-heading-size">Torre</h1>
      <nav className="menu flex">
        <form onSubmit={handleSubmit}className={form}>
          <input 
            className="input"
            type="search"
            value={input}
            onChange={handleChange}
          />
          <button className="menu__button">Search</button>
        </form>
        <img className="input__search-icon" src={Magnifier} alt="magnifier" onClick={hadleImageClick}/>
      </nav>
    </header>
  )
}