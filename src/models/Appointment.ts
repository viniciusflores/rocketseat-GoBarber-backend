import { uuid } from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  provider: string

  @Column('time with time zone')
  date: Date

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid()
    this.provider = provider
    this.date = date
  }
}

export default Appointment
