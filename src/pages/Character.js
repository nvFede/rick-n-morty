import getHash from '../utils/getHash';
import getData from '../utils/getData';

export const Character = async () => {

    const id = getHash();
    const character = await getData(id);
  
    const { image, name,  episode, status, species, gender, origin, location} = character;
  
    const view = `
    <div class="valign-wrapper">
        <div class="row">
            <article class="col m5">
            <img class="circle responsive-img z-depth-2" src="${image}"alt="${name}">
            
            </article>
            <article class="col m7">
                <h2>${name}</h2>
                <p>Episodes: ${episode.length}</p>
                <p>Status: ${status}</p>
                <p>Species: ${species}</p>
                <p>Gender: ${gender}</p>
                <p>Origin: ${origin.name}</p>
                <p>Last Location: ${location.name}</p>
            </article
        </div>  
    </div>
    `;
    return view;
  };

export default Character;