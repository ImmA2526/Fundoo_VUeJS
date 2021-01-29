import http from './Http'

class UserRegister {

    registration(Registeration) {
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
        return http.post(`${URL}`, Registeration)
    }


    login(Login) {
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/user/login";
        
        return http.post(`${URL}`, Login)
    }
}

export default new UserRegister