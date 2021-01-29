import http from "./Http"
// import axios from "axios"
// Vue.use(axios)
class notesService {

    createNote (userData)  {
        console.log(userData)
        return http.post(`/notes/addNotes`, userData, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }


}



export default new notesService