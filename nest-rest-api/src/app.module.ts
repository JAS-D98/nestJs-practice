import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RescModule } from './resc/resc.module';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      validationSchema: Joi.object({
        MONGO_URI:Joi.string().required(),
        PORT:Joi.number().default(3000),
      }),
    }),
    RescModule, ItemsModule, 
    MongooseModule.forRoot(process.env.MONGO_URI || '')
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
