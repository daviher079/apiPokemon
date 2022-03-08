import { useEffect, useState } from "react";
function Pokemon(props) {

    const {url} =props;
    const [datosPokemon, setdatosPokemon] = useState([])
    const [habilidades, setHabilidades] = useState([]);
    const [tipos, setTipo] = useState([]);
    const [image, setImage] = useState('');
    
    const peticion = async () => {
        let peticionDatosPokemon = await fetch(url);
        let datosJSON = await peticionDatosPokemon.json();
        
        setdatosPokemon(datosJSON);
        setHabilidades(datosJSON.abilities);
        setTipo(datosJSON.types);
        setImage(datosJSON.sprites.front_shiny);
    }

    useEffect((url) => {
        peticion({url})
    }, [])


   
    return ( 
        <section className="miSeccion">
            <div className="datos">
                
                <div className="elemento">
                    <h6>Habilidades:</h6>
                    <ul>{
                        habilidades.map((habilidad, index)=>
                            <li key={index}>{habilidad.ability.name}</li>
                        )    
                    }</ul>
                </div>

                <div className="elemento">
                    <h6>Tipos:</h6>
                    <ul>{

                        tipos.map((tipo, index)=>
                            <li key={index}>{tipo.type.name}</li>
                        )
                    }</ul>
                </div>

                <div className="elemento">
                    <h6>Datos Básicos:</h6>
                    <ul>
                        {
                            <>
                                <li>Experiencia: {datosPokemon.base_experience}</li>
                                <li>Altura: {datosPokemon.height}</li>
                                <li>Peso: {datosPokemon.weight}</li>
                            </>
                        }
                    </ul>
                </div>

            </div>
            <div className="image">
                {
                    <img src={image} alt="Prueba" height="150px"/>
                }
            </div>
        </section>
     );
}

export default Pokemon;