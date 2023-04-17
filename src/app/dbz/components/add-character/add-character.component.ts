import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    //el EventEmitter tiene que importarse
    @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter()

  public character:Character = {
    name:'',
    power:0
  }

  emitCharacter():void {

    //debugger;

    console.log(this.character)

    //compruebo si hay algo escrito, si no lo hay retorna sin hacer sus cositas
    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'',power:0} //limpia después de emitir los datos del character
  }


}
