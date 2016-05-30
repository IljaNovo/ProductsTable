var formManager = (function () {
    var rowIndexes = {};
    var curentIndex;
    
    function getFormRow(rowIndex) {
        return rowIndexes[rowIndex];
    }
    
    function setFormRow(row, index) {
        rowIndexes[index] = row;
    }
    
    function createTableRow(name, price) {
        $("#main-section .cellsProduts").append("<tr class='productRow" + increment.get() + "'><td class='column-one'><div class='name-product'><a href='#' class='actionLink" + increment.get() + "'>" + name + "</a></div><img src='#' class='productPhoto productPhoto" + increment.get() + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + increment.get() + "'>" + price + "&#36;</div></td><td class='column-three'><form name='productActions" + increment.get() + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + increment.get() + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + increment.get() + "' name='delete' value='Delete' /></form></td>");
        
        setFormRow($("tr[class=productRow" + increment.get() + "]"), increment.get);
    }
    
    function generateRow() {
        formManager.createTableRow()
        
    }
        
    function addEditButtonEvent() {
        
    }
    
    function addDeleteButtonEvent() {
        
    }
    
    function deleteTableRow() {
        
    }
    
    return {
        createTableRow: createTableRow,
        deleteTableRow: deleteTableRow
    };
})();