import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomReserveService } from './room-reserve.service';
import { CreateRoomReserveDto } from './dto/create-room-reserve.dto';
import { UpdateRoomReserveDto } from './dto/update-room-reserve.dto';
import {ApiTags} from "@nestjs/swagger";
import {RoomService} from "../room/room.service";

@ApiTags('RoomReserve')
@Controller('roomReserve')
export class RoomReserveController {
  constructor(private readonly roomReserveService: RoomReserveService, private roomService: RoomService) {}

  @Post()
  create(@Body() createRoomReserveDto: CreateRoomReserveDto) {
    return this.roomReserveService.create(createRoomReserveDto);
  }
}
