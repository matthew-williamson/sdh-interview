import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Example {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;
}
