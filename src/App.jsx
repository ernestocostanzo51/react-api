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
    <div className='section pb-4 bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
                <nav class="navbar navbar-expand-sm navbar-light">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Autori Uomo</a> 
                                <a class="nav-link active" aria-current="page" href="#">Autori Donna</a> 
                            </div>
                </nav>
          </div>
        </div>
      </div>
    </div>


    <div className='section bg-secondary'>
      <div className='container'>
        <div className='row'>
          {autori.map(autore => (
            <div className='col-6 mb-3 mt-2' key={autore.id}> 
              <div className='card bg-body'>
                <img src={autore.image} className="card-img-top p-5"/>
                <div className='card-body'>
                  <h5 className='card-text'>{autore.name}</h5>
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
