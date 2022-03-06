document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const emailId = urlParams.get("id");

  var wait = document.getElementById("mail_content");
  var letterWait = document.createElement("h2");
  wait.appendChild(letterWait);
  letterWait.innerText = "Loading...";

  var url = "http://localhost:3000/api/emails/" + emailId;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      wait.removeChild(letterWait);
      showDetails(data);
    });

  function showDetails(data) {
    console.log(data);
    var mainbox = document.getElementById("mail_content");
    var sender = document.createElement("div");
    sender.classList.add("first");
    mainbox.appendChild(sender);
    sender.innerText = "From:" + " " + data.from;

    var title = document.createElement("div");
    title.classList.add("first");
    mainbox.appendChild(title);
    title.innerText = "Subject:" + " " + data.title;

    var time = document.createElement("div");
    time.classList.add("first");
    mainbox.appendChild(time);
    var date = new Date(data.date);
    var dateString = date.toLocaleDateString();
    time.innerText = dateString;

    var body = document.createElement("div");
    body.classList.add("first");
    mainbox.appendChild(body);
    body.innerText = data.body;

    var opition = document.createElement("div");
    mainbox.appendChild(opition);
    opition.classList.add("footer");

    var replay = document.createElement("button");
    opition.appendChild(replay);
    replay.classList.add("replay");
    replay.innerText = "Replay";

    var forward = document.createElement("button");
    opition.appendChild(forward);
    forward.classList.add("replay");
    forward.innerText = "forward";
  }
});
