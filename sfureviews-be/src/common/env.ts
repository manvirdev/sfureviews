import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  serviceName: process.env.SERVICE_NAME || 'NestJS Application',
};