import { Character } from './models'

const fs = require('fs')

const TEST_ID = 0

export function save(data: Character[]): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.writeFile(`database/${TEST_ID}.json`, JSON.stringify(data), ((err: any) => {
        if (err) {
          reject(err)
        }
        resolve('Success')
      }
    ))
  })
}

export function load(id: string) {
  return new Promise(((resolve, reject) => {
    fs.readFile(`database/${id}.json`, 'utf8', ((err: string, data: string) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    }))
  }))
}
