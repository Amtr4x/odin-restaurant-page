export default function displayAboutContent() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const card = document.createElement("div");
  card.innerHTML = `
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Commodi repellat id dolores culpa consectetur officia impedit, distinctio nulla
sint dicta quaerat voluptas soluta ipsa debitis dolorem aperiam velit! Vero, repellat.
Amet perspiciatis minus perferendis incidunt ex omnis nihil eum saepe, recusandae officiis
esse nesciunt ipsa illum excepturi ab temporibus iusto tenetur id</p>
    `;

  main.appendChild(card);
}
