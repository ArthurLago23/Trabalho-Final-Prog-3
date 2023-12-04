<template>
    <div id="tab_aut">

        <div v-if="currentCompra" class="edit-form">
            <h3>Compra</h3>
            <form>
                <div class="form-group">
                    <label for="inputValorTotal">Valor Total:</label>
                    <input type="text" v-model="currentCompra.valor_total" class="form-control" id="inputValorTotal">
                </div>

            <!--Select Cliente-->
            <div class="form-group">
                <label for="selectCliente">Clientes:</label>
                <select v-model="currentCompra.cliente" class="form-control" id="selectCliente" >
                    <option v-for="c in cliente" :key="c.cpf" v-bind:value="c">
                        {{ c.nome }}
                    </option>
                </select>
            </div>

            <!--Select Funcionario-->
            <div class="form-group">
                <label for="selectFuncionario">Funcionarios:</label>
                <select v-model="currentCompra.funcionario" class="form-control" id="selectFuncionario" >
                    <option v-for="f in funcionario" :key="f.cpf" v-bind:value="f">
                        {{ f.nome }}
                    </option>
                </select>
            </div>

            <!--Select Equipamento-->
            <div class="form-group">
                <label for="selectRemedio">Remedio:</label>
                <select v-model="currentCompra.remedios" class="form-control" id="selectRemedio" multiple>
                    <option v-for="r in remedio" :key="r.id" v-bind:value="r">
                        {{ r.nome }}
                    </option>
                </select>
            </div>
            </form>
            <button class="badge badge-success" @click="updateCompra">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteCompra">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>


            <p>{{ message }}</p>

        </div>
        <div v-else>
            <br />
            <p>Please click on a Compra...</p>
        </div>


    </div>
</template>
<script>

import RemedioDataService from '../../services/RemedioDataService'
import ClienteDataService from '../../services/ClienteDataService'
import FuncionarioDataService from '../../services/FuncionarioDataService'
import CompraDataService from '../../services/CompraDataService'

export default {
    name: 'editCompras',
    data() {
        return {
            currentCompra: null,
            message: '',
            cliente: [],
            funcionario: [],
            remedio: []
        }
    },
    methods: {
        getCompra(id) {
            CompraDataService.get(id)
                .then(response => {
                    console.log(response.data);
                    this.currentCompra = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
        },

        //List cliente
        listCliente() {
            ClienteDataService.list().then(response => {
                console.log("Retorno do seviço ClienteDataService.list", response.status);
                for (let e of response.data) {
                    this.cliente.push(e);
                }
            }).catch(response => {
                // error callback
                alert('Não conectou no serviço ClienteDataService.list');
                console.log(response);
            });
        },
        //List funcionario
        listFuncionario() {
            FuncionarioDataService.list().then(response => {
                console.log("Retorno do seviço FuncionarioDataService.list", response.status);
                for (let e of response.data) {
                    this.funcionario.push(e);
                }
            }).catch(response => {
                // error callback
                alert('Não conectou no serviço FuncionarioDataService.list');
                console.log(response);
            });
        },
        //List equipamento
        listRemedio() {
            RemedioDataService.list().then(response => {
                console.log("Retorno do seviço RemedioDataService.list", response.status);
                for (let e of response.data) {
                    this.remedio.push(e);
                }
            }).catch(response => {
                // error callback
                alert('Não conectou no serviço RemedioDataService.list');
                console.log(response);
            });
        },

        updateCompra() {

            CompraDataService.update(this.currentCompra)
                .then(response => {
                    console.log('CompraDataService.update');
                    this.message = 'Servico alterado com sucesso !';
                })
                .catch(e => {
                    console.log(e);
                })
        },
        deleteCompra() {

            CompraDataService.delete(this.currentCompra.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "compra-list" });
                })
                .catch(e => {
                    console.log(e);
                });
        },
        voltar() {
            this.$router.push({ name: "compra-list" });
        }
    },
    mounted() {

        this.message = '';
        this.listCliente();
        this.listFuncionario();
        this.listRemedio();
        this.getCompra(this.$route.params.id);
    }
}
</script>
    
<style scoped>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>