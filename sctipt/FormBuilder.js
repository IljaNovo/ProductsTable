var formBuilder = (function () {
    function createForm() {
        $("#main-section .cellsProduts").append("<tr class='productRow" + increment.get() + "'><td class='column-one'><div class='name-product name-product" + increment.get() + "'><a href='#' class='actionLink" + increment.get() + "'>Товар 1</a></div><img src='#' class='productPhoto productPhoto" + increment.get() + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + increment.get() + "'>111&#36;</div></td><td class='column-three'><form name='productActions" + increment.get() + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + increment.get() + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + increment.get() + "' name='delete' value='Delete' /></form></td></tr>");
    }
    
    function addDataInBase() {
        var item = new ItemDataBase(
            $("#add_new_modal_form input[type='text'][name='productName']").val(),
            $("#add_new_modal_form input[type='text'][name='email']").val(),
            $("#add_new_modal_form input[type='text'][name='productCount']").val(),
            $("#add_new_modal_form input[type='text'][name='productPrice']").val()
        ); 
        clearFildsAddModal();
        return item;
    }
    
    function clearFildsAddModal() {
        $("#add_new_modal_form input[type='text'][name='productName']").val("");
        $("#add_new_modal_form input[type='text'][name='email']").val("");
        $("#add_new_modal_form input[type='text'][name='productCount']").val("");
        $("#add_new_modal_form input[type='text'][name='productPrice']").val("");
    }
    
    return {
        createForm: createForm,
        addDataInBase: addDataInBase
    };
})();