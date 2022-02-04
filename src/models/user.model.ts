import { sequelize } from "./../config/app.config";
import { Model, Optional, DataTypes } from "sequelize";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserInstance
  extends Model<UserAttributes, Optional<UserAttributes, "id">>,
    UserAttributes {}

const User = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  firstName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.sync();

export default User;
