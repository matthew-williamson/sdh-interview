import { Column, Entity, ManyToOne, OneToOne } from "typeorm";

import { Base } from "./Base";
import { Employee } from "./Employee";
import { Appointment } from "./Appointment";

@Entity()
export class Timeslot extends Base {
  @Column()
  day: string;

  @Column({ type: "timestamptz" })
  startTime: Date;

  @Column()
  duration: number;

  @Column()
  type: "single" | "recurring"; // TODO: Look into "exceptions" to recurring timeslots

  @ManyToOne(() => Employee, (employee) => employee.id, { onDelete: "CASCADE" })
  employee: Employee;

  @OneToOne(() => Appointment, (appointment) => appointment.timeslot, {
    onDelete: "CASCADE",
    nullable: true,
  })
  appointment?: Appointment;
}
