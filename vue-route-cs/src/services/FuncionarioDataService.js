
import http from "../http-common";

class FuncionarioDataService {

    async authenticate(data){

        console.log('FuncionarioDataService.authenticate: ', data);
        const response = await http.post(`/loginfuncionario`, data);
        return response;
    }

    async get(cpf){

        console.log('FuncionarioDataService.get: ', cpf);
        return await http.get('/funcionario/'+cpf);
    }

    async list(){

        console.log('FuncionarioDataService.list: ');
        return await http.get(`/listFuncionarios`);
    }

    async delete(cpf){

        console.log('FuncionarioDataService.delete: ', cpf);
        return await http.delete(`/deletefuncionario/`+cpf);
    }

    async update(data){

        console.log('FuncionarioDataService.update: ', data);
        return await http.put(`/updatefuncionario/:cpf`, data);
    }
    
    async create(data){

        console.log('FuncionarioDataService.create: ', data);
        return await http.post(`/addFuncionario/`, data);

    }  

}

export default new FuncionarioDataService();
