import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  readonly email: string;
  
  @ApiProperty()
  readonly password: string;
}
