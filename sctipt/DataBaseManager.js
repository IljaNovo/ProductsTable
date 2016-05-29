var dataBaseManager = (function() {
    var dataBase = new DataBase();
    
    function setItem(name, email, count, price) {
        dataBase.addItems(
            new ItemDataBase(name, email, count, price)
        );
    }
    
    function getItem(itemID) {
        return dataBase.getItems(itemID);
    }
    
    function removeItem(itemID) {
        dataBase.deleteItems(itemID);
    }
    
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
    };
})();