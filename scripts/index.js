'use strict'
/* global shoppingList, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();

  //====== getting data from server
  api.getItems((items) => {
    items.forEach( item => {
      store.addItem(item)
    })

    //========= update date in local file ======
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name:' + item.name);

    shoppingList.render()
  });
  // store.items == server.items
//=================================



});
//===============================================
// store.items.push(Item.create('apples'));