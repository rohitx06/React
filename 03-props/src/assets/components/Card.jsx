import React from 'react'

function Card(name) {
  return (
    <div className='Card'>

      <img src="https://images.unsplash.com/photo-1760753145427-c327d09ace00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" alt="" />
      <h1>{name.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>About Profile</button>
    </div>
  )
}

export default Card