export default (sequelize, DataTypes) => {

    const Info = sequelize.define("info", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        roll: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
           
        },
        filename:{
            type:DataTypes.TEXT
            // allowNull:false

        },
        status:{
            type:DataTypes.STRING,
        }
    })

    return Info;
}