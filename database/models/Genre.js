module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        name: DataTypes.STRING
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    Genre.associate = models => {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        });
    }
    return Genre;
}