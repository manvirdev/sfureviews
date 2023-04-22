export class CreateProfessorDto {
    readonly name: string;
    readonly department: string;
    readonly email: string;
    readonly phone?: string;
    readonly courses?: {
      courseName: string;
      courseId: string;
      semester: string;
      description?: string;
    }[];
    readonly researchInterests?: string[];
    readonly publications?: string[];
    readonly officeHours?: {
      day: string;
      start: string;
      end: string;
    }[];
  }
  