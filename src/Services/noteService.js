import http from "./Http"
// import axios from "axios"
// Vue.use(axios)
class noteService {
// Add Data  Method 
    createNote(userData) {
        console.log(userData)
        return http.post(`/notes/addNotes`, userData, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }
// Get Data  Method 
    getNotes() {
        console.log("The Details are :")
        return http.get(`/notes/getNotesList`, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

// Edit Method 
    editNotes() {
    return http.put(`/notes/updateNotes`, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

// Delete Method 
    deleteNotes() {
        return http.delete(`/notes/trashNotes` , {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

    //Change Color of Notes 
    changeNoteColor(data) {
        return http.post("/notes/changesColorNotes", data);
    }


    archiveNote(userData) {
        console.log(userData)
        return http.post(`/notes/archiveNotes`, userData, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

    getArchivedNotes(userData) {
        console.log(userData)
        return http.get(`/notes/getArchiveNotesList`, userData, {
            headers: {
                Authorization: localStorage.getItem('AccessToken'),
            },
        });
    }

}

export default new noteService