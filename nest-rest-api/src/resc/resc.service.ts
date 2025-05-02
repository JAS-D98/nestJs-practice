import { Injectable } from '@nestjs/common';
import { CreateRescDto } from './dto/create-resc.dto';
import { UpdateRescDto } from './dto/update-resc.dto';

@Injectable()
export class RescService {
  create(createRescDto: CreateRescDto) {
    return 'This action adds a new resc';
  }

  findAll() {
    return `This action returns all resc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resc`;
  }

  update(id: number, updateRescDto: UpdateRescDto) {
    return `This action updates a #${id} resc`;
  }

  remove(id: number) {
    return `This action removes a #${id} resc`;
  }
}
