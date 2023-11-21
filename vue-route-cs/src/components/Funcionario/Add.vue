<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputNome">nome:</label>
            <input type="text" v-model="funcionario.nome" class="form-control" id="inputNome">
        </div>
        <div class="form-group">
            <label for="inputSenha">senha:</label>
            <input type="password" v-model="funcionario.senha" class="form-control" id="inputSenha">
        </div>            
        <div class="form-group">
            <label for="inputCPF">cpf:</label>
            <input type="number" v-model="funcionario.cpf" class="form-control" id="inputCPF">
        </div>
        <div class="form-group">
            <label for="inputTelefone">telefone:</label>
            <input type="number" v-model="funcionario.telefone" class="form-control" id="inputTelefone">
        </div>
        <div class="form-group">
            <label for="inputEndereco">endereco:</label>
            <input type="text" v-model="funcionario.endereco" class="form-control" id="inputEndereco">
        </div>
        <div class="form-group">
            <label for="inputDataNascimento">data_de_nascimento:</label>
            <input type="date" v-model="funcionario.data_de_nascimento" class="form-control" id="inputDataNascimento">
        </div>
        <div class="form-group">
            <label for="inputDataCadastro">data_de_cadastro:</label>
            <input type="date" v-model="funcionario.data_de_cadastro" class="form-control" id="inputDataCadastro">
        </div>
            <div class="form-group">
            <label for="inputEmail">email:</label>
            <input type="text" v-model="funcionario.email" class="form-control" id="inputEmail">
        </div>  
        </div>
            <div class="form-group">
            <label for="inputSalario">salario:</label>
            <input type="text" v-model="funcionario.salario" class="form-control" id="inputSalario">
        </div>  
        </div>
            <div class="form-group">
            <label for="inputCargo">cargo:</label>
            <input type="text" v-model="funcionario.cargo" class="form-control" id="inputCargo">
        </div>  
  
        <button @click="saveFuncionario" class="btn btn-success">Salvar</button>
        <router-link to="/funcionarios" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newFuncionario">Novo</button>
        <router-link to="/funcionarios" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import JogadorDataService from '../../services/JogadorDataService'
    import PatenteDataService from '../../services/PatenteDataService'

    export default {
        name: "addFuncionario",
        data(){
            return {
                funcionario: {indice: '', 
                                    nickname: '', 
                                    senha: '',
                                    pontos: 0, 
                                    quantdinheiro: 0,                                                                        
                                    situacao: true,  
                                    endereco: {codigo: 0, cep: '', complemento: ''},
                                    patentes: []},
                submitted: false,
                patentes: []
            }            
        },
        methods: {

            saveFuncionario(){

                var jgd = jQuery.extend({}, this.jogador);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                var end = jQuery.extend({}, this.jogador.endereco);//clona o this.novo_jogador.endereco                        
                jgd.endereco = end;                                                

                if (jgd.nickname.trim().length > 0 && jgd.senha.trim().length > 0 && 
                        jgd.quantpontos > -1 && jgd.quantdinheiro > -1 && 
                        jgd.endereco.cep.length > 0) {
                
                    JogadorDataService.create(jgd)
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
            newJogador(){

                this.submitted = false;
                this.jogador = {};
            },
            listPatentes(){

                PatenteDataService.list().then(response =>{

                console.log("Retorno do seviço PatenteDataService.list", response.status);

                for(let j of response.data){

                    this.patentes.push(j);
                }                  

                }).catch(response => {

                // error callback
                alert('Não conectou no serviço PatenteDataService.list');
                console.log(response);
                });               
            }

        },
        mounted() {                        
            this.listPatentes();
            
         }

    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>