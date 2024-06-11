import {items} from  '../data/product.js'
import {cart} from '../data/cart.js'



console.log(cart[0].hello)


let Html=""



for(var i=0;i<items.length;i++){
    Html+=`<section data-product-id="${items[i].id}" class="box">
    <div class="inner-box-container">
        <img class="product-image" width="100" height="100" src="${items[i].image}" alt="">
    </div>
    <div class="inner-box-container">
        <p class="name-product">${items[i].name}</p>
    </div>
    <div class="inner-box-container">
        <p class="amount-product">${items[i].amount}</p>
    </div>
    <div class="inner-box-container">
        <p class="ratings"></p>
        <p class="rate-number">80%</p>

    </div>

    <div class="inner-box-container" >
        
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <button class="product-cart" href="">Add Cart</button>
    </div>

</section>`
}


document.querySelector(".container").innerHTML=Html   ;


    var cartButton = document.querySelectorAll(".product-cart")
for(var i=0;i<cartButton.length;i++){

    cartButton[i].addEventListener("click",(e)=>{
        console.log()
    })
    }



var body = document.querySelector("body")

window.addEventListener("scroll",function(){

    if(body.scrollTop>=400){
        document.querySelector("header").style.backgroundColor="#ffc800bf"
    }else{
        document.querySelector("header").style.backgroundColor=""
    }
})