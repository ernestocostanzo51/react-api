import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  

  const linkApi = "https://lanciweb.github.io/demo/api/actors/"

  useEffect(() =>{
    fetch(linkApi)
    .then(res => res.json())
    .then(data => {
      data.forEach(autore =>{
        console.log(autore.name)
      })

    })
  },[])


  return (
    <>
    
    </>
  )
}

export default App
