export default function displayHomeContent() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const cardInfo = document.createElement("div");
  cardInfo.innerHTML = `
  <h1>Wild Desserts</h1>
  <h2>Schedule:</h2>
  <ul>
    <li>Mon - Fri | 8:00AM - 4:00PM</li>
    <li>Sat | 9:00AM - 2:00PM</li>
  </ul>
  <p>Saturdays -10% discount!</p>
    `;

  main.appendChild(cardInfo);
}
