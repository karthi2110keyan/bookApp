let  User = document.querySelector("#user")
 let x = document.getElementById("box")
let btn = document.querySelector("button")


let userId = {
    name:[["karthi","karthi1"],["kishore","kishore1"]]
    
}

btn.addEventListener("click",function(){
  
   cal()
   
 

})

function cal(){
let Pass =x.value
    let NameContent= User.value;
    
    let Id ={
        name:[NameContent,Pass ]
    }
    userId.name.forEach((Element) => {
    var getname = userId.name[Element]
    console.log(getname)
    });
   
      let text =""
if(userId.name[0][0]===Id.name[0] && userId.name[0][1]===Id.name[1]){
    text ="correct"
    document.getElementById("item").innerHTML=`<p>${text}</p>`
}else{
    text="not match"
    document.getElementById("item").innerHTML=`<p>${text}</p>`
}
  

}


