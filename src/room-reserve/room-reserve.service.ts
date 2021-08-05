import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateRoomReserveDto } from './dto/create-room-reserve.dto';
import { UpdateRoomReserveDto } from './dto/update-room-reserve.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RoomReserve} from "./entities/room-reserve.entity";
import {RoomService} from "../room/room.service";

@Injectable()
export class RoomReserveService {
  constructor(
      @InjectRepository(RoomReserve)
      private roomReserveRepository: Repository<RoomReserve>,
      private roomService: RoomService,
  ) {}

  async create(createRoomReserveDto: CreateRoomReserveDto) {
    const room = await this.roomService.findOne(1)
    if (!room) {
      return new HttpException('room incorrect ID or room not found', HttpStatus.BAD_REQUEST);
    }
    const res = await this.isAllowedReserve(createRoomReserveDto);
    if (res == false) {
      return new HttpException('room not Allowed reserve', HttpStatus.BAD_REQUEST);
    }

    const result = await this.roomReserveRepository.save(createRoomReserveDto);

    return result
  }

  async isAllowedReserve(
      createRoomReserveDto: CreateRoomReserveDto,
  ) {

    let q = `SELECT rr.id FROM room_reserve as rr WHERE
               ($2, $3) OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
             AND rr.room_id = $1`

    let res = await this.roomReserveRepository.manager
        .query(q, [
            createRoomReserveDto.room,
          createRoomReserveDto.arrivalAt,
          createRoomReserveDto.departureAt
        ])
    // [ 1, '2021-08-05', '2021-08-23' ]

    if (res.length) {
      return false;
    }

    return true;
  }
}
