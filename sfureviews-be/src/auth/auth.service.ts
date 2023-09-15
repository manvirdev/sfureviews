import { Injectable } from '@nestjs/common';
import { BearerStrategy } from 'passport-azure-ad';
import { PassportStrategy } from '@nestjs/passport';
import { env } from '../common/env';
import { StudentService } from '../modules/student/student.services';
import { ProfessorService } from '../modules/professor/professor.services';
import { HttpService } from '@nestjs/axios'; // import the HttpService

@Injectable()
export class AuthService extends PassportStrategy(BearerStrategy, 'azure-ad') {
  constructor(
    private readonly studentService: StudentService,
    private readonly professorService: ProfessorService,
    private readonly httpService: HttpService, // inject the HttpService
  ) {
    super({
      identityMetadata: `https://login.microsoftonline.com/${env.tenantId}/v2.0/.well-known/openid-configuration`,
      clientID: env.clientId,
      audience: env.clientId,
      loggingLevel: 'info',
      passReqToCallback: false,
    });
  }

  async validate(payload: any) {
    // Perform validation logic to check if the user exists in the student or professor collection
    const student = await this.studentService.findByEmail(payload.email);
    const professor = await this.professorService.findOneByEmail(payload.email);

    if (student) {
      // User is a student
      return student;
    }

    if (professor) {
      // User is a professor
      return professor;
    }

    // User not found in the student or professor collection

    return null;
  }

  public createUserInAzureAD(email: string, displayName: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.post('https://graph.microsoft.com/v1.0/users', {
        userPrincipalName: email,
        accountEnabled: true,
        displayName: displayName,
        mailNickname: displayName,
        passwordProfile: {
          forceChangePasswordNextSignIn: true,
          password: password,
        },
      }).subscribe({
        next: response => resolve(response.data),
        error: err => reject(err)
      });
    });
  }
  

}
