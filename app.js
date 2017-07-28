
var data = {
	items : []
};

var addItem = function(data, item) {
    data.items.push(item);
};

var renderList = function(data, element) {
    var itemsHTML = data.items.map(function(item) {
        return '<li>' + '<span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
    element.html(itemsHTML);
};

$('#shopping-list-add-input').submit(function(event) {
    event.preventDefault();
    addItem(data, $('.shopping-list').val());
    renderList(data, $('.shopping-list'));
});