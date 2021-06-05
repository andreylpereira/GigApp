import api from '../services/api';

class Services {
  async postSession(email, password) {
    try {
      const response = await api.post('/sessions', {
        email: email,
        password: password,
      });
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot get login ', error);
    }
  }

  async getConcerts() {
    try {
      const response = await api.get('/concerts');
      //console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot get concerts ', error);
    }
  }

  async getConcertsById(id) {
    try {
      const response = await api.get(`/concerts/${id}`);
      //console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot get concerts ', error);
    }
  }

  async postConcerts(data, token) {
    try {
      const response = await api.post(
        '/concerts',
        {
          name: data.nomeEvento,
          description: data.descricaoEvento,
          date: data.dataEvento,
          ticketPrice: data.valorEvento,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('Concert created successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot created concert', error);
    }
  }

  async updateConcerts(data, token) {
    console.log(data, token);
    try {
      const response = await api.put(
        `/concerts/${data.id}`,
        {
          name: data.nomeEvento,
          description: data.descricaoEvento,
          date: data.dataInicial,
          ticketPrice: data.valorEvento,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('Concert update successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot update concert', error);
    }
  }

  async deleteConcerts(id, token) {
    try {
      const response = await api.delete(`/concerts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Concert deleted successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot delete concert', error);
    }
  }

  //=========================================/

  //função base para banda se candidatar
  async insertBandsInConcert(id, token) {
    try {
      //atualizar para post (id band) e caminho especifico
      const response = await api.delete(`/concerts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Band candidated successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot candidated Band', error);
    }
  }

  //função base para seleção da banda
  async selectBands(id, token) {
    try {
      //atualizar para update/post da banda e caminho especifico
      const response = await api.delete(`/concerts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Band selected successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot select concert', error);
    }
  }

  //função base para avaliacao da banda
  async ratingBands(id, token) {
    try {
      //atualizar para update(band rating) e caminho especifico
      const response = await api.delete(`/bands/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Band updated successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot update band', error);
    }
  }

  //função base para avaliacao do estabelecimento
  async ratingVenues(id, token) {
    try {
      //atualizar para update(vanue rating) e caminho especifico
      const response = await api.delete(`/venues/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Venue updated successfully!!');
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log('Cannot update venue', error);
    }
  }
}

export default new Services();
