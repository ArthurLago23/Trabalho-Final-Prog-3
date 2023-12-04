import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';

@Entity('tb_remedio')

class Remedio {
 @PrimaryGeneratedColumn()
 id: number;

 @Column("text")
 nome: string;

 @Column("float")
 valor: number;

 @Column("text")
 observacao: string;

 @Column("date")
 data_de_vencimento: Date;

 @Column("int")
 quantidade: number;

}
export default Remedio;


