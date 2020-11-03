


const arr = [{
    name:'bayo',
    'age': '12'
},
 {     'name':'tayo', 
     'age':'30'
 }
]
function app (data){
    console.log(data.length)
    const name =  document.getElementById('display')
   for (let i = 0; i < data.length; i++){
   console.log(data[i].name)

       name.inner =  `<p>${data[i].name}</p>`

   }

 
   
   
}  

app(arr)

