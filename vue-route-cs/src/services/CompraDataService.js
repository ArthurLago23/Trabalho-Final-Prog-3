
import http from "../http-common";

class CompraDataService {

    async get(id){

        console.log('CompraDataService.get: ', id);
        return await http.get('/compra/'+id);
    }

    async list(){

        console.log('CompraDataService.list: ');
        return await http.get(`/listCompras`);
    }

    async delete(id){

        console.log('CompraDataService.delete: ', id);
        return await http.delete(`/deletecompra/`+id);
    }

    async update(data){

        console.log('CompraDataService.update: ', data);
        return await http.put(`/updatecompra/:id`, data);
    }
    
    async create(data){

        console.log('CompraDataService.create: ', data);
        return await http.post(`/addCompra`, data);

    }  

}

export default new CompraDataService();
