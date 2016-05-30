var formManager = (function () {
    var tableRows = {};
    var patternTableRows = {};
    var curentRow;
    
    function getFormRow(rowIndex) {
        return rowIndexes[rowIndex];
    }
    
    function setFormRow(row, index, patternTableRow) {
        tableRows[index] = row;
        curentRow = row;
        patternTableRows[index] = patternTableRow;
    }
    
    function createTableRow(name, price) {
        var patternTableRow = "<tr class='productRow" + increment.get() + "'><td class='column-one'><div class='name-product'><a href='#' class='actionLink" + increment.get() + "'>" + name + "</a></div><img src='#' class='productPhoto productPhoto" + increment.get() + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + increment.get() + "'>" + price + "&#36;</div></td><td class='column-three'><form name='productActions" + increment.get() + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + increment.get() + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + increment.get() + "' name='delete' value='Delete' /></form></td>";
        
        $("#main-section .cellsProduts").append(patternTableRow);
        
        setFormRow($("tr[class=productRow" + increment.get() + "]"), increment.get(), patternTableRow);
    }
    
    function getCurentRow() {
        return curentRow;
    }
    
    function deleteTableRow(index) {
        delete patternTableRows[index];
        delete tableRows[index];
        curentRow = null;
    }
    
    return {
        createTableRow: createTableRow,
        deleteTableRow: deleteTableRow,
        getCurentRow: getCurentRow
    };
})();