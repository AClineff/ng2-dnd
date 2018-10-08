import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { MatDrawer } from '@angular/material'
import { DndService } from '../dnd.service'
import { Character, Characters } from '../models/characters'

@Component({
  selector: 'dnd-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  characters: Characters
  @Input()
  dmMode: boolean

  editableCharacter: Character

  drawerState: string

  @Output()
  clickDelete: EventEmitter<Character> = new EventEmitter<Character>()

  @ViewChild(MatDrawer) drawerContainer: MatDrawer

  constructor(private cd: ChangeDetectorRef, private dndService: DndService) {
  }

  ngOnInit() {
    // TODO Why does this have to happen I don't understand
    setTimeout(() => this.dndService.forceEmit(), 0)
  }

  onClickEdit(character: Character) {
    this.editableCharacter = character
    this.drawerContainer.open().then(state => this.drawerState = state)
  }

  onClickCloseDrawer() {
    this.editableCharacter = null
    this.drawerContainer.close().then(state => this.drawerState = state)
  }

}
