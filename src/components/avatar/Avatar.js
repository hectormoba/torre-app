import React from 'react';

export default function Avatar(props){
  const { user } = props;
  return(
    <section>
      <img alt="Avatar image" src={user.picture} />
      <h2 className="l-heading-size">
        { !user.name ?  "Loading..."
          :  user.name === null ?  "No name added"
          : user.name }
      </h2>
    </section>
  )
}