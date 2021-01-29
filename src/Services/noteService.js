import http from "./Http"
// import axios from "axios"
class notesService {

    addNote = (userData, token) => {
        console.log(userData.token)
        return http.post(`/user/userSignUp`, userData, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
    }


}



export default new notesService