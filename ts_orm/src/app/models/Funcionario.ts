import {Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable, TableInheritance, ChildEntity} from 'typeorm';
import Pessoa from '../models/Pessoa';

@ChildEntity()
export default class Funcionario extends Pessoa{
    
 @Column("float")
 salario: number;

 @Column("text")
 cargo: string;

}
