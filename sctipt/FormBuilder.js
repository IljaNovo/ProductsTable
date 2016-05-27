var formBuilder = (function () {
    function createForm() {
        $("#main-section .cellsProduts").append("<tr><td class='column-one'><div class='name-product'><a href='#'>Товар 1</a></div><img src='#' class='productPhoto' alt='image' title='image' /></td><td class='column-two'><div class='number-price'>111&#36;</div></td><td class='column-three'><form name='productActions' action='#' onsubmit='return false'><input type='submit' class='actionsButton edit' name='edit', value='Edit' /><input type='submit' class='actionsButton delete' name='delete', value='Delete' /></form></td></tr>");
    }
//    function createForm() {
//        $("#main-section .cellsProduts").append("<div>Text</div>");
//    }
    
    return {
        createForm: createForm 
    };
})();