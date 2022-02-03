document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  let response = await fetch("http://localhost:3000/api/emails");
  let data = await response.json();
  console.log(data);

  for (let i = 0; i < data.emails.length; i++) {
    var email = data.emails[i];

    var emaiList = document.getElementById("email-list");
    emaiList.addEventListener("click", showEmails);
    var emailElement = document.createElement("div");
    emailElement.className = "emails";
    emaiList.appendChild(emailElement);

    //append emailrow

    var emailRow = document.createElement("div");
    emailRow.className = "emailrow";
    emailElement.appendChild(emailRow);

    //append options

    var emailOption = document.createElement("div");
    emailOption.className = "options";
    emailRow.appendChild(emailOption);
    emailOption.innerHTML =
      "<input type='checkbox'><i class='fa fa-star-o' aria-hidden='true'></i><span class='material-icons'>label_important</span> Fatma";

    //append h3 title

    var rowTitel = document.createElement("h3");
    rowTitel.className = "row-titel";
    emaiList.appendChild(rowTitel);
    rowTitel.innerText = "Fatma";

    //append message div

    var rowMessage = document.createElement("div");
    rowMessage.className = "row-message";
    emaiList.appendChild(rowMessage);

    //append h4
    var textMessage = document.createElement("h4");
    textMessage.className = "message";
    rowMessage.appendChild(textMessage);
    textMessage.innerText = "check your page";

    //append p tag
    var paragraph = document.createElement("p");
    paragraph.className = "time";
    emaiList.appendChild(paragraph);
    paragraph.innerText = "11:00am";

    console.log(email);
  }
}

function showEmails() {}
