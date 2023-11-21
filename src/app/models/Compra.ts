import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn} from 'typeorm';
import Remedio from '../models/Remedio';
import Funcionario from './Funcionario';
import Cliente from './Cliente';
import Pessoa from './Pessoa';


@Entity('tb_compra')

class Compra {
 @PrimaryGeneratedColumn()
 id: number;

 @Column("float")
 valor_total: number;



@ManyToMany(() => Remedio)
@JoinTable({name : "tb_compra_remedio", 
                joinColumn: {name: "compra_id", 
                                referencedColumnName: "id"}, 
                inverseJoinColumn: {name: "remedio_id", 
                                    referencedColumnName: "id"}})
remedios: Remedio[];


@ManyToOne(type => Funcionario)
@JoinColumn({name: "funcionario_cpf", referencedColumnName: "cpf"})
funcionario: Funcionario; 

@ManyToOne(type => Cliente)
@JoinColumn({name: "cliente_cpf", referencedColumnName: "cpf"})
cliente: Cliente; 
}
export default Compra;


