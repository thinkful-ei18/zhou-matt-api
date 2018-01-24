'use strict'
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/zhou-matt';

  function getItems(callback) {
    $.getJSON(`${BASE_URL}/items`, callback)
  }

  function createItem(name, callback) {
    const newItem = JSON.stringify(
      {name: name});
    const setting = {
      url:`${BASE_URL}/items`,
      method:'POST',
      dataType:'json',
      contentType:'application/json',
      data:newItem,
      success: callback
    }

    $.ajax(setting)
  }

  function updateItem(id, updateData, callback) {
    const newItem = JSON.stringify(updateData);
    const setting = {
      url:`${BASE_URL}/items/${id}`,
      method:'PATCH',
      dataType:'json',
      contentType:'application/json',
      data:newItem,
      success: callback
    }

    $.ajax(setting)
  }

  return {
    BASE_URL,
    getItems,
    createItem,
    updateItem
  }
}())