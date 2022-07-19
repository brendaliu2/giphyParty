console.log("Let's get this party started!");

const $form = $('#search-giphy');
const $searchButton = $('#search-button');

function getFormVal(e) {
  e.preventDefault();
  const formVal = $('#form-input').val();
  console.log(formVal);
}

$searchButton.on('click', getFormVal);


async function getSearchValue() {
  let response = await axios.get(" http://api.giphy.com/v1/gifs/search",
    { params: { p: formVal } });
}