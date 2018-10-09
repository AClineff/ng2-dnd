import { Request, Response } from 'express'
import * as charactersController from './charactersController'

const routes = require('express').Router()

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Connected!'})
})

routes.get('/characters/saved', charactersController.getSavedInstances)

routes.put('/characters/delete/:id', (req: Request, res: Response) => {
  res.status(200).json({message: 'Not Implemented'})
})

routes.get('/characters/load/:id', charactersController.loadCharactersInstance)

routes.post('/characters/save', charactersController.saveCharactersInstance)

module.exports = routes
