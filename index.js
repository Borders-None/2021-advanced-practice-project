document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  console.log("Hello world!");

  var wait = document.getElementById('mailbox');
  var  letterWait = document.createElement('h2');
  wait.appendChild(letterWait);
  letterWait.innerText= "Loading...";


var url = "http://localhost:3000/api/emails" ;
/*fetch(url)
  .then(Response => Response.json())
  .then(data => {
   // wait.removeChild(letterWait)
    getMails(data)
  });*/
  var response = await fetch(url);
  var data = await response.json();
  wait.removeChild(letterWait);
  getMails(data);
}
function getMails(data){
  console.log(data);
  for(let i=0; i < data.emails.length ; i++){
   var element = document.createElement('tr');
   var box = document.getElementById('mailbox');
   box.appendChild(element);
   element.classList.add('email_row');

   var click = document.createElement('button');
   element.appendChild(click);
   click.classList.add('click');
   click.innerText = 'click';
   click.setAttribute('id' , 'mail'+ data.emails[i].id);
   click.onclick = onMailClicked;

   var choice = document.createElement('input');
   choice.setAttribute("type" , "checkbox");
   element.appendChild(choice);

   var nameSender = document.createElement('td');
   element.appendChild(nameSender);
   nameSender.innerText = data.emails[i].from;

   var title = document.createElement('td');
   element.appendChild(title);
   title.innerText = data.emails[i].title;

   var time = document.createElement('td');
   element.appendChild(time);
   var date = new Date(data.emails[i].date);
   var dateString = date.toLocaleDateString();
   time.innerText = dateString;
  }

}

function onMailClicked(event) {
  var clickedButton = event.target.id.substring(4);
  //var str = clickedButton.substring(4);
  window.open(`./email-details.html?id=${clickedButton}` , "_self");
}