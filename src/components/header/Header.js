import React from 'react';

export default function Header(props){
  return(
    <header className="header flex">
      <div className="size-container">
        <h1 className="logo xl-heading-size">Torre</h1>
        <nav className="menu flex">
          <input className="input" type="search"></input>
          {/* added span for styling icon search */}
          <span className="input__search-icon"></span>
          <button className="menu__button">Search</button>
        </nav>
      </div>
    </header>
  )
}