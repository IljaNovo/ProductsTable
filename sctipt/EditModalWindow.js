function EditModalWindow(modalFormName) {
    ModalWindow.apply(this, arguments);
}

EditModalWindow.prototype = Object.create(ModalWindow.prototype);
EditModalWindow.prototype.constructor = EditModalWindow;

EditModalWindow.prototype.setName = function (name, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).html(name);
}

EditModalWindow.prototype.setEmail = function (email, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).html(email);
}

EditModalWindow.prototype.setCount = function (count, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).html(count);
}

EditModalWindow.prototype.setPrise = function (prise, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).html(prise);
}
