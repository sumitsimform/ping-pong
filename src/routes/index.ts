import { PlayersController } from "../controllers/players.controller";
import { GamesController } from "../controllers/games.controller";

export class Routes {
    public playersController: PlayersController = new PlayersController();
    public gamesController: GamesController = new GamesController();

   /*eslint-disable */

    public routes(app ): void {
        app.route("/api/v1/add-players")
            .post(this.playersController.addPlayers);

        app.route("/api/v1/add-game")
            .post(this.gamesController.addGame);
    }
    /*eslint-enable */
}