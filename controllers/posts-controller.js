//import request
const request = require('request');
//imports posts from models
const { Posts } = require("../models");

const postsController = {
  
    // get all posts
    getAllPosts(req, res) {
      Posts.find({})
        .then(dbPostsData => res.json(dbPostsData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
        return res.status(200)
    },
  
    // get one post by id
    getPostsById({ params }, res) {
      Posts.findOne({_id: params.id })
        .then(dbPostsData => {
          // If no posts is found, send 404
          if (!dbPostsData) {
            res.status(404).json({ message: 'No posts found with this id!' });
            return;
          }
          res.json(dbPostsData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
        return res.status(200)
    },
  }

  module.exports = postsController;