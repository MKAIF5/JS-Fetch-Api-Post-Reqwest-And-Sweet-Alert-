let button = document.getElementById("btn");

button.addEventListener("click" , (event) =>{
   event.preventDefault();
   //console.log("kaif");
   let age = +prompt("enter your age")
   if(age >=30){
    swal({
        title:"OOPS !...",
        text:"You Are Not Allow In This Course",
        icon:"error"
       })
   }
   else{
    swal({
        title:"THANK YOU...",
        text:"You Are  Allow In This Course",
        icon:"success"
       })
   }
  
})