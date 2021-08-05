import { Test, TestingModule } from '@nestjs/testing';
import { RoomReserveController } from './room-reserve.controller';
import { RoomReserveService } from './room-reserve.service';

describe('RoomReserveController', () => {
  let controller: RoomReserveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomReserveController],
      providers: [RoomReserveService],
    }).compile();

    controller = module.get<RoomReserveController>(RoomReserveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
