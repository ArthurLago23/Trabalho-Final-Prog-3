import Vue from 'vue'
import Router from 'vue-router'

import login from  '@/components/Login'
import home from  '@/components/Home'


//Funcionarios
import listFuncionarios from  '@/components/Funcionario/List'
import novoFuncionario from  '@/components/Funcionario/Add'
import editFuncionario from  '@/components/Funcionario/Edit'

//Clientes
import listClientes from  '@/components/Cliente/List'
import novoCliente from  '@/components/Cliente/Add'
import editCliente from  '@/components/Cliente/Edit'

//Remedios
import listRemedios from  '@/components/Remedio/List'
import novoRemedio from  '@/components/Remedio/Add'
import editRemedio from  '@/components/Remedio/Edit'

//Compra
import listCompras from  '@/components/Compra/List'
import novoCompra from  '@/components/Compra/Add'
import editCompra from  '@/components/Compra/Edit'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/listFuncionarios',
      name: 'funcionarios-list',
      component: listFuncionarios   
    },    
    {
      path: '/addFuncionario',
      name: "funcionario-add",
      component: novoFuncionario
    },
    {
      path: '/updatefuncionario/:cpf',
      name: "funcionario-edit",
      component: editFuncionario
    },
    {
      path: '/listClientes',
      name: 'clientes-list',
      component: listClientes   
    },    
    {
      path: '/addCliente',
      name: "cliente-add",
      component: novoCliente
    },
    {
      path: '/updatecliente/:cpf',
      name: "cliente-edit",
      component: editCliente
    },
    {
      path: '/listRemedios',
      name: 'remedios-list',
      component: listRemedios   
    },    
    {
      path: '/addRemedio',
      name: "remedio-add",
      component: novoRemedio
    },
    {
      path: '/updateremedio/:id',
      name: "remedio-edit",
      component: editRemedio
    },
    {
      path: '/listCompras',
      name: 'compra-list',
      component: listCompras   
    },    
    {
      path: '/addCompra',
      name: "compra-add",
      component: novoCompra
    },
    {
      path: '/updatecompra/:id',
      name: "compra-edit",
      component: editCompra
    }
  ]
})

router.beforeEach((to, from, next) => {
    
  if (to.name !== 'login' && !localStorage.getItem('authUser')){
     next({name: 'login'})
  } else {
     next()
  }
  
})

export default router;