
import http from "../http-common";

class RemedioDataService {


    async get(id){

        console.log('RemedioDataService.get: ', id);
        return await http.get('/remedio/'+id);
    }

    async list(){

        console.log('RemedioDataService.list: ');
        return await http.get(`/listRemedios`);
    }

    async delete(id){

        console.log('RemedioDataService.delete: ', id);
        return await http.delete(`/deleteremedio/`+id);
    }

    async update(data){

        console.log('RemedioDataService.update: ', data);
        return await http.put(`/updateremedio/:id`, data);
    }
    
    async create(data){

        console.log('RemedioDataService.create: ', data);
        return await http.post(`/addRemedio/`, data);

    }  

}

export default new RemedioDataService();
