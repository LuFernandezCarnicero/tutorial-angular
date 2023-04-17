import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainComponent {
    
    //Lo que había aquí se ha ido al service

    constructor(public dbzService:DbzService) {}

    //así no tengo que poner dbzservice.characters en el html
    get characters(): Character [] {

        return [...this.dbzService.characters]; //con el [...this.dbzService.characters] hace una copia para no escribir directamente

    }

    onDeleteCharacter (id:string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter (character: Character): void {
        this.dbzService.addCharacter(character)
    }
}

