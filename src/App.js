import logoPokemon from './img/logoPokemon.png'
import './App.css';
import Lista from './components/Lista';
import { useEffect, useState } from 'react';


function App() {
  
  const [nombres, setNombres] = useState([]);
  

  useEffect(()=>
  {
    const nombrePokemon = async() =>
    {
      let peticion ='https://pokeapi.co/api/v2/pokemon?limit=50';
      const peticionInicial = await fetch(peticion);
      const peticionResultados = await peticionInicial.json();
      setNombres(peticionResultados.results);
    }
    nombrePokemon()
  }, []);
  

  return (
    
    <div className="App">
      <header className="App-header">
        <div className='miCabecera'>
          <img src={logoPokemon} className="logo" alt="Logo"/>
        </div>
        
        <div className='contenedor'>
          {
            
            <Lista nombres={nombres} />

            
          }
        </div>
      </header>
    </div>
  );
  
}
export default App;
