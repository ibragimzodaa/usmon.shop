import { a, deleteUser, openModalEdit } from "./api.js";
let table = document.querySelector(".tbody");
let box = document.querySelector(".box");

export function getTable(data) {
    table.innerHTML = "";
    data.forEach((e) => {
        let div = document.createElement("tr");

        let inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";

        let checkboxCell = document.createElement("td");
        checkboxCell.appendChild(inpCheckBox);
        div.appendChild(checkboxCell);
        checkboxCell.onclick = () => {
            if (inpCheckBox.checked) {
                div.style.backgroundColor = "#ccc"
                div.style.transition = "2s"
            } else {
                div.style.backgroundColor = "white"
                div.style.transition = "2s"
            }
        }
        let btnDel = document.querySelector(".btnDel");
        btnDel.onclick = () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                    deleteUser(a[index].id);
                }
            });
        }

        let image = document.createElement("img");
        image.src = e.image;
        image.classList.add("productImage");

        let company = document.createElement("th");
        company.innerHTML = e.company;

        let price = document.createElement("td");
        price.innerHTML = "$" + e.price;

        let dateElement = document.createElement("td");
        dateElement.innerHTML = new Date(e.data).toLocaleDateString();

        let status = document.createElement("p");
        status.innerHTML = e.status ? "PROCESSED" : "ON HOLD";
        status.style.backgroundColor = e.status ? "green" : "red";
        status.style.color = "white";
        status.classList.add("status");

        // Edit 

        // Search By select
        let selectByStatus = document.querySelector(".selectByStatus")
        selectByStatus.onclick = () => {
            let b = a.filter((e) => {
                if (selectByStatus.value === "true") {
                    return e.status === "PROCESSED";
                } else if (selectByStatus.value === "false") {
                    return e.status === "ON HOLD";
                }
                return true;
            });
            get(b);
        }


        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "edit";
        let tr = document.createElement("tr");
        tr.appendChild(btnEdit);
        tr.classList.add("tr");
        btnEdit.onclick = () => {
            editUserModal.showModal()
            openModalEdit(e);
        }

        div.append(image, company, price, dateElement, status, tr);
        div.classList.add("product");
        table.append(div);
    });

    box.style.display = "none";
}

export function getDivs(data) {
    box.innerHTML = "";
    data.forEach((e) => {
        let div = document.createElement("div");

        let inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";

        let checkboxCell = document.createElement("td");
        checkboxCell.appendChild(inpCheckBox);
        checkboxCell.onclick = () => {
            if (inpCheckBox.checked) {
                div.style.backgroundColor = "#ccc"
                div.style.transition = "2s"
            } else {
                div.style.backgroundColor = "white"
                div.style.transition = "2s"
            }
        }
        let btnDel = document.querySelector(".btnDel");
        btnDel.onclick = () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                    deleteUser(a[index].id);
                }
            });
        }

        let image = document.createElement("img");
        image.src = e.image;
        image.classList.add("productImage1");

        let company = document.createElement("h2");
        company.innerHTML = e.company;

        let price = document.createElement("p");
        price.innerHTML = "$" + e.price;

        let dateElement = document.createElement("p");
        dateElement.innerHTML = new Date(e.data).toLocaleDateString();

        div.append(image, checkboxCell, company, price, dateElement, status);
        div.classList.add("product1");
        box.append(div);
    });
    box.style.display = "flex";
    table.style.display = "none";
}

let sw1 = document.querySelector(".switch1");
let sw2 = document.querySelector(".switch2");

export function get(data) {
    const type = localStorage.getItem("type") || "table";
    if (type === "table") {
        getTable(data);
    } else {
        getDivs(data);
    }

    sw1.onclick = () => {
        getTable(data);
        localStorage.setItem("type", "table");
    };
    sw2.onclick = () => {
        getDivs(data);
        localStorage.setItem("type", "div");
    };
}


let addUserModal = document.querySelector(".addUserModal")
let btnAdd = document.querySelector(".btnAdd");

btnAdd.onclick = () => {
    addUserModal.showModal();
}

let editUserModal = document.querySelector(".editUserModal");