const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/zhou-matt';
  
  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, (response) => {console.log('api response:', response)});

  return {
    BASE_URL,
    getItems,
  }
}())