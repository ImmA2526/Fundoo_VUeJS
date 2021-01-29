import http from './Http'
class UserRegister{
    registration(Registeration){
        return http.post(`Register`,Registeration)
    }

    login(Login){
        return http.post(`Login`,Login)
    }
}

export default new UserRegister