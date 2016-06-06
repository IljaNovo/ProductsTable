function DataControlModalWindow(modalFormName, controls, options) {
    ModalWindow.call(this, modalFormName);
    this.button = controls.button;
    this.fields = controls.fields;
    if (otions.validates !== undefined) {
        this.validates = options.validates;
    }
}

DataControlModalWindow.prototype = Object.create(ModalWindow.prototype);
DataControlModalWindow.prototype.constructor = DataControlModalWindow;

DataControlModalWindow.prototype.clearFields = function () {
    arguments.forEach = [].forEach;
    
    arguments.forEach(function(item, i, arguments) {
        $(this.modalFormName + " " + item).val("");    
    }.bind(this));
}

DataControlModalWindow.prototype.setDataInBase = function() {
        dataBaseManager.setItem( 
            this.getName("input[type='text'][name='productName']"),
            this.getEmail("input[type='text'][name='email']"),
            this.getCount("input[type='text'][name='productCount']"),
            this.getPrice("input[type='text'][name='productPrice']")
        );
    }

DataControlModalWindow.prototype.addRow = function(eventSelector) {
    $(eventSelector).click(function () {
        if (this.validateItemsField()) {
            formManager.createTableRow(
                this.getName("input[type='text'][name='productName']"),
                this.getPrice("input[type='text'][name='productPrice']")
            );
            this.addEditEvent(".productRow" + increment.get() + " .edit" + increment.get());
            this.addEditEvent(".productRow" + increment.get() + " .actionLink" + increment.get());
            this.addDeleteEvent(".productRow" + increment.get() + " .delete" + increment.get());
            this.setDataInBase();
            this.clearFields(
                "input[type='text'][name='productName']",
                "input[type='text'][name='email']",
                "input[type='text'][name='productCount']",
                "input[type='text'][name='productPrice']"
            );
            this.closeForm();
        }
    }.bind(this));
}

DataControlModalWindow.prototype.validateItemsField = function() {
    var validName = this.validateName();
    var validEmail = this.validateEmail();
    var validCount = this.validateCount();
    var validPrice = this.validatePrice();
    
    return validName && validEmail && validCount && validPrice;
}

DataControlModalWindow.prototype.addValidedFocuses = function() {
    this.validateNameField(); 
    this.validateEmailField();
    this.validateCountField();
    this.validatePriceField();
}

DataControlModalWindow.prototype.showDefaultField = function(nameField) {
    $("input[type='text'][name='"+ nameField +"']")
                .css("border-width", "1px")
                .css("border-color", "#A9A9A9")
                .css("border-style", "solid");
}

DataControlModalWindow.prototype.showErrorField = function(nameField) {
    $("input[type='text'][name='"+ nameField +"']")
                .css("border-width", "1px")
                .css("border-color", "red")
                .css("border-style", "solid");
}

DataControlModalWindow.prototype.validateName = function() {
    if (!validater.validateName($("input[type='text'][name='productName']").val())) {
        $("#add_new_modal_form .nameError").css("display", "inline");
        this.showErrorField("productName");
        return false;
    } else {
        $("#add_new_modal_form .nameError").css("display", "none");
        this.showDefaultField("productName");
        return true;
    }
}

DataControlModalWindow.prototype.validateEmail = function() {
    if (!validater.validateEmail($("input[type='text'][name='email']").val())) {
        $("#add_new_modal_form .emailError").css("display", "inline");
        this.showErrorField("email");
        return false;
    } else {
        $("#add_new_modal_form .emailError").css("display", "none");
        this.showDefaultField("email");
        return true;
    }
}

DataControlModalWindow.prototype.validateCount = function() {
    if (!validater.validateCount($("input[type='text'][name='productCount']").val())) {
          this.showErrorField("productCount");
          return false;
        } else {
        this.showDefaultField("productCount");
        return true;
    }
}

DataControlModalWindow.prototype.validatePrice = function() {
    if (!validater.validatePrice($("input[type='text'][name='productPrice']").val())) {
        this.showErrorField("productPrice");
        return false;
    } else {
        this.showDefaultField("productPrice");
        return true;
    }
}

DataControlModalWindow.prototype.validateNameField = function() {
    $("input[type='text'][name='productName']").focusout(function() {
        this.validateName(); 
    }.bind(this));
}
DataControlModalWindow.prototype.validateEmailField = function() {
    $("input[type='text'][name='email']").focusout(function() {
        this.validateEmail();
    }.bind(this));
}
DataControlModalWindow.prototype.validateCountField = function() {
    $("input[type='text'][name='productCount']").focusout(function() {
        this.validateCount();
    }.bind(this));
}
DataControlModalWindow.prototype.validatePriceField = function() {
    $("input[type='text'][name='productPrice']").focusout(function() {
        if (this.validatePrice()) {
            $("input[type='text'][name='productPrice']").val(
                priceConvert.convertToDollars($("input[type='text'][name='productPrice']").val())
            );
        }
    }.bind(this));
}

DataControlModalWindow.prototype.addDeleteEvent = function(deleteSelector) {
    var itemForRemove = formManager.getCurentRow();
    var removeItemIndex = increment.get();
    var flag = false;
    var deleteForm = new DeleteModalWindow("#delete_modal_form");
    deleteForm.addCloseEvent("#delete_modal_close");
    deleteForm.addCloseEvent("#delete_modal_form input[name='NoButton']");
    
    
    $(deleteSelector).click(function() {
        deleteForm.openForm();

        $("#delete_modal_form input[name='YesButton']").click(function() {
            dataBaseManager.removeItem(removeItemIndex);
            formManager.deleteTableRow(removeItemIndex);
            itemForRemove.remove();
            deleteForm.closeForm();
            $("#delete_modal_form input[name='YesButton']").unbind('click');
        }.bind(this));
    });
}

DataControlModalWindow.prototype.addEditEvent = function(editSelector) {
    var itemDataBase = increment.get();
    $(editSelector).click(function () {
        var editWindow = new EditModalWindow("#edit_modal_form");
        var o = dataBaseManager.getItem(itemDataBase);
            editWindow.setName(dataBaseManager.getItem(itemDataBase).name, ".name");
            editWindow.setEmail(dataBaseManager.getItem(itemDataBase).email, ".email");
            editWindow.setCount(dataBaseManager.getItem(itemDataBase).count, ".count");
            editWindow.setPrise(dataBaseManager.getItem(itemDataBase).price, ".price");
            editWindow.openForm();
            editWindow.addCloseEvent("#edit_modal_close");
    }.bind(this));
}

DataControlModalWindow.prototype.getName = function (nameSelector) {
    return $(this.modalFormName + " " + nameSelector).val();
}

DataControlModalWindow.prototype.getEmail = function (emailSelector) {
    return $(this.modalFormName + " " + emailSelector).val();
}

DataControlModalWindow.prototype.getCount = function (countSelector) {
    return $(this.modalFormName + " " + countSelector).val();
}

DataControlModalWindow.prototype.getPrice = function (priceSelector) {
    return $(this.modalFormName + " " + priceSelector).val();
}
