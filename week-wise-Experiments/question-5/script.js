let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Mouse", price: 500 },
  { id: 4, name: "Keyboard", price: 1000 },
  { id: 5, name: "Monitor", price: 12000 },
  { id: 6, name: "Printer", price: 8000 },
  { id: 7, name: "Speaker", price: 3000 },
  { id: 8, name: "Tablet", price: 15000 },
  { id: 9, name: "Camera", price: 25000 },
  { id: 10, name: "Headphones", price: 2000 }
];


// Display Products

function render(data) {

  const table = document.getElementById("tableBody");

  table.innerHTML = "";

  data.forEach((p, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.price}</td>
    `;

    table.appendChild(row);
  });
}


// Initial display

window.onload = () => render(products);



// Add Product

function addProduct() {

  const id =
    Number(document.getElementById("id").value);

  const name =
    document.getElementById("name").value;

  const price =
    Number(document.getElementById("price").value);

  products.push({ id, name, price });

  render(products);
}



// Update Product

function updateProduct() {

  const id =
    Number(document.getElementById("id").value);

  const name =
    document.getElementById("name").value;

  const price =
    Number(document.getElementById("price").value);

  const index =
    products.findIndex(p => p.id === id);

  if (index !== -1) {

    products[index] = { id, name, price };

    render(products);

    setTimeout(() => {

      document
        .getElementById("tableBody")
        .rows[index]
        .classList.add("updated");

    }, 50);

  } else {

    alert("Product not found");

  }
}



// DIRECT DOM
// Rebuild full table

function updateDOM() {

  console.time("DOM Update");

  products.forEach(p => {

    p.price = p.price + 1000;

  });

  render(products);

  console.timeEnd("DOM Update");

  alert("Full table updated using DOM");
}



// VIRTUAL DOM

let oldVDOM = createVDOM(products);

function createVDOM(data) {

  return data.map(p => ({
    id: p.id,
    price: p.price
  }));

}


function diff(oldVDOM, newVDOM) {

  let changes = [];

  newVDOM.forEach((newNode, index) => {

    const oldNode = oldVDOM[index];

    if (oldNode.price !== newNode.price) {

      changes.push({
        index,
        price: newNode.price
      });

    }
  });

  return changes;
}


function patchDOM(changes) {

  const table =
    document.getElementById("tableBody");

  changes.forEach(change => {

    const row = table.rows[change.index];

    row.cells[2].textContent =
      change.price;

    row.classList.add("updated");

  });
}


function updateVDOM() {

  console.time("VDOM Update");

  products[0].price += 5000;

  const newVDOM =
    createVDOM(products);

  const changes =
    diff(oldVDOM, newVDOM);

  patchDOM(changes);

  oldVDOM = newVDOM;

  console.timeEnd("VDOM Update");

  alert("Only changed row updated using VDOM");
}