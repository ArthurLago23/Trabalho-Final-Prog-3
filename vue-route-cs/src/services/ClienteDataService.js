
import http from "../http-common";

class ClienteDataService {


    async get(cpf){

        console.log('ClienteDataService.get: ', cpf);
        return await http.get('/cliente/'+cpf);
    }

    async list(){

        console.log('ClienteDataService.list: ');
        return await http.get(`/listClientes`);
    }

    async delete(cpf){

        console.log('ClienteDataService.delete: ', cpf);
        return await http.delete(`/deletecliente/`+cpf);
    }

    async update(data){

        console.log('ClienteDataService.update: ', data);
        return await http.put(`/updatecliente/:cpf`, data);
    }
    
    async create(data){

        console.log('ClienteDataService.create: ', data);
        return await http.post(`/addCliente/`, data);

    }  

}

export default new ClienteDataService();
