var formManager = (function () {
    var tableRows = {};
    var curentRow;
    
    function getFormRow(rowIndex) {
        return rowIndexes[rowIndex];
    }
    
    function setFormRow(row, index, patternTableRow) {
        tableRows[index] = row;
        curentRow = row;
    }
    
    function createTableRow(name, price) {
        $("#main-section .cellsProduts").append("<tr class='productRow" + increment.get() + "'><td class='column-one'><div class='name-product'><a href='#' class='actionLink" + increment.get() + "'>" + name + "</a></div><img src='#' class='productPhoto productPhoto" + increment.get() + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + increment.get() + "'>" + price + "</div></td><td class='column-three'><form name='productActions" + increment.get() + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + increment.get() + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + increment.get() + "' name='delete' value='Delete' /></form></td>");
        
        setFormRow($("tr[class=productRow" + increment.get() + "]"), increment.get());
    }
    
    function addExecutionTableRow(itemID, name, price) {
        $("#main-section .cellsProduts").append("<tr class='productRow" + itemID + "'><td class='column-one'><div class='name-product'><a href='#' class='actionLink" + itemID + "'>" + name + "</a></div><img src='#' class='productPhoto productPhoto" + itemID + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + itemID + "'>" + price + "</div></td><td class='column-three'><form name='productActions" + itemID + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + itemID + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + itemID + "' name='delete' value='Delete' /></form></td>");
        
        setFormRow($("tr[class=productRow" + itemID + "]"), itemID);
    }
    
    function deleteAllTableRows() {
        for (var key in tableRows) {
            tableRows[key].remove();
            delete tableRows[key];
        }
    }
    
    function viewFilterItems(subStr) {
        var fiterItems = dataBaseManager.filter(subStr);
        
        deleteAllTableRows();
        
        fiterItems.forEach(function(item, i, fiterItems) {
            addExecutionTableRow(item.itemID, item.name, item.price);    
        });
    }
    
    function getCurentRow() {
        return curentRow;
    }
    
    function deleteTableRow(index) {
        delete tableRows[index];
        curentRow = null;
    }
    
    return {
        createTableRow: createTableRow,
        deleteTableRow: deleteTableRow,
        getCurentRow: getCurentRow,
        viewFilterItems: viewFilterItems
    };
})();