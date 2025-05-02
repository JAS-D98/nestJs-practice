import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';
import { Items } from './items.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}
    @Get()
    async findAll():Promise<Items[]>{
        return this.itemsService.findAll()
    }

    @Get(':id')
    async getOne(@Param("id") id:string){
        return this.itemsService.findOne(id)
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto):Promise<Items>{
        return this.itemsService.create(createItemDto)
    }

    @Patch(':id')
    async update(@Param("id") id:string, @Body() updateItemDto:UpdateItemDto):Promise<Items>{
        return this.itemsService.update(id, updateItemDto)
    }

    @Delete(':id')
    async delete(@Param("id") id:string){
        return this.itemsService.delete(id)
    }
}
