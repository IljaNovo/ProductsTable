$(document).ready(function () {
    var additionWindow = new AdditionModalWindow("#add_new_modal_form");
    additionWindow.addOpenEvent("input[type='submit'][name='add']");
    additionWindow.addCloseEvent("#add_new_modal_close", function() {
        additionWindow.showDefaultField("productName");
        additionWindow.showDefaultField("email");
        additionWindow.showDefaultField("productCount");
        additionWindow.showDefaultField("productPrice");
        $("#add_new_modal_form .nameError").css("display", "none");
        $("#add_new_modal_form .emailError").css("display", "none");
        additionWindow.clearFields(
                "input[type='text'][name='productName']",
                "input[type='text'][name='email']",
                "input[type='text'][name='productCount']",
                "input[type='text'][name='productPrice']"
        );    
    });
    additionWindow.addRow("input[type='submit'][name='addOrUpdate']");
    
    
});
    