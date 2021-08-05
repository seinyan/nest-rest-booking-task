import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {SearchRoomDto} from "./dto/search-room.dto";

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.save(createRoomDto);
  }

  async findAll(searchRoomDto: SearchRoomDto) {

    if (searchRoomDto.arrivalAt && searchRoomDto.departureAt) {

      /*
      SELECT * FROM room AS r
      WHERE id NOT IN (
          SELECT rr.room_id FROM room_reserve as rr
      WHERE (date '2021-08-11',  date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
    )

      // r.id...
      SELECT * FROM room as r
      LEFT JOIN room_reserve rr on r.id = rr.room_id
      WHERE NOT (date '2021-08-11',  date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
      OR rr.arrival_at IS NULL
      */

      let q = `SELECT * FROM room AS r
               WHERE id NOT IN (
                 SELECT rr.room_id FROM room_reserve as rr
                 WHERE ($1, $2) OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean )`

      let res = await this.roomRepository.manager
          .query(q,[
            searchRoomDto.arrivalAt,
            searchRoomDto.departureAt
          ])
      // [ '2021-08-05', '2021-08-23' ]


      return res;
    }

    const qb = await this.roomRepository.manager
        .createQueryBuilder()
        .select('r')
        .from(Room, 'r');

    return  await qb.getMany();
  }

  findOne(id: number) {
    return this.roomRepository.findOne(id);
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    updateRoomDto.id = id
    const item = await this.roomRepository.findOne(id)
    if (!item) {
      return new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return  await this.roomRepository.save(updateRoomDto);
  }

  remove(id: number) {
    return this.roomRepository.delete(id);
  }
}
