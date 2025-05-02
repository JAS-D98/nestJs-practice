import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { itemSchema } from './schemas/item.schema';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: itemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule {}
