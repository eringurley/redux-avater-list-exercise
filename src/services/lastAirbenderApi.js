export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Sorry, could not get characters'; 
      return json;
    })
    .then(json => json.map(character => ({
      photoUrl: character.photoUrl || 'http://placegoat.com/200/200',
      name: character.name,
      _id: character._id
    })));
};
