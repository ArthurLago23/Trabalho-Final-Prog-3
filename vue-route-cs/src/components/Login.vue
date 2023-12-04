<template>
   <div id="tab_aut">
            <h3>Autenticacação</h3>
            <form>
                <div class="form-outline mb-4">
                    <label class="form-label" for="inputANickname">Cpf:</label>
                    <input class="form-control" type="text" v-model="funcionario.cpf" id="inputANickname">
                    </div>
                
                <div class="form-outline mb-4">
                    <label class="form-label" for="inputASenha">Senha:</label>
                    <input class="form-control" type="password" v-model="funcionario.senha" id="inputASenha">
                </div>
                
                <button class="btn btn-primary" @click='createFuncionarioForm()' type="button">Autenticar</button>
                <button class="btn btn-primary" @click='clearForm()' type="button">Limpar</button>
            </form>                                      
        </div>
</template>
<script>

    import FuncionarioDataService from '../services/FuncionarioDataService'

    export default{
     name:'login',
     data() {
            return {
                funcionario: {cpf: '', senha: ''}
            }
        },
        methods: {
            createFuncionarioForm(){

                console.log('chamou o createFuncionarioForm');

                const j = {cpf: this.funcionario.cpf,
                           senha: this.funcionario.senha
                        }                                    

                    FuncionarioDataService.authenticate(j).then(response =>{

                    console.log("Retorno do seviço authenticateFuncionario", response.status);
                    if(response.status == 201 || response.status == 200){

                        alert('Funcionario '+ response.data.cpf + ' authenticate com sucesso');       
                        
                        this.setAuthenticated({cpf: response.data.cpf})
                        
                        this.$router.push({name: "home"});

                    }else if(response.status == 204){

                        alert('cpf ou senha inválidos ! ');
                    }

                    this.clearForm();
                }
                ).catch(response => {

                    // error callback
                    alert('Não conectou no serviço authenticateFuncionario '+ response);
                   // console.log(response);
                });


            },
            clearForm(){
                this.funcionario.cpf = "";
                this.funcionario.senha = "";
            },
            setAuthenticated(funcionario){

                localStorage.setItem('authUser', JSON.stringify(funcionario));
                
            }

        }

    }
</script>
   
<style scoped>
    
</style>