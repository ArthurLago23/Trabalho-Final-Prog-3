<template>
    <div id="tab_aut">
     
       <div v-if="currentFuncionario" class="edit-form">
            <h3>Funcionario</h3>
            <form>
                <div class="form-group">
                    <label for="inputNome">Nome:</label>
                    <input type="text" v-model="currentFuncionario.nome" class="form-control" id="inputNome">
                </div>

                <div class="form-group">
                    <label for="inputSenha">Senha:</label>
                    <input type="password" v-model="currentFuncionario.senha" class="form-control" id="inputSenha">
                </div>

                <div class="form-group">
                    <label for="inputCpf">Cpf:</label>
                    <input type="text" v-model="currentFuncionario.cpf" class="form-control" id="inputCpf">
                </div>
                
                <div class="form-group">
                    <label for="inputTelefone">Telefone:</label>
                    <input type="text" v-model="currentFuncionario.telefone" class="form-control" id="inputTelefone">
                </div>

                <div class="form-group">
                    <label for="inputEndereco">Endereço:</label>
                    <input type="text" v-model="currentFuncionario.endereco" class="form-control" id="inputEndereco">
                </div>

                <div class="form-group">
                    <label for="inputDataNascimento">Data de Nascimento:</label>
                    <input type="date" v-model="currentFuncionario.data_de_nascimento" class="form-control" id="inputDataNascimento">
                </div>

                <div class="form-group">
                    <label for="inputDataDeCadastro">Data de Cadastro:</label>
                    <input type="text" v-model="currentFuncionario.data_de_cadastro" class="form-control" id="inputDataDeCadastro">
                </div>                     
                <div class="form-group">
                    <label for="inputSalario">Salario::</label>
                    <input type="text" v-model="currentFuncionario.salario" class="form-control" id="inputSalario">
                </div>
                <div class="form-group">
                    <label for="inputCargo">Cargo:</label>
                    <input type="text" v-model="currentFuncionario.cargo" class="form-control" id="inputCargo">
                </div>

            </form>
            <button class="badge badge-success" @click="updateFuncionario">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteFuncionario">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>

       </div>
       <div v-else>
            <br />
            <p>Clique em um Funcionario...</p>
        </div>

                                          
    </div>
 </template>
 <script>

    import FuncionarioDataService from '../../services/FuncionarioDataService'

     export default{
      name:'editFuncionarios',
      data() {
             return {                
                 currentFuncionario: null,
                 message: '',
             }
         },
         methods: {

            getFuncionario(cpf){

                FuncionarioDataService.get(cpf)
                .then(response => {
                    console.log(response.data);
                    this.currentFuncionario = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            updateFuncionario(){

                FuncionarioDataService.update(this.currentFuncionario)
                .then(response => {
                    console.log('FuncionarioDataService.update');
                    this.message = 'Funcionario alterado com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteFuncionario(){

                FuncionarioDataService.delete(this.currentFuncionario.cpf)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "funcionarios-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "funcionarios-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.getFuncionario(this.$route.params.cpf);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>