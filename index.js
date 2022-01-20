document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  console.log("Hello world!");

  for (let i = 0; i < 10; i++) {
    console(i);
  }
}
