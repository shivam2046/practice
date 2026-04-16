import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className=' text-white font-bold flex items-center justify-between p-4'>
      <h1>{props.title}</h1> 
      <div className=' flex flex-row justify-between gap-12'>
        {props.func.map(function(elem){
            return <h2>{elem}</h2>
        })}


       
      </div>
    </div>
  )
}

export default Navbar
