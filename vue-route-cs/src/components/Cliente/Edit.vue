<template>
    <div id="tab_aut">
     
       <div v-if="currentCliente" class="edit-form">
            <h3>Cliente</h3>
            <form>
                <div class="form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentCliente.nome" class="form-control" id="inputNome">
                </div>

                <div class="form-group">
                    <label for="inputSenha">Senha:</label>
                    <input type="password" v-model="currentCliente.senha" class="form-control" id="inputSenha">
                </div>

                <div class="form-group">
                    <label for="inputCpf">Cpf:</label>
                    <input type="text" v-model="currentCliente.cpf" class="form-control" id="inputCpf">
                </div>
                
                <div class="form-group">
                    <label for="inputTelefone">Telefone:</label>
                    <input type="text" v-model="currentCliente.telefone" class="form-control" id="inputTelefone">
                </div>

                <div class="form-group">
                    <label for="inputEndereco">Endereço:</label>
                    <input type="text" v-model="currentCliente.endereco" class="form-control" id="inputEndereco">
                </div>

                <div class="form-group">
                    <label for="inputDataNascimento">Data de Nascimento:</label>
                    <input type="date" v-model="currentCliente.data_de_nascimento" class="form-control" id="inputDataNascimento">
                </div>

                <div class="form-group">
                    <label for="inputDataDeCadastro">Data de Cadastro:</label>
                    <input type="text" v-model="currentCliente.data_de_cadastro" class="form-control" id="inputDataDeCadastro">
                </div>

                <div class="form-group">
                    <label for="inputNumeroDoCartao">Numero do Cartão:</label>
                    <input type="text" v-model="currentCliente.numero_do_cartao" class="form-control" id="inputNumeroDoCartao">
                </div>     

                <div class="form-group">
                    <label for="inputBandeiraDoCartao">Bandeira do Cartão:</label>
                    <input type="text" v-model="currentCliente.bandeira_do_cartao" class="form-control" id="inputBandeiraDoCartao">
                </div>                          
            </form>
            <button class="badge badge-success" @click="updateCliente">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteCliente">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Clique em um Cliente...</p>
        </div>

                                          
    </div>
 </template>
 <script>

    import ClienteDataService from '../../services/ClienteDataService'

     export default{
      name:'editClientes',
      data() {
             return {                
                 currentCliente: null,
                 message: '',
             }
         },
         methods: {

            getCliente(cpf){

                ClienteDataService.get(cpf)
                .then(response => {
                    console.log(response.data);
                    this.currentCliente = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updateCliente(){

                ClienteDataService.update(this.currentCliente)
                .then(response => {
                    console.log('ClienteDataService.update');
                    this.message = 'Cliente alterado com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteCliente(){

                ClienteDataService.delete(this.currentCliente.cpf)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "clientes-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "clientes-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getCliente(this.$route.params.cpf);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>