import { Module } from '@nestjs/common';
import { RoomReserveService } from './room-reserve.service';
import { RoomReserveController } from './room-reserve.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RoomReserve} from "./entities/room-reserve.entity";
import {RoomModule} from "../room/room.module";

@Module({
  controllers: [RoomReserveController],
  providers: [RoomReserveService],
  imports: [TypeOrmModule.forFeature([RoomReserve]), RoomModule],
  exports: [TypeOrmModule],
})
export class RoomReserveModule {}
