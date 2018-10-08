import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character, NonPlayerCharacter, PlayerCharacter } from '../../models/characters'

@Component({
  selector: 'dnd-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  @Input() character: Character

  @Output()
  clickCloseDrawer: EventEmitter<void> = new EventEmitter<void>()

  isPlayer(c: Character) {
    return c.characterType === 'PC'
  }

  asPC(c: Character): PlayerCharacter {
    return c as PlayerCharacter
  }

  asNPC(c: Character): NonPlayerCharacter {
    return c as NonPlayerCharacter
  }
}
