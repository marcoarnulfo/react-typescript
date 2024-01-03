
import axios from 'axios';

// base url for the API
const apiEndPointUrl = 'https://httpbin.org/';

// define a class to encapsulate the API calls
class ApiService {
    
    getFakeData(controller: AbortController = new AbortController()) {
        return axios.get(apiEndPointUrl + 'get', {
            headers: {
                // you can add your custom headers here
            },
            params: {
                // you can add your custom params here
            },
            // pass the signal to the request
            signal: controller.signal
        });
    }

    
}

const apiService = new ApiService();
export default apiService;