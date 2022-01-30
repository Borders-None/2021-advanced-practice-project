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

  var number = 5;

  console.log(5);

  console.log("Finished!");

  number = number * 10;
  number += 10;
}
