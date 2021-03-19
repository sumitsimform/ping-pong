import { Request, Response } from "express";
import { Player } from '../models/players.model'

export class PlayersController {

    // add multiple players to the table.
    public async addPlayers(req: Request, res: Response) : Promise<void> {
        let players = await Promise.all(req.body.players.map(async (player): Promise<Player> => {
            return await Player.create<Player>({ name: player })
        }));
        res.status(200).json({ players })
    }
}