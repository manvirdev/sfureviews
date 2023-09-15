import { CreateUserDto } from "src/users/dtos/create-user.dto";

export class CreateProfessorDto extends CreateUserDto {
    readonly department: string;
    readonly courses?: {
      courseName: string;
      courseId: string;
      semester: string;
      description?: string;
      year?: number;
    }[];
    readonly researchInterests?: string[];
    readonly publications?: string[];
    readonly officeHours?: {
      day: string;
      start: string;
      end: string;
    }[];

}