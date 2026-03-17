import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  const [autori, setAutori] = useState([])

  const linkApi = "https://lanciweb.github.io/demo/api/actors/"

  useEffect(() =>{
    fetch(linkApi)
    .then(res => res.json())
    .then(data => {
      setAutori(data)
    })
  },[])


  return (
    <>
    <div className='section'>
      <div className='container'>
        <div className='row'>
          {autori.map(autore => (
            <div className='col-6' key={autore.id}> 
              <div className='card'>
                <img src={autore.image} className="card-img-top p-5"/>
                <div className='card-body'>
                  <p className='card-text'>{autore.name}</p>
                  <p className='card-text'>Nato il: {autore.birth_year}</p>
                  <p className='card-text'>Nazionalita: {autore.nationality}</p>
                  <p className='card-text'>Biografia: {autore.biography}</p>
                  <p className='card-text'>Riconoscimenti: {autore.awards}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





    </>



  )
}

export default App
