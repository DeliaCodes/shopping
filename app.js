'use strict';

//first the variable to store the list
var data = {
	items : []
};

//Add function
var addItem = function(data, item) {
    data.items.push(item);
};

//display function - is there a cleaner way to return the elements here?
var renderList = function(data, element) {
    var itemsHTML = data.items.map(function(item) {
        return '<li>' + '<span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    element.html(itemsHTML);
};

//captures submit data, adds it, renders it, maybe
$('#shopping-list-add-input').submit(function(event) {
    event.preventDefault();
    addItem(data, $('.shopping-list').val());
    renderList(data, $('.shopping-list'));
});

//delete data function - I don't think I need to call this
$('.shopping-item-delete').submit(function () {
	event.preventDefault();
	this.closest('.shopping-item').hide();

});

//check data function
$('.shopping-item-toggle').submit(function(){
	event.preventDefault();
	this.closest('span').toggleClass('.shopping-item__checked')
});

//

