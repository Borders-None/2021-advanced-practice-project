document.addEventListener("DOMContentLoaded", async () => {
  await main();
});

async function main() {
  console.log("Hello world!");

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  var number = 5;

  console.log(5);

  console.log("Finished!");

  number = number * 10;
  number += 10;
};
var url = "http://localhost:3000/api/emails" ;
fetch(url)
  .then(Response => Response.json())
  .then(data => getMails(data));

function getMails(data){
  console.log(data);
  for(let i=0; i < data.emails.length ; i++){
   var element = document.createElement('tr');
   var box = document.getElementById('mailbox');
   box.appendChild(element);
   element.classList.add('email_row');

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


/*getMails("http://localhost:3000/api/emails") ;*/

/*async function getMails(url) {
  let request = await fetch(url);
  let Response = await request.emails();
  document.getElementById(). innerHTML = Response;
}*/
