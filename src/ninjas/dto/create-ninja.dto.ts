import {IsEnum, MinLength} from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['shuriken', 'katana'], {message: 'Weapon must be either shuriken or katana'})
    weapon:string;

    id:number;
}
