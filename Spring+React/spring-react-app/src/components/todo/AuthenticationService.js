import Axios from "axios";

class AuthenticationService {
    regsterSuccessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
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

    setupAxiosInterceptors() {
        let username  = 'trystan'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

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
}

export default new AuthenticationService();