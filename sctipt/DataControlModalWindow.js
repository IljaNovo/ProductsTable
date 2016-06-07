function DataControlModalWindow(modalFormName, controls, options) {
    ModalWindow.call(this, modalFormName);
    this.controls = controls;
    if (options.validation === true) {
        validater.addValidateForFields(controls, options);
    }
}

DataControlModalWindow.prototype.getFieldItem = function (selector) {
    return $(this.modalFormName + " " + selector).val();
}

DataControlModalWindow.prototype = Object.create(ModalWindow.prototype);
DataControlModalWindow.prototype.constructor = DataControlModalWindow;

DataControlModalWindow.prototype.clearFields = function() {
    this.controls.forEach(function(item, i, controls) {
        if (item.typeControl === "text") {
            $(item.selector).val("");
        }
    });
}
