import getData from'../utils/getData'

const Home = async() => {
        const characters = await getData();
        const view = `

        <div class="parallax-container">
           

            <div class="video-container">
        <iframe width="853" height="500" src="https://www.youtube-nocookie.com/embed/hl1U0bxTHbY?controls=0" frameborder="0" allowfullscreen></iframe>
      </div>
        </div>
        
        <div class="container">
            <div class="row">
                ${characters.results.map(character=>`
                
                
                    <div class="col s12 m6 l4" style="padding:5px;">
                        <article class=" card-panel grey lighten-5 z-depth-1" >
                            <a href="#/${character.id}/" >
                                <img class="materialboxed responsive-img z-depth-1" src="${character.image}" alt="${character.name}">
                                <h6 class="teal-text">${character.name}</h6>
                                <p href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
                                    <i class="material-icons">add</i>
                                </p>
                                                        

                                </a>

                        </article>
                    </div>  
                        `

                ).join('')}
            
                </div>
            </div>
            `;
    return view;

};

export default Home;
