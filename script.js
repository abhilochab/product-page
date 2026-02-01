const storeItems = [
  { name: "Mobile Phone", price: 11000, rating: 4.4, category: "Electronics" },
  { name: "Office Laptop", price: 52000, rating: 4.7, category: "Electronics" },
  { name: "Earbuds", price: 1800, rating: 4.0, category: "Electronics" },
  { name: "USB Mouse", price: 650, rating: 4.1, category: "Electronics" },
  { name: "Basic Keyboard", price: 1000, rating: 4.2, category: "Electronics" },

  { name: "Plain T-Shirt", price: 700, rating: 4.0, category: "Clothing" },
  { name: "Blue Jeans", price: 1700, rating: 4.2, category: "Clothing" },
  { name: "Rain Jacket", price: 3000, rating: 4.4, category: "Clothing" },
  { name: "Sports Shoes", price: 2100, rating: 4.3, category: "Clothing" },
  { name: "Wool Cap", price: 280, rating: 3.7, category: "Clothing" },

  { name: "English Novel", price: 420, rating: 4.1, category: "Books" },
  { name: "Rough Notebook", price: 140, rating: 3.8, category: "Books" },
  { name: "Food Recipe Book", price: 580, rating: 4.3, category: "Books" },
  { name: "Kids Story Book", price: 360, rating: 4.0, category: "Books" },
  { name: "Exam Guide", price: 520, rating: 4.1, category: "Books" },

  { name: "Desk Lamp", price: 880, rating: 4.0, category: "Home" },
  { name: "Plastic Chair", price: 2300, rating: 3.9, category: "Home" },
  { name: "Small Table", price: 4200, rating: 4.3, category: "Home" },
  { name: "Room Clock", price: 1050, rating: 4.1, category: "Home" },
  { name: "Stand Fan", price: 3000, rating: 4.2, category: "Home" }
];

function showItems(list) {
  const grid = document.getElementById("storeGrid");
  grid.innerHTML = "";

  list.forEach(function(it) {
    const box = document.createElement("div");
    box.className = "item";
    box.innerHTML = `
      <h4>${it.name}</h4>
      <p>Price: ₹${it.price}</p>
      <p>Rating: ${it.rating}</p>
      <p>Category: ${it.category}</p>
    `;
    grid.appendChild(box);
  });
}

function updateList() {
  let data = [...storeItems];

  const sortVal = document.getElementById("sortBy").value;
  const catVal = document.getElementById("catBy").value;

  if (catVal !== "all") {
    data = data.filter(function(it) {
      return it.category === catVal;
    });
  }

  if (sortVal === "pUp") data.sort((a,b) => a.price - b.price);
  if (sortVal === "pDown") data.sort((a,b) => b.price - a.price);
  if (sortVal === "nUp") data.sort((a,b) => a.name.localeCompare(b.name));
  if (sortVal === "nDown") data.sort((a,b) => b.name.localeCompare(a.name));
  if (sortVal === "rUp") data.sort((a,b) => a.rating - b.rating);
  if (sortVal === "rDown") data.sort((a,b) => b.rating - a.rating);

  showItems(data);
}

showItems(storeItems);
