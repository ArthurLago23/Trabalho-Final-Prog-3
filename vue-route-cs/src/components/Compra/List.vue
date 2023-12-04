<template>
    <div id="tab_aut">
     

        <div class="col-md-6">
            <h4>Listagem de Compras</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(c, indice) in compra" :key ="c.id" :class="{ active: indice == currentIndex }">
                            <td>{{c.id}}</td>
                            <td>{{c.valor_total}}</td>
               
                            <td><button v-on:click="setCurrentCompra(c, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remCompra(c, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentCompra">
                    <h4>Compra</h4>
                    <div>
                    <label><strong>Id:</strong></label> {{ currentCompra.id }}
                    </div>
                    <div>
                    <label><strong>Valor Total:</strong></label> {{ currentCompra.valor_total }}
                    </div>

                    <a class="badge badge-warning"
                    :href="'/updatecompra/' + currentCompra.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Compra...</p>
                <router-link to="/addcompra" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import CompraDataService from '../../services/CompraDataService'     
 
     export default{
      name:'listCompras',
      data() {
             return {
                 compra: [],
                 currentCompra: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarCompras(){

                
                CompraDataService.list().then(response =>{

                    console.log("Retorno do seviço authenticateCompra", response.status);

                   this.compra = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listcompra');
                    console.log(response);
                });
            },
            setCurrentCompra(compra, index){

                this.currentCompra = compra;
                this.currentIndex = index;
            },
            remCompra(compra, index){

                CompraDataService.delete(compra.id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });

            },
            refreshList() {
                this.listarCompras();
                this.currentTutorial = null;
                this.currentIndex = -1;
            }
            
         },
         mounted() {
            this.listarCompras();
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