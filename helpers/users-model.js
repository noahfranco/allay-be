const db = require('../data/dbConfig.js');

module.exports = {
  findUsers,
  findUsersBy,
  findUserById,
  findUserReviews,
  addUser,
  updateUser,
  deleteUser
};

//Create some functions!

// FIND ALL USERS
function findUsers() {
  return db('users');
}

// FIND USERS BY A SPECIFIC FILTER (MUST BE A COLUMN IN THE USERS TABLE AND USE {<ARGUMENT>})
function findUsersBy(filter) {
  return db('users').where(filter);
}

// FIND USER BY ID, WILL CONTAIN ANY REVIEWS ASSOCIATED WITH THE USER OR AN EMPTY ARRAY
function findUserById(userId) {
  return db('users as u')
    .where('id', userId)
    .select('u.id', 'u.username', 'u.email')
    .first()
    .then(user => {
      return findUserReviews(user.id).then(userReviews => {
        return {
          ...user,
          reviews: userReviews
        };
      });
    });
}

// FIND ONLY THE REVIEWS ASSOCIATED WITH A USER
function findUserReviews(userId) {
  return db('reviews as r').where('r.user_id', userId);
}

// ADD A USER TO THE DATABASE
function addUser(user) {
  return db('users')
    .insert(user, 'id')
    .then(([id]) => {
      return findUserById(id);
    });
}

// UPDATE AN EXISTING USER
function updateUser(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? findUserById(id) : null));
}

// DELETE AN EXISTING USER
function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}