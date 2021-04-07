/* 
  Get all the available links, and list them for easy consumption and future management 
  options
*/

function getAllLinks() {
fetch('/.netlify/functions/get-routes')
  .then(function(response) { return response.json(); })
  .then(function(data) {
    //document.querySelector("#message").innerHTML = `<a href="${data.url}">${data.url}</a>`;
    console.log(data);
    data.forEach(function(item){
        //var shortlink = JSON.parse(item);
        addRows(shortlink.data.code, shortlink.data.destination, shortlink.created_at);
    })
    return;
  });

}

function addRows(link, url, date) {
    tabBody = document.getElementsByTagName("tbody").item(0);
    row = document.createElement("tr");
    slcell = document.createElement("td");
    urlcell = document.createElement("td");
    createdcell = document.createElement("td");
    sldata = document.createTextNode(link);
    urldata = document.createTextNode(url);
    datedata = document.createTextNode(date)
    slcell.appendChild(sldata);
    urlcell.appendChild(urldata);
    createdcell.appendChild(datedata);
    row.appendChild(slcell);
    row.appendChild(urlcell);
    row.appendChild(datedata);
    tabBody.appendChild(row);
}

getAllLinks();