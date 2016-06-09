function DeleteModalWindow(modalFormName) {
    ModalWindow.apply(this, arguments);
}

DeleteModalWindow.prototype = Object.create(ModalWindow.prototype);
DeleteModalWindow.prototype.constructor = DeleteModalWindow;

DeleteModalWindow.prototype.addDeleteEvent = function(selector) {
    $(selector).click(function() {
       var parsedClasses = this.clickEvent.target.className.split(" ");
        var index = Number(parserID.parse(parsedClasses[parsedClasses.length - 1]));
        this.deleteItem(index);
        this.closeForm();
    }.bind(this));
}

DeleteModalWindow.prototype.deleteItem = function(index) {
    dataBaseManager.removeItem(index);
    formManager.deleteTableRow(index);
}