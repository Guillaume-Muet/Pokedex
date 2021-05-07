document.addEventListener('DOMContentLoaded', () => {

    let API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=36';
    /** let IMG_URL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`; */
    let input_name = document.querySelector('#name');
    let input_type = document.querySelector('#type');

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let pokemons = data.results;

            for(let i = 0; i < pokemons.length; i++) {
                let url_pokemon = pokemons[i].url;

                fetch(url_pokemon)
                    .then(res => res.json())
                    .then(data => {
                        let name = data.name;
                        let id = i+1;
                        let image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
                        let type = data.types[0].type.name;
            
                        let container = document.querySelector('.container');

                        let Pokemon_Div = document.createElement('div');
                        Pokemon_Div.setAttribute('class', 'pokemon');
                        Pokemon_Div.innerHTML = `<div class="image-circle">
                                                    <img src="${image}" alt="">
                                                 </div>
                                                 <h4> #00${id} </h4>
                                                 <h3 id="name">${name}</h3>
                                                 <h5 id="type">Type: ${type}</h5>`;
                        
                        container.appendChild(Pokemon_Div);
                })
            } 
        });

        setTimeout(() => {
            let Poke_Div = document.querySelectorAll('.pokemon');
            for(let i = 0; i < Poke_Div.length; i++) {
                /** Récupérer value du h5 pour choisir background DIV.. */
                let type = Poke_Div[i].lastElementChild.textContent.split(' ');

                switch(type[1]) {
                    case 'grass':
                        Poke_Div[i].style.background = '#dbfbde';
                        break;
                    case 'fire':
                        Poke_Div[i].style.background = '#dcbecc';
                        break;
                    case 'water':
                        Poke_Div[i].style.background = '#daf0fc';
                        break;
                    case 'bug':
                        Poke_Div[i].style.background = '#dcc080';
                        break;
                    case 'normal':
                        Poke_Div[i].style.background = '#dddbde';
                        break;
                    case 'poison':
                        Poke_Div[i].style.background = '#afed8b';
                        break;
                    case 'electric':
                        Poke_Div[i].style.background = '#f9f5ca';
                        break;
                    case 'ground':
                        Poke_Div[i].style.background = '#f4e3d7';
                        break;
                    case 'fairy':
                        Poke_Div[i].style.background = '#f4e8ed';
                        break;
                    default:
                        Poke_Div[i].style.background = 'white';
                }
            }
        }, 700);

        input_name.addEventListener('blur', () => {
            if(input_name.value != '') {
                let value = input_name.value;
                let div_pokemon = document.querySelectorAll('.pokemon');
                for(let i = 0; i < div_pokemon.length; i++) {
                    if(div_pokemon[i].children[2].textContent === value) {
                      for(let i = 0; i < div_pokemon.length; i++) {
                          div_pokemon[i].style.display = 'none';
                      }
                      div_pokemon[i].style.display = 'block';
                    }
                    setTimeout(() => {
                        div_pokemon[i].style.display = 'block';
                        input_name.value = '';
                    }, 4000);
                }
            }
        });
        input_type.addEventListener('blur', () => {
            if(input_type.value != '') {
                let value = input_type.value;
                let div_pokemon = document.querySelectorAll('.pokemon');
                
                switch(value) {
                    case 'grass':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'grass') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'bug':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'bug') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'fire':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'fire') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'water':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'water') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'normal':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'normal') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'poison':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'poison') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'fairy':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'fairy') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'ground':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'ground') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    case 'electric':
                        for(let i = 0; i < div_pokemon.length; i++) {
                            div_pokemon[i].style.display = 'none';
                            if(div_pokemon[i].lastElementChild.textContent.split(' ')[1] === 'electric') {
                                div_pokemon[i].style.display = 'block';
                            }
                            setTimeout(() => {
                                div_pokemon[i].style.display = 'block';
                                input_type.value = '';
                            }, 3000);
                        }
                        break;
                    }
            }
        });

});