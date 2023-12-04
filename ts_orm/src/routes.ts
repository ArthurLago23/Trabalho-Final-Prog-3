import {Router} from 'express';
import PessoaController from './app/controllers/PessoaController';
import ClienteController from './app/controllers/ClienteController';
import FuncionarioController from './app/controllers/FuncionarioController';
import RemedioController from './app/controllers/RemedioController';
import CompraController from './app/controllers/CompraController';

const router = Router();


//PESSOA
router.get('/pessoa/list', PessoaController.list);
router.post('/pessoa/store', PessoaController.store);
router.delete('/pessoadelete/:cpf', PessoaController.delete)
router.put('/pessoa', PessoaController.update);
router.post('/loginpessoa', PessoaController.login);
router.get('/pessoa/:cpf', PessoaController.find);

//CLIENTE
router.get('/cliente/list', ClienteController.list);
router.post('/cliente/store', ClienteController.store);
router.delete('/cliente/delete/:cpf', ClienteController.delete)
router.post('/logincliente', ClienteController.login);
router.get('/cliente/:cpf', ClienteController.find);
router.put('/cliente/update', ClienteController.update);

router.get('/listClientes', ClienteController.list);
router.post('/addCliente', ClienteController.store);
router.put('/updatecliente/:cpf', ClienteController.update);
router.delete('/deletecliente/:cpf', ClienteController.delete);

//FUNCIONARIO
router.get('/funcionario/list', FuncionarioController.list);
router.post('/funcionario/store', FuncionarioController.store);
router.delete('/funcionario/delete/:cpf', FuncionarioController.delete)
router.post('/loginfuncionario', FuncionarioController.login);
router.get('/funcionario/:cpf', FuncionarioController.find);    
router.put('/funcionario/update', FuncionarioController.update);

router.get('/listFuncionarios', FuncionarioController.list);
router.post('/addFuncionario', FuncionarioController.store);
router.put('/updatefuncionario/:cpf', FuncionarioController.update);
router.delete('/deletefuncionario/:cpf', FuncionarioController.delete);


//REMEDIO
router.get('/remedio/list', RemedioController.list);
router.post('/remedio/store', RemedioController.store);
router.delete('/remedio/delete/:id', RemedioController.delete)
router.get('/remedio/:id', RemedioController.find);
router.put('/remedio/update', RemedioController.update);

router.get('/listRemedios', RemedioController.list);
router.post('/addRemedio', RemedioController.store);
router.put('/updateremedio/:id', RemedioController.update);
router.delete('/deleteremedio/:id', RemedioController.delete);

//COMPRA
router.get('/compra/list', CompraController.list);
router.post('/compra/store', CompraController.store);
router.delete('/compra/delete/:id', CompraController.delete)
router.get('/compra/:id', CompraController.find);
router.put('/compra/update', CompraController.update);

router.get('/listCompras', CompraController.list);
router.post('/addCompra', CompraController.store);
router.put('/updatecompra/:id', CompraController.update);
router.delete('/deletecompra/:id', CompraController.delete);
export default router;

