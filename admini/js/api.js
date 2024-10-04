import { get } from "./dom.js";

export let a = null;
let url = "https://66e8219eb17821a9d9db8120.mockapi.io/table";

export async function getUsers() {
    try {
        const { data } = await axios.get(url);
        a = data;
        get(data);
    } catch (error) {
        console.error(error);
    }
}

// Delete User
export async function deleteUser(id) {
    try {
        await axios.delete(`${url}/${id}`);
        getUsers();
    } catch (error) {
        console.error(error);
    }
}

// Add User Modal
let addUserModal = document.querySelector(".addUserModal");
let btnAdd = document.querySelector(".btnAdd");
let addUserForm = document.querySelector(".addUserForm");
let btnCancel = document.querySelector(".btnCancel");

btnAdd.onclick = () => {
    addUserModal.showModal();
};
btnCancel.onclick = () => {
    addUserModal.close();
};
async function adUsers(user) {
    try {
        await axios.post(url, user)
        getUsers()
    } catch (error) {
        console.log(error);
    }
}

let files = null;

let image_input = document.querySelector(".image")
image_input.onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        files = reader.result;
        console.log(files);
        
    }
}
addUserForm.onsubmit = async (event) => {
    event.preventDefault();
    let user = {
        company: addUserForm["inpName"].value,
        price: addUserForm["inpPrice"].value,
        status: addUserForm["selectByStatus"].value,
        image: files
    };
    adUsers(user);
    addUserForm.reset();
};

// Edit User
let editUserForm = document.querySelector(".editUserForm");
export function openModalEdit(e) {
    editUserForm['inpNameE'].value = e.company,
        // editUserForm['inppri'].value = e.price,
        editUserForm['selectByStatusE'].value = e.status ? "PROCESSED" : "ON HOLD",

    editUserForm.onsubmit = async (eve) => {
        eve.preventDefault();
        try {
            await axios.put(`${url}/${e.id}`, {
                company: editUserForm['inpNameE'].value,
                // price: editUserForm['inppri'].value,
                status: editUserForm['selectByStatusE'].value === "PROCESSED" ? true : false
            });
            getUsers();
        } catch (error) {
            console.error(error);
        }
    };
}

let btnSave = document.querySelector('.btnSave');
let btnSave1 = document.querySelector('.btnSave1');
let editUserModal = document.querySelector('.editUserModal');

btnSave1.onclick = () => {
    editUserModal.close();
};
btnSave.onclick = () => {
    addUserModal.close()
}

// Search by Company

let formSearch = document.querySelector(".formSearch");

formSearch.onsubmit = async (event) => {
    event.preventDefault();
    try {
        const respone = await fetch(`${url}?company=${formSearch['inpSearch'].value}`);
        const data = await respone.json();
        get(data);
    } catch (error) {
        console.error(error);
    }
};

