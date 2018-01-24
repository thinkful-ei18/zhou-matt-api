'use strict'
/* global shoppingList, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.createItem('pears', ()=> {
  api.getItems( (items) => {
    console.log(items)
  })
})
