export interface ICharacter {
  name: string
  initiative: number
  initiativeBonus: number
  armorClass: number
  characterType: CharacterType
}

export interface PlayerCharacter extends ICharacter {
  playerName: string
}

export interface NonPlayerCharacter extends ICharacter {
  totalHP: number
  currentHP: number
  savingThrows?: SavingThrows
}

export interface SavingThrows {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

export type CharacterType = 'PC' | 'NPC'
export type Character = PlayerCharacter | NonPlayerCharacter
export type Characters = Character[]
