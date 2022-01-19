import axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        
        return axios.get('http://localhost:8080/basicauth', 
        {headers: {authorization: createBasicAuthToken(username,password)}})
    }

    createBasicAuthToken(username,password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    regsterSuccessfulLogin(username,password) {
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password));
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader) {
        
        axios.interceptors.request.user(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();