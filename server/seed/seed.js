const db = require('../config/connection');
const { User, Favorite } = require('../models');
const userData = require('./userData.json');
const favoriteData = require('./favoriteData.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Favorite', 'favorites');

    await cleanDB('User', 'users');

    await User.create(userData);

    for (let i = 0; i < favoriteData.length; i++) {
      const { _id, name } = await Favorite.create(favoriteData[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
