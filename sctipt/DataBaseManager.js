var dataBaseManager = (function() {
    var dataBase = new DataBase();
    
    function setItem(name, email, count, price) {
        var validPrice = null;
        
        if (price[0] === "$") {
            validPrice = Number(priceConvert.convertToNumber(price));
        } else {
            validPrice = Number(price);
        }
        dataBase.addItems(
            new ItemDataBase(name, email, count, validPrice)
        );
    }
    
    function getItem(itemID) {
        return dataBase.getItem(itemID);
    }
    
    function removeItem(index) {
        dataBase.deleteItem(index);
    }
    
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
    };
})();