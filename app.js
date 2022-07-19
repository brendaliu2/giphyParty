console.log("Let's get this party started!");

const $form = $('#search-giphy');
const $searchButton = $('#search-button');
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

async function getSearchValue(e) {
  e.preventDefault();
  const formVal = $('#form-input').val();
  let response = await axios.get(" http://api.giphy.com/v1/gifs/search",
    { params: { q: formVal, api_key: API_KEY} });
  console.log(response.data);
}

$searchButton.on('click', getSearchValue);