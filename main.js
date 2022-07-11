export const API_KEY = '05348e9ad10d8405bd4e51119e3946f2';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const language = 'language=pt-BR';

let btn_random 
let imagemovie
let titlemovie
let descriptionmovie

window.addEventListener('DOMContentLoaded', (event) => {
  btn_random = document.querySelector('button');
  imagemovie = document.getElementById('image-movie');
  titlemovie = document.getElementById('title-movie');
  descriptionmovie = document.getElementById('description-movie');

  btn_random.addEventListener('click', meetMovies);
});

function randomMovie() {
  let first = 1 
  let latest = 998724

  return Math.floor(Math.random() * latest) + first
}


function meetMovies() {

  let title
  let description
  let image
  let id = randomMovie() 

  axios.get(`${BASE_URL}${id}?api_key=${API_KEY}&${language}`)

  .then(function(response){
    title = response.data.title;
    description = response.data.overview;
    image = `${IMG_URL}/${response.data.poster_path}`;

      if (description.length === 0){
        description = 'Descrição do filme não encontrada'
      }

      imagemovie.src = image;
      titlemovie.innerHTML= title;
      descriptionmovie.innerHTML = `${description.substring(0, 600)}`;
      console.log(typeof(response.data.title));
    })

    .catch(function (error) {
      console.log(error)
    })


};




