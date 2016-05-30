function DataBase() {
    this.base = [];
}

DataBase.prototype.addItems = function (items) {
      this.base.push(items);
};

DataBase.prototype.deleteItem = function (index) {
    for (var i = 0; i < this.base.length; ++i) {
        if (this.base[i].itemID === index) {
            this.base.splice(i, 1);
            break;
        }
    }
}

DataBase.prototype.getItem = function (index) {
    for (var i = 0; i < this.base.length; ++i) {
        if (this.base[i].itemID === index) {
            return this.base[i];
        }
    }
}

DataBase.prototype.getDataBase = function () {
    return this.base;
}