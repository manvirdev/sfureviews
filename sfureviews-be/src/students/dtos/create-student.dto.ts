import { CreateUserDto } from "src/users/dtos/create-user.dto";

export class CreateStudentDto extends CreateUserDto {
  readonly program: string;
}
