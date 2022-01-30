document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  let response = await fetch(" http://localhost:3000apiemails");
  let data = await response.json();
  console.log(data);

  for (let i = 0; i < 10; i++) {
    console.log(i);
    return data;
  }
  const showEmail = document.querySelector(".emailrow").innerHTML =
    "<h1>" +
    data[1].id +
    "</h1>" +
    +"<h3>" +
    data[1].from +
    "</h3>" +
    "<h1>" +
    data[1].title +
    "</h1>" +
    "<h1>" +
    data[1].date +
    "</h1>");
  showEmail.addEventListener("click", main);
}
console.log(main());
