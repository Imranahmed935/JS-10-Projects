let Products = {
  data: [
    {
      ProductName: "best hoodie",
      category: "Hoodie",
      price: "100",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "best hoodie",
      category: "Hoodie",
      price: "100",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "best hoodie",
      category: "Hoodie",
      price: "100",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "best hoodie",
      category: "Hoodie",
      price: "100",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shirt best for man",
      category: "Shirt",
      price: "200",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shirt best for man",
      category: "Shirt",
      price: "200",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shirt best for man",
      category: "Watch",
      price: "200",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "watch collection",
      category: "Watch",
      price: "500",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "watch collection",
      category: "Watch",
      price: "500",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "watch collection",
      category: "Watch",
      price: "500",
      image: "./images/_MG_7477.JPG",
    },

    {
      ProductName: "pent collection",
      category: "Pent",
      price: "600",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "pent collection",
      category: "Pent",
      price: "600",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "pent collection",
      category: "Pent",
      price: "600",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "pent collection",
      category: "Pent",
      price: "600",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shoes collection",
      category: "shoes",
      price: "1000",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shoes collection",
      category: "shoes",
      price: "1000",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shoes collection",
      category: "shoes",
      price: "1000",
      image: "./images/_MG_7477.JPG",
    },
    {
      ProductName: "shoes collection",
      category: "shoes",
      price: "1000",
      image: "./images/_MG_7477.JPG",
    },
  ],
};

for (let i of Products.data) {
  const card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const image = document.createElement("img");
  image.setAttribute("src", i.image);

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  const container = document.createElement("div");
  container.classList.add("container");

  const pName = document.createElement("h2");
  pName.classList.add("product-name");
  pName.innerText = i.ProductName.toUpperCase();
  container.appendChild(pName);
  card.appendChild(container);

  const category = document.createElement("h3");
  category.innerText = i.category;
  card.appendChild(category);

  const price = document.createElement("h5");
  price.innerText = "$" + i.price;
  card.appendChild(price);

  document.getElementById("products").appendChild(card);
}

function searchProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  const element = document.querySelectorAll(".card");
  element.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value;
  const elements = document.querySelectorAll(".product-name");
  const cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  searchProduct("all");
};
