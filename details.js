/*document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {}*/
document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const emailId = urlParams.get("id");

  var url = "http://localhost:3000/api/emails";
  var response = await fetch(url + "/" + emailId);
  var data = await response.json();
  console.log(data);
  showTheEmail(data);
  console.log(emailId);
});
function showTheEmail(data) {
  var div = document.getElementById("email-title");
  div.innerHTML = data.title;

  var from = document.getElementById("email-from");
  var date = new Date(data.date);
  var dateString = date.toLocaleDateString();

  from.innerHTML = "from" + " : " + " " + data.from + " " + dateString;

  var body = document.getElementById("email-body");
  body.innerHTML = data.body;
}
