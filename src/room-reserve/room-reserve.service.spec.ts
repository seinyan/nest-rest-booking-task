import { Test, TestingModule } from '@nestjs/testing';
import { RoomReserveService } from './room-reserve.service';

describe('RoomReserveService', () => {
  let service: RoomReserveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomReserveService],
    }).compile();

    service = module.get<RoomReserveService>(RoomReserveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
