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
        $("#main-section .cellsProduts").append("<tr class='productRow" + increment.get() + "'><td class='column-one'><div class='name-product'><a href='#' class='actionLink" + increment.get() + "'>" + name + "</a></div><img src='image/productImage.png' class='productPhoto productPhoto" + increment.get() + "' alt='image' title='image' /></td><td class='column-two'><div class='number-price number-price" + increment.get() + "'>" + price + "</div></td><td class='column-three'><form name='productActions" + increment.get() + "' action='#' onsubmit='return false'><input type='submit' class='edit actionsButton edit" + increment.get() + "' name='edit' value='Edit' /><input type='submit' class='delete actionsButton delete" + increment.get() + "' name='delete' value='Delete' /></form></td>");
        
        setFormRow($("tr[class=productRow" + increment.get() + "]"), increment.get());
    }
    
    function sortDeskPriseForm() {
        var sortItems = dataBaseManager.sortPriseDesc();
        
        for (var i = sortItems.length - 1; i >=0 ; --i) {
            transwerTableRowInBegin(sortItems[i].itemID);
        }
    }
    
    function sortAskPriseForm() {
        var sortItems = dataBaseManager.sortPriseAsc();
        
        for (var i = sortItems.length - 1; i >=0 ; --i) {
            transwerTableRowInBegin(sortItems[i].itemID);
        }
    }
    
    function sortDeskNameForm() {
        var sortItems = dataBaseManager.sortNameDesc();
        
        for (var i = sortItems.length - 1; i >=0 ; --i) {
            transwerTableRowInBegin(sortItems[i].itemID);
        }
    }
    
    function sortAskNameForm() {
        var sortItems = dataBaseManager.sortNameAsc();
        
        for (var i = sortItems.length - 1; i >=0 ; --i) {
            transwerTableRowInBegin(sortItems[i].itemID);
        }
    }
    
    function transwerTableRowInBegin(row) {
        $("tr[class=productRow" + row + "]").prependTo("#products .cellsProduts");
    }
    
    function setNoneInRows() {
        for (var key in tableRows) {
            $("tr[class=productRow" + key + "]").css("display", "none");
        }
    }
    
    function setTableRowInRows(index) {
        $("tr[class=productRow" + index + "]").css("display", "table-row");
    }
    
    function viewFilterItems(subStr) {
        var fiterItems = dataBaseManager.filter(subStr);
        
        setNoneInRows();
        
        fiterItems.forEach(function(item, i, fiterItems) {
            setTableRowInRows(item.itemID);
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
        viewFilterItems: viewFilterItems,
        sortDeskNameForm: sortDeskNameForm,
        sortAskNameForm: sortAskNameForm,
        sortDeskPriseForm: sortDeskPriseForm,
        sortAskPriseForm: sortAskPriseForm
    };
})();
