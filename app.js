let btnkutu = document.getElementsByClassName("quantity-controller");
// console.log(btnkutu)

let par = document.getElementById("product-quantity");
// console.log(par)

let products = document.querySelector(".products");

const taxRate = 0.18;

const shippingPrice = 19.0;

// let a = document.querySelector(".product-info");
// let sayi = a.querySelector(".line-through").innerText;
// console.log(sayi)


//! *****************calculate***

const calculate = (a)=>{
let parİnner = a.querySelector("#product-quantity").innerText;

let price = a.querySelector("strong").innerText;

let sonuc = a.querySelector(".product-line-price");

sonuc.innerText = (parİnner * price).toFixed(2)

}

//! *****arti-eksi*****

products.addEventListener("click", (e) => {
  // console.log(aaaaaaaaa)
  if (
    e.target.classList.contains("minus") &&
    e.target.nextElementSibling.innerText > 0
  ) {
    console.log("eksi");
    console.log(e.target.nextElementSibling.innerText);
    e.target.nextElementSibling.innerText--;
     calculate(e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("plus")) {
   e.target.previousElementSibling.innerText++;
    calculate(e.target.parentElement.parentElement);
  } else if (e.target.nextElementSibling.innerText <= 0){
    // remove(sakşls)
    e.target.parentElement.parentElement.parentElement.remove();
  }
});











