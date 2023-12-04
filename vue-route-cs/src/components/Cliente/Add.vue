<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputNome">Nome:</label>
            <input type="text" v-model="cliente.nome" class="form-control" id="inputNome">
        </div>

        <div class="form-group">
            <label for="inputSenha">Senha:</label>
            <input type="password" v-model="cliente.senha" class="form-control" id="inputSenha">
        </div>          

        <div class="form-group">
            <label for="inputCPF">Cpf:</label>
            <input type="text" v-model="cliente.cpf" class="form-control" id="inputCPF">
        </div>

        <div class="form-group">
            <label for="inputTelefone">Telefone:</label>
            <input type="text" v-model="cliente.telefone" class="form-control" id="inputTelefone">
        </div>

        <div class="form-group">
            <label for="inputEndereco">Endereço:</label>
            <input type="text" v-model="cliente.endereco" class="form-control" id="inputEndereco">
        </div>

        <div class="form-group">
            <label for="inputDataNascimento">Data de Nascimento:</label>
            <input type="date" v-model="cliente.data_de_nascimento" class="form-control" id="inputDataNascimento">
        </div>

        <div class="form-group">
            <label for="inputDataCadastro">Data de Cadastro:</label>
            <input type="date" v-model="cliente.data_de_cadastro" class="form-control" id="inputDataCadastro">
        </div>
        
            <div class="form-group">
            <label for="inputEmail">Email:</label>
            <input type="text" v-model="cliente.email" class="form-control" id="inputEmail">
        </div>  

        <div class="form-group">
            <label for="inputSalario">Numero do Cartão:</label>
            <input type="text" v-model="cliente.numero_do_cartao" class="form-control" id="inputSalario">
        </div>  

        <div class="form-group">
            <label for="inputCargo">Bandeira do Cartão:</label>
            <input type="text" v-model="cliente.bandeira_do_cartao" class="form-control" id="inputCargo">
        </div>  
  
        <button @click="saveCliente" class="btn btn-success">Salvar</button>
        <router-link to="/listClientes" class="btn btn-success">Voltar</router-link>                

    </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newCliente">Novo</button>
        <router-link to="/listClientes" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import ClienteDataService from '../../services/ClienteDataService'

    export default {
        name: "addCliente",
        data(){
            return {
                cliente: {indice: '', 
                                    nome: '', 
                                    senha: '',
                                    cpf: '', 
                                    telefone: '', 
                                    endereco: '',
                                    data_de_nascimento: '', 
                                    data_de_cadastro: '', 
                                    email: '',
                                    numero_do_cartao: '', 
                                    bandeira_do_cartao: '',                                                                      
                                },
                submitted: false,
            }            
        },
        methods: {

            saveCliente(){

                var clt = jQuery.extend({}, this.cliente);

                if (clt.nome.trim().length > 0 && clt.senha.trim().length > 0 && 
                        clt.cpf > 0 && clt.telefone > 0) {
            
                    ClienteDataService.create(clt)
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
            newCliente(){

                this.submitted = false;
                this.cliente = {};
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