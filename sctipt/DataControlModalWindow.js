function DataControlModalWindow(modalFormName, fields, button, options) {
    ModalWindow.call(this, modalFormName);
    this.fields = fields;
    this.options = options;
    this.button = button;
    if (options.validation === true) {
        validater.addValidateForFields(fields, options);
    }
}

DataControlModalWindow.prototype.getFieldItem = function (selector) {
    return $(this.modalFormName + " " + selector).val();
}

DataControlModalWindow.prototype = Object.create(ModalWindow.prototype);
DataControlModalWindow.prototype.constructor = DataControlModalWindow;

DataControlModalWindow.prototype.clearFields = function() {
    this.fields.forEach(function(item, i, fields) {
        if (item.typeControl === "text") {
            $(item.selector)
                .val("")
                .css("border-width", "1px")
                .css("border-color", (this.options.defaultBorder || "#A9A9A9"))
                .css("border-style", "solid");
        }
    }.bind(this));
}

DataControlModalWindow.prototype.addRow = function() {
    $(this.button.selector).click(function() {
        if (validater.valideAllFields(this.fields, this.options)) {
        // Добавить строку
            var y = 10;
            this.closeForm(this.clearFields());
        }
    }.bind(this));
}