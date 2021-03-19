// lib/models/Player.model.ts
import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Game } from "./games.model";

export class Player extends Model {
  public id!: number; 
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface PlayerInterface {
  name: string;
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    // underscored: true,
    tableName: "players",
    sequelize: database // this bit is important
  }
);

Player.hasMany(Game, {
  sourceKey: "id",
  foreignKey: "player1",
  as: "firstPlayers"
});

Player.hasMany(Game, {
  sourceKey: "id",
  foreignKey: "player2",
  as: "secondPlayers"
});

Player.sync({ force: false }).then(() => console.log("Player table created"));
