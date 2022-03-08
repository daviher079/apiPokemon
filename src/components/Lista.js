import Pokemon from './Pokemon';
function Lista(props) {
    
    const {nombres} = props;
    


    return ( 

        <section className="lista">
            {
                nombres.map((nombre, index)=>{
                    
                    return(
                        <div key={index} className="pokemon">
                            <h4>{nombre.name[0].toUpperCase() + nombre.name.slice(1)}</h4>
                            <Pokemon url={nombre.url}/>
                        </div>
                    ) 
                })
            }
        </section>
     );
}

export default Lista;