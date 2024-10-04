import { get } from "./dom.js";

let url = "https://66e8219eb17821a9d9db8120.mockapi.io/table"
export async function getUsers() {
    try {
        const {data} = await axios.get(url)
        get(data);
    } catch (error) {
        console.error(error);
    }
}

// Search by name
let formsearch = document.querySelector(".formSearch");

formsearch.onsubmit = async(event) => {
    event.preventDefault()
    try {
        const respone = await fetch(`${url}?company=${formsearch['inpSearch'].value}`)
        const data = await respone.json();
        get(data)
    } catch (error) {
        console.error(error);
    }
}

// Search by Company
let Ikea = document.querySelector(".Ikea");
Ikea.onclick=()=>{
    Ikea.style.color = "blue";
    Marcos.style.color = "black";
    All.style.color = "black";
    Caressa.style.color = "black";
    Liddy.style.color = "black";
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        let company = product.querySelector('.company').innerHTML;
        if(company == "Ikea"){
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

let Marcos = document.querySelector(".Marcos");

Marcos.onclick=()=>{
    Ikea.style.color = "black";
    Marcos.style.color = "blue";
    All.style.color = "black";
    Caressa.style.color = "black";
    Liddy.style.color = "black";
    Marcos.style.color = "blue";
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        let company = product.querySelector('.company').innerHTML;
        if(company == "Marcos"){
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
let All=document.querySelector(".All")

All.onclick=()=>{
    Ikea.style.color = "black";
    Marcos.style.color = "black";
    All.style.color = "blue";
    Caressa.style.color = "black";
    Liddy.style.color = "black";
    Marcos.style.color = "black";
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        product.style.display = "";
    });
}
let Caressa = document.querySelector(".Caressa");

Caressa.onclick=()=>{
    Ikea.style.color = "black";
    Marcos.style.color = "black";
    All.style.color = "black";
    Caressa.style.color = "blue";
    Liddy.style.color = "black";
    Marcos.style.color = "black";
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        let company = product.querySelector('.company').innerHTML;
        if(company == "Caressa"){
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
let Liddy=document.querySelector(".Liddy")

Liddy.onclick=()=>{
    Ikea.style.color = "black";
    Marcos.style.color = "blue";
    All.style.color = "black";
    Caressa.style.color = "black";
    Liddy.style.color = "blue";
    Marcos.style.color = "black";
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        let company = product.querySelector('.company').innerHTML;
        if(company == "Liddy"){
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

// Range 

let range = document.querySelector(".range")
let price_range = document.querySelector(".price_range")

range.oninput = () => {
    price_range.innerHTML = range.value;
    let products = document.querySelectorAll('.product');
    products.forEach((product) => {
        let priceText = product.querySelector('.price').innerHTML;
        let priceValue = parseFloat(priceText.replace("$", ""));
        if (priceValue <= parseFloat(range.value)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
};