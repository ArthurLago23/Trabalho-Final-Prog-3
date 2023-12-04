<template>
    <div id="tab_aut">
     
       <div v-if="currentRemedio" class="edit-form">
            <h3>Remedio</h3>
            <form>
                <div class="form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentRemedio.nome" class="form-control" id="inputNome">
                </div>

                <div class="form-group">
                    <label for="inputValor">Valor:</label>
                    <input type="number" v-model="currentRemedio.valor" class="form-control" id="inputValor">
                </div>          

                <div class="form-group">
                    <label for="inputObservacao">Observacao:</label>
                    <input type="text" v-model="currentRemedio.observacao" class="form-control" id="inputObservacao">
                </div>

                <div class="form-group">
                    <label for="inputDataDeVencimento">Data De Vencimento:</label>
                    <input type="date" v-model="currentRemedio.data_de_vencimento" class="form-control" id="inputDataDeVencimento">
                </div>

                <div class="form-group">
                    <label for="inputQuantidade">Quantidade:</label>
                    <input type="number" v-model="currentRemedio.quantidade" class="form-control" id="inputQuantidade">
                </div>

            </form>
            <button class="badge badge-success" @click="updateRemedio">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteRemedio">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Clique em um Remédio...</p>
        </div>

                                          
    </div>
 </template>
 <script>

    import RemedioDataService from '../../services/RemedioDataService'

     export default{
      name:'editRemedios',
      data() {
             return {                
                 currentRemedio: null,
                 message: '',
             }
         },
         methods: {

            getRemedio(id){

                RemedioDataService.get(id)
                .then(response => {
                    console.log(response.data);
                    this.currentRemedio = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updateRemedio(){

                RemedioDataService.update(this.currentRemedio)
                .then(response => {
                    console.log('RemedioDataService.update');
                    this.message = 'Remedio alterado com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteRemedio(){

                RemedioDataService.delete(this.currentRemedio.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "remedios-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "remedios-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getRemedio(this.$route.params.id);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>