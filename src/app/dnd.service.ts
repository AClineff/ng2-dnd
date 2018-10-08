import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of, Subject } from 'rxjs'
import { Character, Characters, NonPlayerCharacter, PlayerCharacter } from './models/characters'
import * as RpgDiceRoller from 'rpg-dice-roller'

@Injectable({
  providedIn: 'root'
})
export class DndService {

  // A list of all characters currently in play
  characters: (PlayerCharacter | NonPlayerCharacter)[]
  characters$: Subject<Characters>

  currentIndex = 0

  readonly currentCharacter$: BehaviorSubject<Character>

  // Dice Roller - No Typing Available :(
  dr: any

  constructor() {
    this.characters = []
    this.characters$ = new Subject<Characters>()
    this.currentCharacter$ = new BehaviorSubject<Character>(null)
    this.dr = new RpgDiceRoller.DiceRoller()
  }

  // Return Subject that can be subscribed to
  getAllCharacters(): Observable<Characters> {
    return this.characters$
  }

  // Generate an empty Player Character template and emit the change.
  // Returns the newly created character to be handled if required.
  generateNewCharacter(): PlayerCharacter {
    const pc: PlayerCharacter = {
      characterType: 'PC',
      name: 'Test Player',
      playerName: 'Test Person',
      armorClass: 0,
      initiative: 0,
      initiativeBonus: 0
    }
    this.characters.push(pc)
    this.characters$.next(this.characters)
    return pc
  }

  // GenerateNewCharacter but for NPCs
  generateNewNPC(): NonPlayerCharacter {
    const npc: NonPlayerCharacter = {
      characterType: 'NPC',
      name: 'Test Enemy',
      armorClass: 0,
      initiative: 0,
      initiativeBonus: 0,
      currentHP: 0,
      totalHP: 0
    }
    this.characters.push(npc)
    this.characters$.next(this.characters)
    return npc
  }

  // Rolls a new initiative for every character in play
  rollInitiative(): void {
    this.characters.forEach(c => {
      c.initiative = this.dr.roll('d20').total + c.initiativeBonus
    })
    this.sort()
  }

  // Sorts the order of the characters based on initiative in descending order
  sort(): void {
    this.characters.sort((a, b) => {
      return b.initiative - a.initiative
    })
  }

  // Completely removes a character from the field.
  removeCharacter(c: Character) {
    this.characters.splice(this.characters.indexOf(c), 1)
  }

  forceEmit() {
    this.characters$.next(this.characters)
  }

  startCombat(): void {
    this.currentIndex = 0
    this.currentCharacter$.next(this.characters[this.currentIndex])
  }

  endCombat(): void {
    // Logic to be run at end of combat.
  }

  getCurrentCharacter(): Observable<Character> {
    return this.currentCharacter$.asObservable()
  }

  // Processes any turn-based logic
  nextTurn(): void {
    this.currentCharacter$.next(this.getNextCharacter())
  }

  getNextCharacter(): Character {
    let nextIndex = ++this.currentIndex
    if (nextIndex >= this.characters.length) {
      nextIndex = 0
    }
    this.currentIndex = nextIndex
    return this.characters[this.currentIndex]
  }
}

