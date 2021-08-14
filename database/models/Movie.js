module.exports = (sequelize, DataTypes) => {
    const Movie = sequielize.define('Movie', {
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.NUMBER,
        release_date: DataTypes.DATE,
        length: DataTypes.DATE
    }, {
        createdAt: 'created_at',
        updateAt: 'updated_at'
    });

    Movie.associate = models = {
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        });

        Movie.belongsToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie'
        });
    }
    return Movie;
}