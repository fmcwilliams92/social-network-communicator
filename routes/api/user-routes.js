const router = require('express').Router();

const {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUser)
  .delete(deleteUser);

// // /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;