import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas=[
        {id:1, name:'Ninja 1', weapon:'shuriken'},
        {id:2, name:'Ninja 2', weapon:'katana'},
    ]
    getNinjas(weapon?: 'shuriken' | 'katana'){
        if(weapon){
            return this.ninjas.filter(ninja=> ninja.weapon === weapon)
        }
        return this.ninjas;
    }

    getOneNinja(id:number){
        const ninja=this.ninjas.find(ninja=>ninja.id === id)
        if(!ninja){
            throw new NotFoundException('Ninja not found')
        }
        return ninja;
    }

    createNinja(createNinjaDto:CreateNinjaDto){
        const newNinja={
            ...createNinjaDto,
            id: this.ninjas.length+1,
        }
        this.ninjas.push(newNinja)
        return newNinja;
    }

    updateNinja(updateNinjaDto:UpdateNinjaDto){
        const ninjaIndex=this.ninjas.findIndex(ninja=>ninja.id === updateNinjaDto.id)
        if(ninjaIndex === -1){
            throw new NotFoundException('Ninja Not Found')
        }
        const updatedNinja={
            ...this.ninjas[ninjaIndex],
            ...updateNinjaDto,
        }
        this.ninjas[ninjaIndex]=updatedNinja;
        return updatedNinja;
    }

    deleteNinja(id:number){
        const ninjaIndex=this.ninjas.findIndex(ninja=>ninja.id ===id)
        if(ninjaIndex === -1){
            throw new NotFoundException('Ninja not Found')
        }
        const deletedNinja=this.ninjas[ninjaIndex]
        this.ninjas.splice(ninjaIndex, 1)
        return deletedNinja;
    }
}
