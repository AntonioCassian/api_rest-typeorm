import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', nullable: true})
    description: string

    @OneToMany(() => Video, video => video.room) //um para muitos
    videos: Video[]

    @ManyToMany(() => Subject, subject => subject.rooms)
    subjects: Subject[]
}