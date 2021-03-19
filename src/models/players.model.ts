import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";

// players model
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
    freezeTableName: true,
    tableName: "players",
    sequelize: database 
  }
);



Player.sync({ force: false }).then(() => console.log("Player table created"));
