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
    return;
  });

}


getAllLinks();