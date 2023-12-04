<template>
    <div id="tab_aut">
     

        <div class="col-md-6">
            <h4>Listagem de Remedios</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data De Vencimento</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(r, indice) in remedios" :key ="r.id" :class="{ active: indice == currentIndex }">
                            <td>{{r.id}}</td>
                            <td>{{r.nome}}</td>
                            <td>{{r.valor}}</td>
                            <td>{{r.data_de_vencimento | formataData}}</td>        
                            <td><button v-on:click="setCurrentRemedio(r, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remRemedio(r, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentRemedio">
                    <h4>Remedio</h4>
                    <div>
                    <label><strong>Id:</strong></label> {{ currentRemedio.id }}
                    </div>
                    <div>
                    <label><strong>Nome:</strong></label> {{ currentRemedio.nome }}
                    </div>

                    <a class="badge badge-warning"
                    :href="'/updateremedio/' + currentRemedio.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Adicione um Remédio</p>
                <router-link to="/addRemedio" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import RemedioDataService from '../../services/RemedioDataService'     
 
     export default{
      name:'listRemedios',
      data() {
             return {
                 remedios: [],
                 currentRemedio: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarRemedios(){

                
                RemedioDataService.list().then(response =>{

                    console.log("Retorno do seviço authenticateRemedio", response.status);

                   this.remedios = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listremedio');
                    console.log(response);
                });
            },
            setCurrentRemedio(remedio, index){

                this.currentRemedio = remedio;
                this.currentIndex = index;
            },
            remRemedio(remedio, index){

                RemedioDataService.delete(remedio.id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });

            },
            refreshList() {
                this.listarRemedios();
                this.currentTutorial = null;
                this.currentIndex = -1;
            }
            
         },
         mounted() {
            this.listarRemedios();
         }
 
     }
 </script>
    
 <style scoped>

    .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }

     
 </style>