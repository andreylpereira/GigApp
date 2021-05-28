import api from '../services/api';

class Services {
    async getConcerts(token) {
        try {
            const response = await api.get('/concerts', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot get concerts ' + error);
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