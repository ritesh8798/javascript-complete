const cart = {
  items: [],
  total: 0,

  addItem(name, price) {
    this.items.push({ name, price });
    this.total += price;

    this.updateUI();
  },

  updateUI() {
    document.getElementById("count").innerText = this.items.length;
    document.getElementById("total").innerText = this.total;
  },
};

document
  .getElementById("addItem")
  .addEventListener("click", cart.addItem.bind(cart, "Shoes", 500));

document
  .getElementById("addShirt")
  .addEventListener("click", cart.addItem.bind(cart, "Shirt", 800));