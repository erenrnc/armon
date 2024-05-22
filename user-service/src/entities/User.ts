import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor() {
    this.id = 0;
	this.name = "eren";
	this.email = "jescado@gmail.com";
  }
}