const gridProducts = document.querySelector("#grid-products");

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  data.products.map((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");

    const heading = document.createElement("h4");
    heading.textContent = product.title;

    const img = document.createElement("img");
    img.src = product.images[0];
    img.alt = product.title;

    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);

    const desc = document.createElement("p");
    desc.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}€`;

    card.append(heading, desc, price, wrapper);
    gridProducts.append(card);
  });
}

fetchProducts();
