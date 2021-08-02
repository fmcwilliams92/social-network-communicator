const { Thoughts } = require('../models/Thoughts');

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

  // get one thought by id
  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then(dbThoughtData => {
        // If no thought is found, send 404
        if (!dbThoughtData) {
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

    // create a thought
    createThought({ body }, res) {
      Thoughts.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err));
    },

    // delete pizza
    deleteThought({ params }, res) {
      Thoughts.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    updateThought({ params, body }, res) {
      Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
};

module.exports = thoughtController;