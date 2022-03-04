document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  console.log("Hello world!");

  var wait = document.getElementById("mailbox");
  var letterWait = document.createElement("h2");
  wait.appendChild(letterWait);
  letterWait.innerText = "Loading...";

  var url = "http://localhost:3000/api/emails";
  var response = await fetch(url);
  var data = await response.json();
  wait.removeChild(letterWait);
  getMails(data);
}

function createClickElement(email) {
  var click = document.createElement("button");
  click.classList.add("click");
  click.innerText = "open";
  click.setAttribute("id", "mail" + email.id);
  click.onclick = onMailClicked;
  return click;
}

function createChoiceElement() {
  var choice = document.createElement("input");
  choice.setAttribute("type", "checkbox");
  return choice;
}

function createSenderElement(email) {
  var nameSender = document.createElement("td");
  nameSender.innerText = email.from;
  return nameSender;
}

function createTitleElement(email) {
  var title = document.createElement("td");
  title.innerText = email.title;
  return title;
}

function createDateElement(email) {
  var time = document.createElement("td");
  var date = new Date(email.date);
  var dateString = date.toLocaleDateString();
  time.innerText = dateString;
  return time;
}

function createRowEmailElement(email) {
  var element = document.createElement("tr");
  element.classList.add("email_row");

  var click = createClickElement(email);
  element.appendChild(click);

  var choice = createChoiceElement();
  element.appendChild(choice);

  var nameSender = createSenderElement(email);
  element.appendChild(nameSender);

  var title = createTitleElement(email);
  element.appendChild(title);

  var time = createDateElement(email);
  element.appendChild(time);
  return element;
}

function getMails(data) {
  console.log(data);
  for (let i = 0; i < data.emails.length; i++) {
    var email = data.emails[i];
    var row = createRowEmailElement(email);
    var box = document.getElementById("mailbox");
    box.appendChild(row);
  }
}

function onMailClicked(event) {
  var clickedButton = event.target.id.substring(4);
  //var str = clickedButton.substring(4);
  window.open(`./email-details.html?id=${clickedButton}`, "_self");
}

function search() {
  var searchElement = document.getElementById("search");
  var searchValue = searchElement.value;
  console.log(searchValue);
  var emailRows = document.getElementsByTagName("tr");
  for (let i = 0; i < emailRows.length; i++) {
    let emailRow = emailRows[i];
    var senderElement = emailRow.querySelector("td").firstChild;
    console.dir(senderElement);
    var senderValue = senderElement.textContent;
    //console.log(senderValue);
    var titleElement = emailRow.querySelector("td");
    console.dir(titleElement);
    if (senderValue.toUpperCase().includes(searchValue.toUpperCase())) {
      //emailRow.style.backgroundColor = "green";
      emailRow.classList.add("search");
      emailRow.classList.remove("hidden");
    } else {
      //emailRow.style.background = "none";
      emailRow.classList.remove("search");
      emailRow.classList.add("hidden");
    }
  }
}

function readNewMailData() {
  var senderElement = document.getElementById("sender");
  var senderValue = senderElement.value;
  console.log(senderValue);

  var titleElement = document.getElementById("title");
  var titleValue = titleElement.value;
  console.log(titleValue);

  var contentElement = document.getElementById("content");
  var contentValue = contentElement.value;
  console.log(contentValue);

  var email = {
    from: senderValue,
    title: titleValue,
    body: contentValue,
  };
  return email;
}

function send() {
  var email = readNewMailData();
  fetch("http://localhost:3000/api/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => response.json())
    .then((emailResponse) => {
      var newRow = createRowEmailElement(emailResponse);
      var box = document.getElementById("mailbox");
      box.appendChild(newRow);
      console.log(email);
      console.log(emailResponse);
    });
}

/*var newMailList = document.getElementById('new');
var newMail = document.createElement('div');
newMailList.appendChild(newMail);

var senderRow = document.createElement('input');
newMailList.appendChild(senderRow);*/
