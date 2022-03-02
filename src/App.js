import logoPokemon from './img/logoPokemon.png'
import './App.css';
import Lista from './components/Lista';
import {Fragment, useState } from 'react';


function App() {
  
  const [nombres, setNombres] = useState(null);
  const nombrePokemon = async() =>
  {
    let peticion ='https://pokeapi.co/api/v2/pokemon?limit=50';
    const peticionInicial = await fetch(peticion);
    const peticionResultados = await peticionInicial.json();
    setNombres(peticionResultados.results);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='miCabecera'>
          <img src={logoPokemon} className="logo" alt="Logo"/>
        </div>
        
        <div className='contenedor'>
          {
            nombres ? 
            (
              <Lista nombres={nombres} />

            ): (
              <Fragment>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={nombrePokemon} className="btn-search">Buscar Personajes</button>
              
            </Fragment>
            )
          }
            
        </div>
      </header>
    </div>
  );
}

export default App;
