import React from 'react';

export default function Avatar(props){
  const { user } = props;
  return(
    <section className="size-container flex avatar">
      <figure className="container__image">
        <img className= "avatar__image" alt="Avatar image" src={user.picture} />
      </figure>
      <h2 className="l-heading-size">
        { !user.name ?  "Loading..."
          : user.name === null ?  "No name added"
          : user.name }
      </h2>
    </section>
  )
}