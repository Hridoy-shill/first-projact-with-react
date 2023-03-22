import React from 'react';
import './Contrie.css'

const Contrie = (props) => {
    const {area, name, population, flags, region} = props.contrie;
    return (
     
            <div className='contrie-div'>
                <img className='flags' src={flags.png} alt="" />
                <h1>Contrie: {name.common}</h1>
                <h2>Area: {area}</h2>
                <h3>Population: {population}</h3>
                <h4>Region: {region}</h4>
            </div>
        
    );
};

export default Contrie;