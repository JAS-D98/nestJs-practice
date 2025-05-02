import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RescService } from './resc.service';
import { CreateRescDto } from './dto/create-resc.dto';
import { UpdateRescDto } from './dto/update-resc.dto';

@Controller('resc')
export class RescController {
  constructor(private readonly rescService: RescService) {}

  @Post()
  create(@Body() createRescDto: CreateRescDto) {
    return this.rescService.create(createRescDto);
  }

  @Get()
  findAll() {
    return this.rescService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rescService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRescDto: UpdateRescDto) {
    return this.rescService.update(+id, updateRescDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rescService.remove(+id);
  }
}
