import { Request, Response } from 'express'
import * as db from '../db/index'

export function getSavedInstances(req: Request, res: Response) {
  res.status(200).json({message: 'getSavedInstances Not Implemented!'})
}

export function loadCharactersInstance(req: Request, res: Response) {
  db.load(req.params.id)
    .then((value => {
      res.status(200).json(value)
    }))
    .catch(reason => {
      handleError(res, reason)
    })
}

export function saveCharactersInstance(req: Request, res: Response) {
  db.save(req.body)
    .then((response: any) => { // TODO type this
      res.status(200).json({message: 'Save Successful!'})
    })
    .catch(reason => {
      handleError(res, reason)
    })
}

function handleError(res: Response, reason: any) {
  res.status(500).json({message: 'Load Failed. ', reason})
}

