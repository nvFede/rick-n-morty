import getHash from '../utils/getHash';
import getData from '../utils/getData';

export const Character = async () => {

    const id = getHash();
    const character = await getData(id);
  
    const { image, name,  episode, status, species, gender, origin, location} = character;
  
    const view = `
      <div class="Characters-inner">
        <articleclass="Characters-card">
          <imgsrc="${image}"alt="${name}">
          <h2>${name}</h2>
        </article>
        <articleclass="Character-card">
          <h3>Episodes: ${episode.length}</h3>
          <h3>Status: ${status}</h3>
          <h3>Species: ${species}</h3>
          <h3>Gender: ${gender}</h3>
          <h3>Origin: ${origin.name}</h3>
          <h3>Last Location: ${location.name}</h3>
        </article
      </div>
    `;
    return view;
  };

export default Character;