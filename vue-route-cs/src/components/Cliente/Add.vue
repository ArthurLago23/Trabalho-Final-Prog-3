<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputNomeCliente">nome:</label>
            <input type="text" v-model="cliente.nome" class="form-control" id="inputNomeCliente">
        </div>
        <div class="form-group">
            <label for="inputSenhaCliente">senha:</label>
            <input type="password" v-model="cliente.senha" class="form-control" id="inputSenhaCliente">
        </div>            
        <div class="form-group">
            <label for="inputCPFCliente">cpf:</label>
            <input type="number" v-model="cliente.cpf" class="form-control" id="inputCPFCliente">
        </div>
        <div class="form-group">
            <label for="inputTelefoneCliente">telefone:</label>
            <input type="number" v-model="cliente.telefone" class="form-control" id="inputTelefoneCliente">
        </div>
        <div class="form-group">
            <label for="inputEnderecoCliente">endereco:</label>
            <input type="text" v-model="cliente.endereco" class="form-control" id="inputEnderecoCliente">
        </div>
        <div class="form-group">
            <label for="inputDataNascimentoCliente">data de nascimento:</label>
            <input type="date" v-model="cliente.data_de_nascimento" class="form-control" id="inputDataNascimentoCliente">
        </div>
        <div class="form-group">
            <label for="inputDataCadastroCliente">data de cadastro:</label>
            <input type="date" v-model="cliente.data_de_cadastro" class="form-control" id="inputDataCadastroCliente">
        </div>
            <div class="form-group">
            <label for="inputEmailCliente">email:</label>
            <input type="text" v-model="cliente.email" class="form-control" id="inputEmailCliente">
        </div>  
        </div>
            <div class="form-group">
            <label for="inputNumeroCartao">número do cartão:</label>
            <input type="text" v-model="cliente.numero_cartao" class="form-control" id="inputNumeroCartao">
        </div>  
        </div>
            <div class="form-group">
            <label for="inputBandeira">bandeira do cartão:</label>
            <input type="text" v-model="cliente.bandeira_cartao" class="form-control" id="inputBandeira">
        </div>  
  
        <button @click="saveCliente" class="btn btn-success">Salvar</button>
        <router-link to="/cliente" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newCliente">Novo</button>
        <router-link to="/cliente" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import ClienteDataService from '../../services/ClienteDataService'
    import PatenteDataService from '../../services/PatenteDataService'

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
                                    bandeira_do_crtao: ''},
                submitted: false,
                patentes: []
            }            
        },
        methods: {

            saveCliente(){

                var jgd = jQuery.extend({}, this.cliente);//clona o this.novo_jogador e armazena na variavel jogador. dessa forma alteracoes em this.novo_jogador nao irao refletir em jogador.
                var end = jQuery.extend({}, this.jogador.endereco);//clona o this.novo_jogador.endereco                        
                jgd.endereco = end;                                                

                if (jgd.nickname.trim().length > 0 && jgd.senha.trim().length > 0 && 
                        jgd.quantpontos > -1 && jgd.quantdinheiro > -1 && 
                        jgd.endereco.cep.length > 0) {
                
                    ClienteDataService.create(jgd)
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