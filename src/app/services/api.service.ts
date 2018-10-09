import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EMPTY, Observable } from 'rxjs/'
import { map, switchMap, take } from 'rxjs/operators'
import { Character, Characters } from '../../../shared/models/character'

// TODO environments file!
const SERVER_URL = 'http://localhost:4201'
const CHARACTERS_BASE_URL = SERVER_URL + '/characters'
const SAVE_CHARACTERS_URL = CHARACTERS_BASE_URL + '/save'
const LOAD_CHARACTERS_URL = CHARACTERS_BASE_URL + '/load'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
}

const TEST_ID = 0

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  save(characters$: Observable<Characters>) {
    characters$.pipe(
      take(1),
      switchMap((characters: Character[]) => {
        return this.http.post(SAVE_CHARACTERS_URL, characters, {headers: DEFAULT_HEADERS})
      }),
      map(() => {
        // TODO Error Handling?
        return EMPTY
      })
    ).subscribe()
  }

  load(): Observable<Character> {
    return this.http.get<string>(`${LOAD_CHARACTERS_URL}\\${TEST_ID}`).pipe(
      switchMap(res => {
        return JSON.parse(res)
      })
    )
  }
}
