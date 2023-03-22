import React, { useEffect, useState } from 'react';
import Contrie from '../Contrie/Contrie';

const Contries = () => {

    /* step 1 useState for load data */
    const [contries, setContries] = useState([]);

    /* step 2 useEffact for fetch api*/
    useEffect(() => {

        /* step3 for load the API */
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())

            /* step 4 set the data in setContries fuction*/
            .then(data => setContries(data))
    }, [])
    return (
        <div>
            <h1>Hello from Contries</h1>
            {/* step 5 Show the data Throw the HTML tag */}
            <h2>Total Contries: {contries.length}</h2>

            {/* onther map for console the data */}
            {
                contries.map(contrie => console.log(contrie))
            }

            <div className='main-container'>
                {
                    /* map() used for get every singel data from the arrey */
                    // contries.map(contrie => <Contrie name={contrie.name.common} population={contrie.population} area={contrie.area} img={contrie.flags.png}></Contrie>)

                    /* onther shortcut for destrutureing the contrie objact*/
                    contries.map(contrie => <Contrie
                         contrie={contrie} 
                         key={contrie.cca3}>
                        </Contrie>)
                }
            </div>



        </div>
    );
};

export default Contries;