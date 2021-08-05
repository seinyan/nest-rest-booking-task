import { PartialType } from '@nestjs/swagger';
import { CreateRoomReserveDto } from './create-room-reserve.dto';

export class UpdateRoomReserveDto extends PartialType(CreateRoomReserveDto) {}
