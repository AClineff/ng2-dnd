import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Character, NonPlayerCharacter, PlayerCharacter } from '../models/characters'

@Component({
  selector: 'dnd-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character
  @Input()
  dmMode: boolean
  @Input()
  imCombat = false

  @Output()
  clickDelete: EventEmitter<Character> = new EventEmitter<Character>()
  @Output()
  clickEdit: EventEmitter<Character> = new EventEmitter<Character>()

  constructor() {
  }

  ngOnInit() {
  }

  asPC(character: Character) {
    return character as PlayerCharacter
  }

  asNPC(character: Character) {
    return character as NonPlayerCharacter
  }

}
