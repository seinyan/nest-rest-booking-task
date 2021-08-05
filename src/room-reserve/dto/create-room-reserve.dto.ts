import {ApiProperty} from "@nestjs/swagger";
import {Room} from "../../room/entities/room.entity";

export class CreateRoomReserveDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ name: 'arrivalAt' })
    arrivalAt: Date;

    @ApiProperty({ name: 'departureAt' })
    departureAt: Date;

    @ApiProperty({ name: 'room', description: 'room ID' })
    room: Room
}
