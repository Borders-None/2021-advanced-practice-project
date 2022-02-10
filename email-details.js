document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailId = urlParams.get("id");

    var url = "http://localhost:3000/api/emails/" + emailId;
    fetch(url)
        .then(Response => Response.json())
        .then(data => showDetails(data));

    function showDetails(data){
        console.log(data);
        var mainbox = document.getElementById('mail_content');
        var sender = document.createElement('h4');
        mainbox.appendChild(sender);
        sender.innerText = "From:" + " "  + data.from;

        var title = document.createElement('label')
        mainbox.appendChild(title);
        title.innerText = "Subject:" + " " + data.title;

        var time = document.createElement('label');
        mainbox.appendChild(time);
        var date =  new Date (data.date);
        var dateString = date.toLocaleDateString();
        time.innerText = dateString;

        var body = document.createElement('p');
        mainbox.appendChild(body);
        body.innerText = data.body;

        var opition = document.createElement('div');
        mainbox.appendChild(opition);
        opition.classList.add('footer');


        var replay = document.createElement('button');
        opition.appendChild(replay);
        replay.classList.add('replay');
        replay.innerText = "Replay";


        var forward = document.createElement('button');
        opition.appendChild(forward);
        forward.classList.add('replay');
        forward.innerText = "forward";
        
    }
  })
    