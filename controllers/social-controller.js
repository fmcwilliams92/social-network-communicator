const { Thoughts } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // need method to find all users

  // get one thought by id
  getThoughtsById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtData => {
        // If no thought is found, send 404
        if (!ddThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },

    // get one user by id

    // create a thought
    createThought({ body }, res) {
      Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err));
    },
    // delete pizza
    deleteThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
};

thoughtController();

module.exports = socialController;