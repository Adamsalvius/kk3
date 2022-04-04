import axios from "axios";
const API_URL = "https://k4backend.osuka.dev"

/* users */
export async function allUsers(){
    try{
        const response = await axios.get(`${API_URL}/users`);
        return response.data;}
        catch(erro){
            console.log(erro)
        }
    }
export async function oneUser(id){
    try{
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data;}
        catch(erro){
            console.log(erro)
        }
    }
export async function editUser(id, ){
    try{
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data;}
        catch(erro){
            console.log(erro)
        }
    }




