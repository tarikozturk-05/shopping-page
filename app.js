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
calculateTotal();
}


// ***************

const calculateTotal = () => {
let sonuc = document.querySelectorAll(".product-line-price");
let subtotal = 0;
sonuc.forEach(x => {
    subtotal += parseFloat(x.innerText);
});

if(subtotal == 0){
  if(confirm("Sepetiniz boş,Alıverişe devam edin")){
     window.location.reload();
  }
}

let tax = taxRate * subtotal
let shipping = subtotal ?  shippingPrice : 0;
let total = tax + subtotal + shipping;


// document.querySelector("#card-subtotal p:nth-child(2)") = subtotal.toFixed(2);
document.querySelector("#p2").innerText =subtotal.toFixed(2);

document.querySelector("#p4").innerText = tax.toFixed(2);
document.querySelector("#p6").innerText = shipping.toFixed(2);
document.querySelector("#p8").innerText = total.toFixed(2);

}

//! *****arti-eksi-remove*****

products.addEventListener("click", (e) => {
  // console.log(aaaaaaaaa)
  if (
    e.target.classList.contains("minus") &&
    e.target.nextElementSibling.innerText > 1
  ) {
    // console.log("eksi");
    // console.log(e.target.nextElementSibling.innerText);
    e.target.nextElementSibling.innerText--;
     calculate(e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    calculate(e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("remove-product")) {
    // console.log(e.target);
    if(confirm("İkazİkazİkaz")){
    e.target.parentElement.parentElement.parentElement.remove();
    calculateTotal();
    }
   
  } else if (e.target.nextElementSibling.innerText <= 1 && confirm("İkazzz!")) {
    // remove(abc)
    e.target.parentElement.parentElement.parentElement.remove();
     calculateTotal();
  }
});











