import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService:NinjasService){}
    @Get()
    getNinjas(@Query('weapon') weapon: 'shuriken' | 'katana'){
        return this.ninjasService.getNinjas(weapon)
    }
    @Get(":id")
    getOneNinja(@Param('id') id:string){
        return this.ninjasService.getOneNinja(+id)
    }

    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe) createNinjaDto: CreateNinjaDto){
        return {message:'Ninja Created', data:this.ninjasService.createNinja(createNinjaDto)}
    }

    @Put(":id")
    updateNinja(@Param('id') id:string, @Body() updateNinjaDto:UpdateNinjaDto){
        return {message: 'Ninja Updated', data: this.ninjasService.updateNinja(updateNinjaDto)}
    }
    @Delete(':id')
    deleteNinja(@Param('id') id:string){
        return {message: 'Ninja Deleted', data: this.ninjasService.deleteNinja(+id)}
    }
}
