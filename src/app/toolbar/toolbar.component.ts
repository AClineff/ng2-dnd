import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material'

@Component({
  selector: 'dnd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()
  dmMode: string
  @Input()
  inCombat: boolean
  @Output()
  toggleDMMode: EventEmitter<MatSlideToggleChange> = new EventEmitter()
  @Output()
  clickAddPlayer: EventEmitter<void> = new EventEmitter()
  @Output()
  clickAddNPC: EventEmitter<void> = new EventEmitter()
  @Output()
  clickRollInitiative: EventEmitter<void> = new EventEmitter()
  @Output()
  clickStartCombat: EventEmitter<void> = new EventEmitter()
  @Output()
  clickEndCombat: EventEmitter<void> = new EventEmitter()
}
