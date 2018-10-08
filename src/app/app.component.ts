import { Component, OnInit } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material'
import { Observable } from 'rxjs'
import { DndService } from './dnd.service'
import { Character, Characters } from './models/characters'

@Component({
  selector: 'dnd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // DM Mode toggled on enables extra properties to be viewed
  // and extra actions to be taken.
  dmMode = true

  // The user sees either the 'edit' field outside of the combat,
  // or the 'combat' field inside combat.
  inCombat = false

  // Observable of total character list
  characters$: Observable<Characters>

  constructor(private dndService: DndService) {
  }

  ngOnInit() {
    this.characters$ = this.dndService.getAllCharacters()
  }

  onClickAddPlayer() {
    this.dndService.generateNewCharacter()
  }

  onClickAddNPC() {
    this.dndService.generateNewNPC()
  }

  onClickRollInitiative() {
    this.dndService.rollInitiative()
  }

  onClickStartCombat() {
    this.dndService.startCombat()
    this.inCombat = true
  }

  onClickEndCombat() {
    this.dndService.endCombat()
    this.inCombat = false
  }

  onToggleDMMode(event: MatSlideToggleChange) {
    this.dmMode = event.checked
  }

  onClickDelete(c: Character) {
    this.dndService.removeCharacter(c)
  }
}
