import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <section>
      <h2>{character.name}</h2>
      <img src={character.photoUrl} />
      <p>{character.affiliation}</p>
      <p>{character.enemies}</p>
      <p>{character.allies}</p>
    </section>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    enemies: PropTypes.array,
    allies: PropTypes.array
  })
};

export default CharacterDetail;
