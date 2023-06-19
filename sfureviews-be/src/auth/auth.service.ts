import { Injectable } from '@nestjs/common';
import { BearerStrategy } from 'passport-azure-ad';
import { PassportStrategy } from '@nestjs/passport';
import { env } from '../common/env';

@Injectable()
export class AuthService extends PassportStrategy(BearerStrategy) {
    constructor() {
        super({
            identityMetadata: `https://login.microsoftonline.com/${env.tenantId}/v2.0/.well-known/openid-configuration`,
            clientID: env.clientId,
            audience: env.clientId,
            loggingLevel: 'info',
            passReqToCallback: false,
        });
    }

    async validate(payload: any) {
        // TODO: add validation logic
        return payload;
    }
}
