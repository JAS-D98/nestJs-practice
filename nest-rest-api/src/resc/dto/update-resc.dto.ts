import { PartialType } from '@nestjs/mapped-types';
import { CreateRescDto } from './create-resc.dto';

export class UpdateRescDto extends PartialType(CreateRescDto) {}
