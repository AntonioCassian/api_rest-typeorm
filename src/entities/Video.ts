import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    url: string

    @ManyToOne(() => Room, room => room.videos) //muitos videos para uma aula | => room.videos: uma aula vai ter vários videos
    @JoinColumn({name: 'room_id'}) //nome da chave estrangeira
    room: Room
}