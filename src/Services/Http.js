import axios from 'axios'
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api"

export default
    {
        post(requestUrl,data){
            return axios({
                method: 'post',
                url:`${baseUrl}${requestUrl}`,
                data:data,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("AccessToken")
                }
            })
        },

        get(requestUrl){
            return axios({
                method:'get',
                url: `${baseUrl}${requestUrl}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("AccessToken")
                }
            })
        }
    }