"use strict";
console.log("Let's get this party started!");

const $form = $('#search-giphy');
const $searchButton = $('#search-button');
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';


/** Takes in event and calls getFormVal*/
function getSearchValue(e) {
  e.preventDefault();
  const formVal = $('#form-input').val();
  return getFormVal(formVal);
}

/**Takes in a string
 * and finds JSON object and finds the first giphy
 * then calls appendGiphy */
async function getFormVal(formVal) {
  let response = await axios.get(" http://api.giphy.com/v1/gifs/search",
    { params: { q: formVal, api_key: API_KEY } });
  const giphy = response.data.data[0].images.original.url;
  return appendGiphy(giphy);
}


$searchButton.on('click', getSearchValue);


/** Adds giphy onto DOM*/
function appendGiphy(giphy) {
  $("#new-giphy").append($(`<img src= ${giphy}>`));
}

/** Clears giphys from DOM */
function emptyGiphy(e) {
  let $giphyContainer = $("#new-giphy");
  $giphyContainer.empty();
}

$("#remove-button").on('click', emptyGiphy);