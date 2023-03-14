import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UrlEntry {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column()
  code!: string;

  @Column()
  dateCreated!: Date;
}
