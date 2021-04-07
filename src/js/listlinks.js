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
        addRows(item.data.code, item.data.destination, item.created_at);
    })
    return;
  });

}

function addRows(link, url, date) {
    tabBody = document.getElementsByTagName("tbody").item(0);
    row = document.createElement("tr");

    // Create the rows
    slCell = document.createElement("td");
    urlCell = document.createElement("td");
    createdCell = document.createElement("td");
    actionsCell = document.createElement("td");

    // Create the text inside them
    slA = document.createElement('a');
    slData = document.createTextNode(link);
    slA.appendChild(slData);
    slA.title = link;
    slA.href = '/' + link;

    urlA = document.createElement('a');
    urlData = document.createTextNode(url);
    urlA.appendChild(urlData);
    urlA.title = url;
    urlA.href = url;
    
    dateData = document.createTextNode(date);
    actionsData = document.createTextNode("TBD");

    //Add the text into the cell
    slCell.appendChild(slData);
    urlCell.appendChild(urlData);
    createdCell.appendChild(dateData);
    actionsCell.appendChild(actionsData);
    
    //chuck the cells into the row
    row.appendChild(slCell);
    row.appendChild(urlCell);
    row.appendChild(createdCell);
    row.appendChild(actionsCell);
    tabBody.appendChild(row);
}

getAllLinks();