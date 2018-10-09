import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { DndService } from '../services/dnd.service'
import { Character } from '../models/characters'

@Component({
  selector: 'dnd-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  currentCharacter$: Observable<Character>
  previousCharacter$: Observable<Character>
  nextCharacter$: Observable<Character>

  constructor(private dndService: DndService) {
  }

  ngOnInit() {
    this.currentCharacter$ = this.dndService.getCurrentCharacter()
  }

  clickNextTurn() {
    this.dndService.nextTurn()
  }

}
