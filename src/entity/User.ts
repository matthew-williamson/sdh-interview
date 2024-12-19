import { Column, Entity, OneToMany } from "typeorm";

import { Base } from "./Base";
import { Appointment } from "./Appointment";

@Entity()
export class User extends Base {
  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}
