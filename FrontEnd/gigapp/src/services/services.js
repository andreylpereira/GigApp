import api from '../services/api';

class Services {

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
    };

    async getConcerts() {
        try {
            const response = await api.get('/concerts');
            //console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot get concerts ', error);
        }
    };

    async postConcerts(data, token) {
        try {            
            const response = await api.post('/concerts',
                {
                    name: data.nomeEvento,
                    description: data.descricaoEvento,
                    date: data.dataEvento,
                    ticketPrice: data.valorEvento
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log("Concert created successfully!!")
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot created concert', error);
        }
    }

    async updateConcerts() { }

    async deleteConcerts(id, token) {         
        try {            
            const response = await api.delete(`/concerts/${id}`,                
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log("Concert deleted successfully!!")
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log('Cannot delete concert', error);
        }
    }    
}

export default new Services();