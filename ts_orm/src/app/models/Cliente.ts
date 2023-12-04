import {Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable, TableInheritance, ChildEntity} from 'typeorm';
import Pessoa from '../models/Pessoa';

@ChildEntity()
export default class Cliente extends Pessoa{
    
 @Column("varchar")
 numero_do_cartao: string;

 @Column("text")
 bandeira_do_cartao: string;

}
