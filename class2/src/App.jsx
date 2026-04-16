// import React from 'react'
// import Card from "./components/Card.jsx"
// import Button from "./components/Button.jsx"

// const App = () => {

//   const user=["shivam","sundram","feku", "rey","sam"]

//   return (
//     <div className='bg-black h-screen p-3 '>

//       {user.map(function(elem){
//         return <Card user={elem} />
        
//       })}

//     {/* <Card user="shivam" age="20" />
//      <Card user="shiva" age="20" />
//       <Card user="shiv" age="20" />

//     <Button text="Buy Now"/>  
//     <Button text="explore"/>  
//     <Button text="Home"/>   */}

      

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Card from "./components/Card.jsx"

// const App = () => {

//   const users=["shivam","satyam","sarthak"]
//   return (
//     <div className='bg-black h-screen p-6 '>
//       {users.map(function(elem){
//         return <Card user={elem} />
        
//        })}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from "./components/Card.jsx"

// const App = () => {

//   const user=["shivam","jay","raj"]
//   const age=[20,22,23]
//   const gender=["male","Female","trans"]
//   return (
//     <div className='bg-black h-screen p-6'>
//       {user.map((elem, index) => (
//         <Card 
//           key={index}
//           user={elem}
//           age={age[index]}
//           gender={gender[index]}
//         />
//       ))}
      
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Card from "./components/Card.jsx"

// const App = () => {
//   return (
//     <div className='bg-black h-screen p-4'>
//       <Card user="Shivam" skills={["frontend","backend","MERN"]}/>
//       <Card user="Shivam" skills={["frontend","backend","MERN"]}/>
//       <Card user="Shivam" skills={["frontend","backend","MERN"]}/>
      
//     </div>
//   )
// }

// export default App




import React from 'react'
import Card from "./components/Card.jsx"
import Male from "./components/Male.jsx"
import Female from "./components/Female.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  const user1={
    name:"shivam",age:12,gender:"male"
  }
  const user2={
    name:"shivam",age:12,gender:"male"
  }
  const user3={
    name:"shivam",age:12,gender:"male"
  }
  const btnclicked=()=>{
    console.log("hello");
    
  }
  
  return (
    <div className='bg-black h-screen p-4'>

    <Navbar color="green" title="Sheryians" func={["home","Class","Callback","About us"]}/>

      {
        user1.gender=="female" ?<Male/> : <Female/>
      }
      <Card />
       <button 
       onClick={btnclicked}
       className='bg-green-400 active:scale-95 font-extrabold text-3xl p-3'>Click to download</button>
    </div>
  )
}

export default App

