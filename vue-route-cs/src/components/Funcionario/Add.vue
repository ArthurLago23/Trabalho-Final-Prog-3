<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputNome">Nome:</label>
            <input type="text" v-model="funcionario.nome" class="form-control" id="inputNome">
        </div>

        <div class="form-group">
            <label for="inputSenha">Senha:</label>
            <input type="password" v-model="funcionario.senha" class="form-control" id="inputSenha">
        </div>          

        <div class="form-group">
            <label for="inputCPF">Cpf:</label>
            <input type="text" v-model="funcionario.cpf" class="form-control" id="inputCPF">
        </div>

        <div class="form-group">
            <label for="inputTelefone">Telefone:</label>
            <input type="text" v-model="funcionario.telefone" class="form-control" id="inputTelefone">
        </div>

        <div class="form-group">
            <label for="inputEndereco">Endereço:</label>
            <input type="text" v-model="funcionario.endereco" class="form-control" id="inputEndereco">
        </div>

        <div class="form-group">
            <label for="inputDataNascimento">Data de Nascimento:</label>
            <input type="date" v-model="funcionario.data_de_nascimento" class="form-control" id="inputDataNascimento">
        </div>

        <div class="form-group">
            <label for="inputDataCadastro">Data de Cadastro:</label>
            <input type="date" v-model="funcionario.data_de_cadastro" class="form-control" id="inputDataCadastro">
        </div>
        
            <div class="form-group">
            <label for="inputEmail">Email:</label>
            <input type="text" v-model="funcionario.email" class="form-control" id="inputEmail">
        </div>  

        <div class="form-group">
            <label for="inputSalario">Salário:</label>
            <input type="text" v-model="funcionario.salario" class="form-control" id="inputSalario">
        </div>  

        <div class="form-group">
            <label for="inputCargo">Cargo:</label>
            <input type="text" v-model="funcionario.cargo" class="form-control" id="inputCargo">
        </div>  
  
        <button @click="saveFuncionario" class="btn btn-success">Salvar</button>
        <router-link to="/listFuncionarios" class="btn btn-success">Voltar</router-link>                

    </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newFuncionario">Novo</button>
        <router-link to="/listFuncionarios" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import FuncionarioDataService from '../../services/FuncionarioDataService'

    export default {
        name: "addFuncionario",
        data(){
            return {
                funcionario: {indice: '', 
                                    nome: '', 
                                    senha: '',
                                    cpf: '', 
                                    telefone: '', 
                                    endereco: '',
                                    data_de_nascimento: '', 
                                    data_de_cadastro: '', 
                                    email: '',
                                    salario: '', 
                                    cargo: '',                                                                      
                                },
                submitted: false,
            }            
        },
        methods: {

            saveFuncionario(){

                var fnc = jQuery.extend({}, this.funcionario);

                if (fnc.nome.trim().length > 0 && fnc.senha.trim().length > 0 && 
                        fnc.cpf > 0 && fnc.telefone > 0) {
            
                    FuncionarioDataService.create(fnc)
                    .then(response => {
                        
                        this.submitted = true;
                    })
                    .catch(e => {                        
                        alert("Erro ao tentar cadastrar. !!! " + e.message);

                    })

                }else{
                    alert('Formulário incompleto !!!');
                }

            },
            newFuncionario(){

                this.submitted = false;
                this.funcionario = {};
            },
        },
        mounted() {                        
            
            
        }

    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>