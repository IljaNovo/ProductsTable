$(document).ready(function () {
    var additionWindow = new AdditionModalWindow("#add_new_modal_form");
    additionWindow.addOpenEvent("input[type='submit'][name='add']");
    additionWindow.addCloseEvent("#add_new_modal_close");
    additionWindow.addBaseSetEvent("input[type='submit'][name='addOrUpdate']");
    
    
    
    var editWindow = new EditModalWindow("#edit_modal_form");
    editWindow.addOpenEvent("#products .cellsProduts .edit0");
    editWindow.addOpenEvent("#main-section .name-product .actionLink0");
    aditWindow.addCloseEvent("#edit_modal_close");
    
    var deleteWindow = new DeleteModalWindow("#delete_modal_form");
    deleteWindow.addOpenEvent("#products .cellsProduts .delete0");
    deleteWindow.addCloseEvent("delete_modal_close");
});
       
       
//       addEventOpenForm("#add_new_modal_form", "input[type='submit'][name='add']");
//       addEventCloseModal("#add_new_modal_form", "#add_new_modal_close");
//       addEventCloseModal("#delete_modal_form", "#delete_modal_close");
//       addEventCloseModal("#edit_modal_form", "#edit_modal_close");
    
//       $("#add_new_modal_form input[type='submit'][name='addOrUpdate']").click(function () {
//           formBuilder.createTableRow();
//           addEventOpenForm("#edit_modal_form", "#main-section .name-product .actionLink" + increment.get());
//           addEventOpenForm("#delete_modal_form", "#products .cellsProduts .delete" + increment.get());
//           addEventOpenForm("#edit_modal_form", "#products .cellsProduts .edit" + increment.get());
//           dataBase.addItems(formBuilder.addDataInBase());
//           formBuilder.clearFildsAddModal();
//           closeForm("#add_new_modal_form");
//   }); 
//});