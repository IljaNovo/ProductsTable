function ItemDataBase(name, email, count, price, oldItem, itemID) {
    
    if (oldItem === true && itemID !== undefined) {
        this.itemID = itemID;
    } else {
        this.itemID = increment.get();
        increment.increase();
    }
    this.name = name;
    this.email = email;
    this.count = count;
    this.price = price;
}
