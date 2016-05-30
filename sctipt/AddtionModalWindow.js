function AdditionModalWindow(modalFormName) {
    ModalWindow.apply(this, arguments);
}

AdditionModalWindow.prototype = Object.create(ModalWindow.prototype);
AdditionModalWindow.prototype.constructor = AdditionModalWindow;

AdditionModalWindow.prototype.clearFields = function () {
    arguments.forEach = [].forEach;
    
    arguments.forEach(function(item, i, arguments) {
        $(this.modalFormName + " " + item).val("");    
    }.bind(this));
}

AdditionModalWindow.prototype.setDataInBase = function() {
        dataBaseManager.setItem( 
            this.getName("input[type='text'][name='productName']"),
            this.getEmail("input[type='text'][name='email']"),
            this.getCount("input[type='text'][name='productCount']"),
            this.getPrice("input[type='text'][name='productPrice']")
        );
    }

AdditionModalWindow.prototype.addRow = function(eventSelector) {
    $(eventSelector).click(function () {
        formManager.createTableRow(
            this.getName("input[type='text'][name='productName']"),
            this.getPrice("input[type='text'][name='productPrice']")
        );
        this.addEditEvent(".productRow" + increment.get() + " .edit" + increment.get());
        this.addEditEvent(".productRow" + increment.get() + " .actionLink" + increment.get());
        
        this.setDataInBase();
        
        this.clearFields(
            "input[type='text'][name='productName']",
            "input[type='text'][name='email']",
            "input[type='text'][name='productCount']",
            "input[type='text'][name='productPrice']"
        );
        this.closeForm();
    }.bind(this));
}

AdditionModalWindow.prototype.addEditEvent = function(editSelector) {
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

///

AdditionModalWindow.prototype.getName = function (nameSelector) {
    return $(this.modalFormName + " " + nameSelector).val();
}

AdditionModalWindow.prototype.getEmail = function (emailSelector) {
    return $(this.modalFormName + " " + emailSelector).val();
}

AdditionModalWindow.prototype.getCount = function (countSelector) {
    return $(this.modalFormName + " " + countSelector).val();
}

AdditionModalWindow.prototype.getPrice = function (priceSelector) {
    return $(this.modalFormName + " " + priceSelector).val();
}
