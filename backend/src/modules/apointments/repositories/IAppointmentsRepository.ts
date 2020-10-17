import Appointment from '../infra/typeorm/entities/Appointment';

export default interface AppointmentsRepository {
  // create(): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
