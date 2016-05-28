function AdditionModalWindow(modalFormName) {
    ModalWindow.apply(this, arguments);
}

AdditionModalWindow.prototype - Object.create(ModalWindow.prototype);
AdditionModalWindow.prototype.constructor = AdditionModalWindow;

AdditionModalWindow.prototype.clearFields = function () {
    arguments.forEach = [].forEach;
    
    arguments.forEach(function(item, i, arguments) {
        $(this.modalFormName + " " + item).val("");    
    });
}

AdditionModalWindow.prototype.getName = function (nameSelector) {
    return $(this.modalFormName + " " nameSelector).val();
}

AdditionModalWindow.prototype.getEmail = function (emailSelector) {
    return $(this.modalFormName + " " emailSelector).val();
}

AdditionModalWindow.prototype.getCount = function (countSelector) {
    return $(this.modalFormName + " " countSelector).val();
}

AdditionModalWindow.prototype.getPrice = function (priceSelector) {
    return $(this.modalFormName + " " priceSelector).val();
}
