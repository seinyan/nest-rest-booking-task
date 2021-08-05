import {ApiExtraModels, ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Room} from "../../room/entities/room.entity";

@ApiExtraModels()
@Entity({ name: 'room_reserve' })
export class RoomReserve {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'name' })
    name: string;

    @Column({ type: 'date', name: 'arrival_at', nullable: true, default: null })
    arrivalAt: Date;

    @Column({ type: 'date', name: 'departure_at', nullable: true, default: null })
    departureAt: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => Room, (room) => Room, { eager: true })
    @JoinColumn([{ name: 'room_id', referencedColumnName: 'id' }])
    room: Room;
}
