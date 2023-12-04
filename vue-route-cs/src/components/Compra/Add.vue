<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="inputValorTotal">Valor Total:</label>
                <input type="text" v-model="compra.valor_total" class="form-control" id="inputValorTotal">
            </div>

            <div class="form-group">
                <label for="selectCliente">Cliente:</label>
                <select v-model="compra.cliente" class="form-control" id="selectCliente" >
                    <option v-for="c in cliente" :key="c.cpf" v-bind:value="c">
                        {{ c.nome }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label for="selectFuncionario">Funcionario:</label>
                <select v-model="compra.funcionario" class="form-control" id="selectFuncionario" >
                    <option v-for="f in funcionario" :key="f.cpf" v-bind:value="f">
                        {{ f.nome }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label for="selectRemedio">Remedios:</label>
                <select v-model="compra.remedios" class="form-control" id="selectRemedio" multiple>
                    <option v-for="r in remedios" :key="r.id" v-bind:value="r">
                        {{ r.nome }}
                    </option>
                </select>
            </div>

            <button @click="saveCompra" class="btn btn-success">Salvar</button>
            <router-link to="/listCompras" class="btn btn-success">Voltar</router-link>

        </div>

        <div v-else>
            <h4>Dados enviados com sucesso !</h4>
            <button class="btn btn-success" @click="newCompra">Novo</button>
            <router-link to="/listCompras" class="btn btn-success">Voltar</router-link>
        </div>
    </div>
</template>

<script>

import RemedioDataService from '../../services/RemedioDataService'
import ClienteDataService from '../../services/ClienteDataService'
import FuncionarioDataService from '../../services/FuncionarioDataService'
import CompraDataService from '../../services/CompraDataService'

export default {
    name: "addCompra",
    data() {
        return {
            compra: {
                indice: '',
                valor_total: '',
                cliente: [],
                funcionario: [],
                remedios: []
            },
            submitted: false,
            remedios: [],
            cliente: [],
            funcionario: []
        }
    },
    methods: {

        saveCompra() {

            var compra = jQuery.extend({}, this.compra);
            var cli = jQuery.extend({}, this.compra.cliente);                  
            var func = jQuery.extend({}, this.compra.funcionario);
            var reme = jQuery.extend({}, this.compra.remedios);

            compra.cliente.cpf = cli.cpf;
            compra.funcionario.cpf = func.cpf;
            compra.remedios.id = reme.id;

            console.log(this.compra)

            if (compra.valor_total.trim().length > 0) {

                CompraDataService.create(compra)
                    .then(response => {

                        this.submitted = true;
                    })
                    .catch(e => {
                        alert("Erro ao tentar cadastrar. !!! " + e.message);

                    })

            } else {
                alert('Formulário incompleto !!!');
            }

        },
        newCompra() {
            this.submitted = false;
            this.compra = {};
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

        listFuncionario() {
            FuncionarioDataService.list().then(response => {
                console.log("Retorno do seviço FuncionarioDataService.list", response.status);
                for (let e of response.data) {
                    this.funcionario.push(e);
                }
            }).catch(response => {
                alert('Não conectou no serviço FuncionarioDataService.list');
                console.log(response);
            });
        },

        listRemedio() {
            RemedioDataService.list().then(response => {
                console.log("Retorno do seviço RemedioDataService.list", response.status);
                for (let r of response.data) {
                    this.remedios.push(r);
                }
            }).catch(response => {
                alert('Não conectou no serviço RemedioDataService.list');
                console.log(response);
            });
        }

    },
    mounted() {
        this.listCliente();
        this.listFuncionario();
        this.listRemedio();
    }

}

</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}</style>