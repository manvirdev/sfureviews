import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  serviceName: process.env.SERVICE_NAME || 'NestJS Application',
  tenantId: process.env.AZURE_APP_TENANT_ID,
  clientId: process.env.AZURE_APP_CLIENT_ID,
};