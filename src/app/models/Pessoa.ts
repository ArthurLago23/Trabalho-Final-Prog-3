import {Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable, TableInheritance} from 'typeorm';
//import Endereco from '../models/Endereco';
//import Patente from '../models/Patente';

@Entity('tb_pessoa')
@TableInheritance({ column: { type: "varchar", name: "type" } })

export default abstract class Pessoa {
 @Column('text')
 nome: string;

 @PrimaryColumn("varchar")
 cpf: string;

 @Column("varchar")
 telefone: string;

 @Column("text")
 endereco: string;

 @Column("date")
 data_de_nascimento: Date;

 @Column('date', { default: () => 'CURRENT_TIMESTAMP'})
 data_de_cadastro: Date;

 @Column("text")
 email: string;

 @Column("text")
 senha: string;

 
 //@ManyToOne(type => Endereco)
 //@@JoinColumn({name: "endereco_id", referencedColumnName: "id"})
 //@endereco: Endereco;

 //@@ManyToMany(() => Patente)
    //@@JoinTable({name : "tb_jogador_patente", 
                //@joinColumn: {name: "jogador_nickname", 
                 //@            referencedColumnName: "nickname"}, 
               //@ inverseJoinColumn: {name: "patente_id", 
                                //@    referencedColumnName: "id"}})
   //@ patentes: Patente[];

}


