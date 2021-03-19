import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";

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
    // underscored: true,
    tableName: "games",
    sequelize: database // this bit is important
  }
);


Game.sync({ force: false }).then(() => console.log("Game table created"));
