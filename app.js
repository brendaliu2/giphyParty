"use strict";
console.log("Let's get this party started!");

const $form = $('#search-giphy');
const $searchButton = $('#search-button');
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';


/** Takes in event and returns JSON of searched value*/
async function getSearchValue(e) {
  e.preventDefault();
  const formVal = $('#form-input').val();
  let response = await axios.get(" http://api.giphy.com/v1/gifs/search",
    { params: { q: formVal, api_key: API_KEY} });
  const giphy = response.data.data[0].images.original.url;
  return appendGiphy(giphy);
}

$searchButton.on('click', getSearchValue);




 function appendGiphy(giphy){
    $("#new-giphy").append($(`<img src= ${giphy}>`));
 }

 function emptyGiphy(e) {
  let $giphyContainer = $("#new-giphy");
  $giphyContainer.empty();
 }

 $("#remove-button").on('click', emptyGiphy);