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
        if (item.additionElem !== undefined) {
            $(item.additionElem)
                .css("display", "none")
                .css("color", "red");
        }
    }.bind(this));
}

DataControlModalWindow.prototype.addAddingUpdateEvent = function(deleteModule) {
        $(this.button.selector).click(function() {
        if (validater.valideAllFields(this.fields, this.options)) {
            if (this.clickEvent.target.className === "add") {
                formManager.createTableRow(
                    $(this.fields[0].selector).val(),
                    $(this.fields[3].selector).val()
                )
                this.setInDataSourse();
                this.addOpenEvent(formManager.getCurentRow().linkName, function() {
                    var item = this.getItemsDataBase(this.getIndexUpdateItem());
                    $(this.fields[0].selector).val(item.name);
                    $(this.fields[1].selector).val(item.email);
                    $(this.fields[2].selector).val(item.count);
                    $(this.fields[3].selector).val(priceConvert.convertToDollars(item.price));
                }.bind(this));
                this.addOpenEvent(formManager.getCurentRow().editButtonName, function() {
                    var item = this.getItemsDataBase(this.getIndexUpdateItem());
                    $(this.fields[0].selector).val(item.name);
                    $(this.fields[1].selector).val(item.email);
                    $(this.fields[2].selector).val(item.count);
                    $(this.fields[3].selector).val(priceConvert.convertToDollars(String(item.price)));
                }.bind(this));
                deleteModule.addOpenEvent(formManager.getCurentRow().deleteButtonName);
            } else {
                this.updateDataSourse();
                this.updateRow();
            }
            this.closeForm(this.clearFields());
        }
    }.bind(this));
}

DataControlModalWindow.prototype.getItemsDataBase = function(index) {
    return dataBaseManager.getItem(index);
}

DataControlModalWindow.prototype.updateDataSourse = function() {
    dataBaseManager.updateItem(
        this.getIndexUpdateItem(),
        $(this.fields[0].selector).val(),
        $(this.fields[1].selector).val(),
        $(this.fields[2].selector).val(),
        $(this.fields[3].selector).val()
    );
}

DataControlModalWindow.prototype.updateRow = function() {
    $(formManager.getRowClasses(this.getIndexUpdateItem()).linkName).html(
        $(this.fields[0].selector).val()
    );
    $(formManager.getRowClasses(this.getIndexUpdateItem()).priseField).html(
        $(this.fields[3].selector).val()
    );
}

DataControlModalWindow.prototype.getIndexUpdateItem = function() {
    var parsedClasses = this.clickEvent.target.className.split(" ");
    var index = Number(parserID.parse(parsedClasses[parsedClasses.length - 1]));
    return index;
}

DataControlModalWindow.prototype.setInDataSourse = function() {
    dataBaseManager.setItem(
        $(this.fields[0].selector).val(),
        $(this.fields[1].selector).val(),
        $(this.fields[2].selector).val(),
        $(this.fields[3].selector).val()
    );
}

