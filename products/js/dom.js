let box = document.querySelector(".right");
let kulula = document.querySelector(".kulula")
let cnt = 0;
let arr=[]

export function get(data) {
    box.innerHTML = "";
    data.forEach((e) => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.onclick=()=>{
            localStorage.setItem("product",JSON.stringify(e))
            arr.push(e)
            console.log(arr);
            
            localStorage.setItem("arr",JSON.stringify(arr))  
        }

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

        let status1 = document.createElement("p");
        status1.innerHTML = e.status;
        status1.classList.add("status1");

        let price = document.createElement("h3");
        price.innerHTML = "$" + e.price;
        price.classList.add("price");

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

        let karzineIcon = document.createElement("img");
        karzineIcon.src = "/images/Frame_9-removebg-preview.png";
        karzineIcon.classList.add("karzineIcon");
        karzineIcon.onclick = async() => {
            try {
                cnt++;
                kulula.innerHTML = cnt;
            } catch (error) {
                console.error(error);
                
            }
        }

        div.append(a, company, price,karzineIcon);
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
let ar = [];
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
        btnDelet.classList.add('btn-delet');
        btnDelet.onclick = () => {
            arr = arr.filter(el => el.id != e.id);
            pilusPrice.innerHTML = ""
            localStorage.setItem('arr', JSON.stringify(arr));
            getBasket();
        }

        let pilusPrice = document.querySelector(".pilusPrice");
        let totalPrice = arr.reduce((total, product) => total + parseFloat(product.price), 0); 
        pilusPrice.innerHTML =  totalPrice;
        let dona = document.createElement("p");
        dona.innerHTML = "1";
        let btnPilus = document.createElement("button")
        btnPilus.classList.add("btnPilus");
        btnPilus.innerHTML = "+";
        btnPilus.onclick = () => {
            // kulula.innerHTML = parseInt(kulula.innerHTML) + 1;
            pilusPrice.innerHTML = parseFloat(pilusPrice.innerHTML) + parseFloat(e.price);
            dona.innerHTML = parseInt(dona.innerHTML) + 1;
        }
        let btnMiinus = document.createElement("button")
        btnMiinus.classList.add("btnMiinus");
        btnMiinus.innerHTML = "-";
        btnMiinus.onclick = () => {
            // kulula.innerHTML = parseInt(kulula.innerHTML) - 1;
            pilusPrice.innerHTML = parseFloat(pilusPrice.innerHTML) - parseFloat(e.price);
            dona.innerHTML = parseInt(dona.innerHTML) - 1;
            if(parseInt(kulula.innerHTML) < 0) {
                kulula.innerHTML = 0;
                arr = arr.filter(el => el.id != e.id);
                pilusPrice.innerHTML = ""
                localStorage.setItem('arr', JSON.stringify(arr));
                getBasket();
            }
        }

        let s = document.createElement("div")
        s.append(btnPilus, dona, btnMiinus);
        s.classList.add("s")
        let d = document.createElement('div');
        d.append(p, h2, btnDelet,s);

        divv.classList.add('item');
        divv.append(image, d);
        div.append(divv);
    });
}

