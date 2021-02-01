import http from "./Http"
// import axios from "axios"
// Vue.use(axios)
class noteService {

    createNote (userData)  {
        console.log(userData)
        return http.post(`/notes/addNotes`, userData, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }
    

    getNotes() {
        console.log()
        return http.get(`/notes/getNotesList`, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

}

export default new noteService