import {request, Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Compra from '../models/Compra';

class CompraController {

    async list(req: Request, res: Response){
        const repository = getRepository(Compra);
        const lista = await repository.createQueryBuilder('tb_compra').innerJoinAndSelect("tb_compra.funcionario", "funcionario").innerJoinAndSelect("tb_compra.cliente", "cliente").leftJoinAndSelect("tb_compra.remedios", "remedio").getMany();
        return res.json(lista);
    }

    async store(req: Request, res: Response){
    
        const repository = getRepository(Compra);
        const end = repository.create(req.body)
        await repository.save(end)
        return res.json(end)
    }

    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Compra);
            const id = req.params.id;
            const end = await repository.findOne({where : {"id" : id }});
            if(end){
                await repository.remove(end);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }
    }
    

    async update(req: Request, res: Response){
    
        const repository = getRepository(Compra);//recupera o repositorio do jogador.
    
        const id = req.body.id;//extrai os atributos nickname e endereco do corpo da mensagem.
    
        const idExists = await repository.findOne({where :{id}});
        
        if(!idExists){
                return res.sendStatus(404);
        }
        
        const r = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(r); //persiste (update) a entidade na tabela.
        
        return res.json(r);
    }

    async login(req: Request, res: Response){
    
        const repository = getRepository(Compra);
        const {cpf, senha} = req.body;

        const j = await repository.findOne({where : {"cpf" : cpf , "senha" : senha}});

        if(j){
           // res.sendStatus(201);
            return res.json(j)
        }else{
            return res.sendStatus(204);
        }
    }

    async find(req: Request, res: Response){
    
        const repository = getRepository(Compra);
        const id = req.params.id;

        const j = await repository.createQueryBuilder('tb_compra').where ({id : id}).innerJoinAndSelect("tb_compra.funcionario", "funcionario").innerJoinAndSelect("tb_compra.cliente", "cliente").leftJoinAndSelect("tb_compra.remedios", "remedio").getOne();

        if(j){
            return res.json(j)
        }else{
            return res.sendStatus(204);
        }
    }
}

export default new CompraController();