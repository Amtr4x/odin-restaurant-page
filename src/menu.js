class offer {
  constructor(name, price, description) {
    this._name = name;
    this._price = price;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get description() {
    return this._description;
  }
}

const offerNames = [
  "Lorem ipsum",
  "Ipsum Lorem",
  "LoremLorem",
  "IpsumIpsum",
  "LoremIpsum",
];
const prices = [9.99, 3.99, 6.99, 2.99, 4.99];
const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique quasi unde.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eos",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quas fugit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facere!",
];
const productImgPath = "../assets/product.webp";

export default function displayMenuContent() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  for (let i = 0; i < offerNames.length; i++) {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="offer">
    <img src="${productImgPath}" alt="delicious dessert">
    <div class="info-container">
      <div class="offer-head">
        <h3>${offerNames[i]}</h3>
        <p>$ ${prices[i]}</p>
      </div>
      <p>${descriptions[i]}</p>
    </div>
  </div>
    `;

    main.appendChild(card);
  }
}
