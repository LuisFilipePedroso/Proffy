import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Class from './Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  week_day: number;

  @Column({ nullable: false })
  from: number;

  @Column()
  to: number;

  @Column()
  class_id: string;

  @ManyToOne(type => Class, table => table.id)
  @JoinColumn({ name: 'class_id' })
  classes: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
