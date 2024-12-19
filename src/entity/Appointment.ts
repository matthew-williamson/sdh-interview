import { Column, Entity, ManyToOne, OneToOne } from "typeorm";

import { Base } from "./Base";
import { User } from "./User";
import { Timeslot } from "./Timeslot";

@Entity()
export class Appointment extends Base {
  @Column({ type: "timestamptz" })
  startTime: Date;

  @OneToOne(() => Timeslot, (timeslot) => timeslot.appointment)
  timeslot: Timeslot;

  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  user: User;
}
