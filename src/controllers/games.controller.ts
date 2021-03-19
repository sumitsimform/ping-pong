import { Request, Response } from "express";
import { Game } from '../models/games.model'

export class GamesController {

    public async addGame(req: Request, res: Response) : Promise<void> {
        Game.create<Game>(req.body)
        .then((game : Game) => res.status(200).json(game))
        .catch((err : Error) => res.status(500).json(err))
    }
}