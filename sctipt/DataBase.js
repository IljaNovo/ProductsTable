function DataBase() {
    this.base = {};
}

DataBase.prototype.addItems = function (items) {
      this.base[items.itemID] = items;
};

DataBase.prototype.deleteItem = function (index) {
    delete this.base[index];
}

DataBase.prototype.getItem = function (index) {
    return this.base[index];
}

DataBase.prototype.sortNameAsc = function () {
    var newArrey = [];
    return newArrey;
}

DataBase.prototype.sortNameDesc = function () {
    var newArrey = [];
    return newArrey;
}

DataBase.prototype.sortPriseAsc = function () {
    var newArrey = [];
    return newArrey;
}

DataBase.prototype.sortPriseDesc = function () {
    var newArrey = [];
    return newArrey;
}

DataBase.prototype.filter = function (baseItams) {
    var newArrey = [];
    return newArrey;
}