import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import Class from './Class';
import Connection from './Connection';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  avatar: string;

  @Column({ unique: true })
  whatsapp: string;

  @Column({ nullable: false })
  bio: string;

  @OneToMany(type => Class, classes => classes.user)
  classes: Class[];

  @OneToMany(type => Connection, table => table.user)
  connections: Connection[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
