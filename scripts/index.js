'use strict'
/* global shoppingList, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();

  api.getItems((items) => {
    const item = items[0];
    
    const updateData = {
      name: 'Guava',
      checked: true
    }
    api.updateItem(item.id, updateData, () => {
      console.log('updated!');
    });
  });
});

// store.items.push(Item.create('apples'));