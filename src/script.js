



var json_here = document.querySelector("#json_here");

var json_text;


let jsonen = fetch('./src/info.json')
.then(Response => Response)
.then(Response => {
   return Response.json();
})

jsonen.then(result => {

   //console.log(result)

   let json_array = Object.entries(result);
   
   /*
   for (let i=0; i < json_array.length; i++) {
      for (let j = 0; j < json_array.length; j++) {
         console.log(Object.entries(json_array[i][j]))
         console.log(Object.entries(json_array[i]))
      }
      
   }
   */

   console.log(json_array);

   json_text = JSON.stringify(result);
   
   var text = JSON.stringify(result);
   
   
   json_here.innerHTML = text;
   
});

