import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';

import User from './User';
import ClassSchedule from './ClassSchedule';

@Entity('classes')
class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ type: "decimal", nullable: false })
  cost: string;

  @Column()
  user_id: string;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(type => ClassSchedule, table => table.classes)
  classSchedules: ClassSchedule[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Class;
