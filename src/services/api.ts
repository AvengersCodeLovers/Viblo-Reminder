import axios from 'axios'

class ApiService {

    axios;
    
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.viblo.asia/',
            timeout: 10000,
            headers: {'Authorization': `Bearer ` }
        })
    }

    test() {
        console.log('Helloworld');
    }
}

export default ApiService