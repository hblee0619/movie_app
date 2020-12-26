# App soccer

import React from 'react';
import PropTypes from 'prop-types';

const roaster = [
  {
    id: 1,
    name: 'Messi',
    image: './lineup1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Suarez',
    image: './lineup2.jpg',
    rating: 4
  }
];

function Lineup({name, picture, rating}) {
  return (
    <div>
      <h1>Today's player is {name}</h1>
      <h2>His overall rating is {rating}</h2>
      <img src = {picture} alt = {name}/>
    </div>
  );
}

Lineup.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {roaster.map(player => (
        <Lineup key = {player.id}
                name = {player.name}
                picture = {player.image}
                rating = {player.rating} />
      ))}
    </div>
  );
}

export default App;