$(document).ready(function () {
        
       addEventOpenForm("#delete_modal_form", "input[type='submit'][name='delete']");
       addEventCloseModal("#delete_modal_form", "#delete_modal_close");
    
       addEventOpenForm("#add_new_modal_form", "input[type='submit'][name='add']");
       addEventCloseModal("#add_new_modal_form", "#add_new_modal_close");
    
       addEventOpenForm("#edit_modal_form", "input[type='submit'][name='edit']");
       addEventCloseModal("#edit_modal_form", "#edit_modal_close");
    
       addEventOpenForm("#edit_modal_form", "#main-section .name-product a");
       
    
    
       $("#add_new_modal_form input[type='submit'][name='addOrUpdate']").click(function () {
            formBuilder.createForm();
            closeForm("#add_new_modal_form");
   }); 
});