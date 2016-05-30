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
    
    function getDateBase() {
        return dataBase.getDataBase();
    }
    
    function removeItem(index) {
        dataBase.deleteItem(index);
    }
    
    function sortNameAsc() {
        return dataBase.getDataBase().sort(function(a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
        });
    }

    function sortNameDesc() {
        return dataBase.getDataBase().sort(function(a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
        });
    }

    function sortPriseAsc() {
        return dataBase.getDataBase().sort(function(a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        });
    }

    function sortPriseDesc() {
        return dataBase.getDataBase().sort(function(a, b) {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
        });
    }
    
    function filter(subName) {
        var newArrey = [];
        var base = dataBase.getDataBase();

        base.forEach(function(item, i, base) {
           if (item.name.indexOf(subName) !== -1) {
               newArrey.push(base[i]);
           } 
        });
        return newArrey;
    }
    
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
    };
})();