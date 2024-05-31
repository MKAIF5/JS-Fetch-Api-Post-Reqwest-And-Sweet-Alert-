// let button = document.getElementById("btn");

// button.addEventListener("click" , (event) =>{
//    event.preventDefault();
//    //console.log("kaif");
//    let age = +prompt("enter your age")
//    if(age >=30){
//     swal({
//         title:"OOPS !...",
//         text:"You Are Not Allow In This Course",
//         icon:"error",
//         button:"Back"
//        })
//    }
//    else{
//     swal({
//         title:"THANK YOU...",
//         text:"You Are  Allow In This Course",
//         icon:"success",
//         button:"Done"
//        })
//    }
  
// })


// post reqwest 

let options = {
    method: "POST",
    header : {
        "content-type": "application/json"
    },
    body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
}

fetch('https://jsonplaceholder.typicode.com/todos/1' , options)
      .then(response => response.json())
      .then(json => console.log(json))