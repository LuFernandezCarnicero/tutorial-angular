import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name:'',
    power:0
  }];

  //onDeleteId = Index value:number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  
  
  
  onDeleteCharacter(id?:string): void {
    
    if( !id ) return; //si no existe no lo manda llamar

    console.log('en list'+id)
    this.onDelete.emit(id)
  }
}
