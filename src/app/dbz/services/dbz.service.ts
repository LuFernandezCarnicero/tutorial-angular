import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public characters: Character[] = [{
        id:uuid(),
        name:'Krillin',
        power: 3000
    },
    {   
        id:uuid(),
        name:'Goku',
        power:10000

    },
    {   
        id:uuid(),
        name:'Vegeta',
        power:9000
    }]

    addCharacter (character: Character): void {
        
        const newChararacter: Character ={
            id: uuid(),
            ...character //de esta forma esparce el name y el power sin tener que escribir todas, útil cuand son muchas

        }
        this.characters.push(newChararacter)
    }

    /*
    onDeleteCharacter (index:number):void {
        console.log('main'+index)
        this.characters.splice(index,1)

    }

    */

    deleteCharacterById (id:string) {

        //borramos filtrando, devuelve todos los que sean true es decir todos menos el que tiene la misma id
        this.characters = this.characters.filter(character=>character.id !== id)
    }
    
    
    
}