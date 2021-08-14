module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.DECIMAL
    }, {
        createdAt: 'created_at',
        updatedAt: 'updatedAt'
    });

    Actor.associate = models => {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie'
        });
    }
    return Actor;
}