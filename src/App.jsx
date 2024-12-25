import React from 'react'
import Data from './Components/Data/data'
import './App.css'
import Crad  from './Components/Card/Crad'

const App =()=> {
  // console.log(Data)
  return (
   <div>
      
  {
    Data.map((e,i)=>{
      return(
        
        <Crad  key = {e.id} image = {e.image} title ={e.title} price ={e.price} description={e.description} category={e.category}/>
        
      )
    })
  }
 </div>
  )
}

export default App

