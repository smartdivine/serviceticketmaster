import React, { useState } from 'react';


const Home = () => {

    const [displayCard, setDisplayCard] = useState(false)


    return (
        <div>
            {displayCard ? (
                <h1 onClick={() => setDisplayCard(true)}>Display Card ON</h1>
            ) : (
                <h1 onClick={() => setDisplayCard(false)}>Display Card OFF</h1>
            )}
        </div>
    )
}

export default Home;