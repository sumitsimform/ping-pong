import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Player } from "./players.model";

// game model
export class Game extends Model {
  public id!: number;
  public player1!: number;
  public player2!: number;
  public player1Win!: number;
  public player2Win!: number;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    player1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    player2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    player1Win: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      player2Win: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },
  {
    freezeTableName: true,
    tableName: "games",
    sequelize: database 
  }
);

Game.belongsTo(Player, {
  foreignKey: "player1",
  as: "firstPlayers"
});

Game.belongsTo(Player, {
  foreignKey: "player2",
  as: "secondPlayers"
});

Game.sync({ force: false }).then(() => console.log("Game table created"));
