import * as apiLinks from '../constants/apiLinks'
import request from './makeRequest'
const api ={
    // getUserInfo         :      (data => request.post(apiLinks.API_USER_GET_INFO,data) ),
    login               :      (data => request.post(apiLinks.SIGN_IN,data) ),
    register : (data =>request.post(apiLinks.SIGN_UP,data) )
    }  
export default api
