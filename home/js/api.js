import { get } from "./dom.js";

export let url = "https://66e8219eb17821a9d9db8120.mockapi.io/table"
export async function getUsers() {
    try {
        const {data} = await axios.get(url)
        get(data);
    } catch (error) {
        console.error(error);
    }
}

// Delete user


export async function deleteUser(id) { 
    try {
        await axios.delete(`${url}/${id}`)
        getUsers()
        console.log(id);
    } catch (error) {
        console.error(error);
        
    }
  }
