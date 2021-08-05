import { ApiProperty } from '@nestjs/swagger';

export class SearchRoomDto {
  @ApiProperty({ name: 'arrivalAt', required: false })
  arrivalAt: Date;

  @ApiProperty({ name: 'departureAt', required: false })
  departureAt: Date;
}
