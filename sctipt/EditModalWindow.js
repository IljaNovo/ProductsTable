function EditModalWindow(modalFormName) {
    ModalWindow.apply(this, modalformName);
}

EditModalWindow.prototype = Object.create(ModalWindow.prototype);
EditModalWindow.prototype.constructor = EditModalWindow;

EditModalWindow.prototype.setName = function (name, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).val(name);
}

EditModalWindow.prototype.setEmail = function (email, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).val(email);
}

EditModalWindow.prototype.setCount = function (count, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).val(count);
}

EditModalWindow.prototype.setPrise = function (prise, fieldSelector) {
    $(this.modalFormName + " " + fieldSelector).val(prise);
}
