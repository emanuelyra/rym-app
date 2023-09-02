const {DataTypes} = require("sequelize")
module.exports = (sequelize) => {
sequelize.define("User", {
    // id: {
    //     type: DataTypes.UUID, // UUID
    //     primaryKey: true,
    //     autoincrement: true,
        // allowNull: false
    // },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{timestamps: false})
}