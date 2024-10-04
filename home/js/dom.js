import { getUsers, url, deleteUser } from "./api.js";

let box = document.querySelector(".box")
let kulula = document.querySelector(".kulula")
let cnt = 0;


export function get(data) {
    box.innerHTML = "";
    const date = data.slice(0, 3);
    date.forEach((e) => {
        let div = document.createElement("div");
        div.classList.add("product");

        let id = document.createElement("p")
        id.innerHTML = e.id;

        let company = document.createElement("p");
        company.innerHTML = e.company;
        company.classList.add("company");

        let image = document.createElement("img");
        image.src = e.image;
        image.classList.add("productImage");
        image.alt = e.company;

        let a = document.createElement("a");
        a.append(image)
        a.href = "/profile/index.html";


        let price = document.createElement("h3");
        price.innerHTML = "$" + e.price;

        let karzineIcon = document.createElement("img");
        karzineIcon.src = "/images/Frame_9-removebg-preview.png";
        karzineIcon.classList.add("karzineIcon");
        karzineIcon.onclick = async () => {
                cnt++;
                kulula.innerHTML = cnt;

                console.error(error);

        }
        // profile localstorage
        a.onclick = (event) => {
            event.preventDefault();

            let infoProducts = {
                company: e.company,
                price: e.price,
                image: e.image,
            };
            localStorage.setItem('infoProducts', JSON.stringify(infoProducts));
            a.href = "/profile/index.html";
            window.location.href = a.href;
            console.log(a);
        };


        div.append(a, company, price, karzineIcon);
        box.append(div);
    });
}



let productsDialog = document.querySelector('.productsDialog');
let iconShop = document.querySelector('.iconShop');
let closeBtn = document.querySelector('.closeBtn');

iconShop.onclick = () => {
    productsDialog.showModal();
    getBasket()
}
closeBtn.onclick = () => {
    productsDialog.close();
}
let div = document.querySelector('.div');

function getBasket() {
    let arr = JSON.parse(localStorage.getItem('arr'))
    console.log("arr",arr);
    
    div.innerHTML = "";
    arr.forEach((e) => {
        let divv = document.createElement('div');
        let image = document.createElement('img');
        image.src = e.image;

        let p = document.createElement('p');
        p.innerHTML = e.company;

        let h2 = document.createElement('h2');
        h2.innerHTML = e.price;

        let btnDelet = document.createElement('button');
        btnDelet.innerHTML = 'Delete';
        btnDelet.onclick = () => {
            arr = arr.filter(el => el.id != e.id);
            localStorage.setItem('arr', JSON.stringify(arr));
            
            getBasket();
        }

        let d = document.createElement('div');
        d.append(p, h2, btnDelet);

        divv.classList.add('item');
        divv.append(image, d);
        div.append(divv);
    });
}

