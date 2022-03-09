
var json_here = document.getElementById("json_here");

var jsona = "";


fetch('src/info.json')
.then(response => {
   return response.text();
})
.then(output => jsona = JSON.parse(output));


json_here.value = Object.keys(jsona).length; 


