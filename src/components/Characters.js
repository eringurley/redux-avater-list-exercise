import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';


function Characters({ characters }) {
  const characterList = characters.map(character => (
    <Link to={`/characters/${character._id}`} key={character._id}>
      <li>
        <Character photoUrl={character.photoUrl} name={character.name} _id={character._id} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }))
};

export default Characters;
