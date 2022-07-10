import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const imagemovie = document.getElementById('image-movie');
const titlemovie = document.getElementById('tittle-movie');
const descriptionmovie = document.getElementById('description-movie');
const btn_random = document.querySelector('button');

btn_random.addEventListener('click', meeetMovies);

meetMovies(); {

  let title
  let description
  let image

  axios.get(`${BASE_URL}?api_key=${API_KEY}&${language}`)

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


