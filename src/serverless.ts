import { Context, APIGatewayEvent } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedServer: any;

async function bootstrapServer(): Promise<any> {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    cachedServer = app.getHttpAdapter().getInstance();
  }
  return cachedServer;
}

export const handler = async (event: APIGatewayEvent, context: Context) => {
  const server = await bootstrapServer();
  return server(event, context);
};
