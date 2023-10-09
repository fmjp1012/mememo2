import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConnection = configService.get<string>('DB_CONNECTION');
        const dbHost = configService.get<string>('DB_HOST');
        const dbPort = configService.get<string>('DB_PORT');
        const dbDatabase = configService.get<string>('DB_DATABASE');
        const dbUsername = configService.get<string>('DB_USERNAME');
        const dbPassword = configService.get<string>('DB_PASSWORD');

        return {
          uri: `${dbConnection}://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
