import { Injectable, NotFoundException } from '@nestjs/common';
import { Items } from './items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private itemModel: Model<Items>,
    private configService: ConfigService) {
        const env = this.configService.get<string>('PORT');
        console.log('Running in environment:', env);
      }

    async findAll():Promise<Items[]>{
        return await this.itemModel.find()
    }

    async findOne(id:string):Promise<Items>{
        const oneItem = await this.itemModel.findOne({_id: id})
        if (!oneItem) {
            throw new NotFoundException(`Item with id ${id} not found`);
        }
        return oneItem;
    }

    async create(item:Items):Promise<Items>{
        const newItem=new this.itemModel(item)
        return await newItem.save()
    }

    async update(id:string, item:Partial<Items>):Promise<Items>{
        const updateItem=await this.itemModel.findByIdAndUpdate(id, item, { new:true})
        if(!updateItem){
            throw new NotFoundException(`Item with id ${id} not found`);
        }
        return updateItem;
    }

    async delete(id:string):Promise<Items>{
        const deleteItem=await this.itemModel.findByIdAndDelete(id)
        if(!deleteItem){ 
            throw new NotFoundException(`Item with id ${id} not found`);
        }
        return deleteItem
    }
}
