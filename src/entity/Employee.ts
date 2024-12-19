import { Column, Entity, OneToMany } from "typeorm";

import { Base } from "./Base";
import { Timeslot } from "./Timeslot";

@Entity()
export class Employee extends Base {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  about: string;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.employee)
  timeslots: Timeslot[];
}
