import React from 'react';

function Food({fav}) {
  return <h1> i like {fav} </h1>;
}

function App() {
  return ( 
  <div> 
    <h1> Hello </h1> 
    <Food fav="kimchi_78" /> 
    <Food fav="ramen" />
    <Food fav="samiopsal" />
    <Food fav="chunkumi" />
  </div>
  );
}

export default App;
