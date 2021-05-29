import api from '../services/api';

class Services {
    async getConcerts() {            
        try {
            const response = await api.get('/concerts');
            //console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot get concerts ', error);
        }
    };
    async postSession(email, password) {
        try {
            const response = await api.post('/sessions',
                {
                    email: email,
                    password: password
                }
            );
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot get login ', error);
        }
    }
}

export default new Services();