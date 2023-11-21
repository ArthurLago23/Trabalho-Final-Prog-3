import {request, Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Remedio from '../models/Remedio';

class RemedioController {

    async list(req: Request, res: Response){
        const repository = getRepository(Remedio);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){
        const repository = getRepository(Remedio);
        const end = repository.create(req.body)
        await repository.save(end)
        return res.json(end)
    }

    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Remedio);
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
    
        const repository = getRepository(Remedio);//recupera o repositorio do jogador.
    
        const id = req.body.id;//extrai os atributos nickname e endereco do corpo da mensagem.
    
        const idExists = await repository.findOne({where :{id}});
        
        if(!idExists){
                return res.sendStatus(404);
        }
        
        const r = repository.create(req.body); //cria a entidade Jogador
        
        await repository.save(r); //persiste (update) a entidade na tabela.
        
        return res.json(r);
    }

    async find(req: Request, res: Response){
    
        const repository = getRepository(Remedio);
        const nome = req.params.nome;

        const j = await repository.findOne({where : {"nome" : nome}});

        if(j){
            return res.json(j)
        }else{
            return res.sendStatus(204);
        }
    }
}

export default new RemedioController();