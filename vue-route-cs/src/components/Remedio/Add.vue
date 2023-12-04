<template>
    <div class="submit-form">
      <div v-if="!submitted">       

        <div class="form-group">
            <label for="inputNome">Nome:</label>
            <input type="text" v-model="remedio.nome" class="form-control" id="inputNome">
        </div>

        <div class="form-group">
            <label for="inputValor">Valor:</label>
            <input type="number" v-model="remedio.valor" class="form-control" id="inputValor">
        </div>          

        <div class="form-group">
            <label for="inputObservacao">Observacao:</label>
            <input type="text" v-model="remedio.observacao" class="form-control" id="inputObservacao">
        </div>

        <div class="form-group">
            <label for="inputDataDeVencimento">Data De Vencimento:</label>
            <input type="date" v-model="remedio.data_de_vencimento" class="form-control" id="inputDataDeVencimento">
        </div>

        <div class="form-group">
            <label for="inputQuantidade">Quantidade:</label>
            <input type="number" v-model="remedio.quantidade" class="form-control" id="inputQuantidade">
        </div>
  
        <button @click="saveRemedio" class="btn btn-success">Salvar</button>
        <router-link to="/listRemedios" class="btn btn-success">Voltar</router-link>                

    </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newRemedio">Novo</button>
        <router-link to="/listRemedios" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import RemedioDataService from '../../services/RemedioDataService'

    export default {
        name: "addRemedio",
        data(){
            return {
                remedio: {indice: '', 
                                    nome: '', 
                                    valor: '',
                                    observacao: '', 
                                    data_de_vencimento: '', 
                                    quantidade: ''                                                                   
                                },
                submitted: false,
            }            
        },
        methods: {

            saveRemedio(){

                var rmd = jQuery.extend({}, this.remedio);

                if (rmd.nome.trim().length > 0 && rmd.valor.trim().length > 0 && 
                        rmd.quantidade > 0) {
            
                    RemedioDataService.create(rmd)
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
            newRemedio(){

                this.submitted = false;
                this.remedio = {};
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