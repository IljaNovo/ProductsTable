function ItemDataBase(name, email, count, price) {
    this.itemID = increment.get();
    increment.increase();
    this.name = name;
    this.email = email;
    this.count = count;
    this.price = price;
}
