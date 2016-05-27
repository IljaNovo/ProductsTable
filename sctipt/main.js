var dataBase = new DataBase();

$(document).ready(function () {
       addEventOpenForm("#add_new_modal_form", "input[type='submit'][name='add']");
       addEventCloseModal("#add_new_modal_form", "#add_new_modal_close");
       addEventCloseModal("#delete_modal_form", "#delete_modal_close");
       addEventCloseModal("#edit_modal_form", "#edit_modal_close");
    
       $("#add_new_modal_form input[type='submit'][name='addOrUpdate']").click(function () {
           formBuilder.createForm();
           addEventOpenForm("#edit_modal_form", "#main-section .name-product .actionLink" + increment.get());
           addEventOpenForm("#delete_modal_form", "#products .cellsProduts .delete" + increment.get());
           addEventOpenForm("#edit_modal_form", "#products .cellsProduts .edit" + increment.get());
           dataBase.addItems(formBuilder.addDataInBase());
           closeForm("#add_new_modal_form");
   }); 
});