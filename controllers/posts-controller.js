
//imports posts from models
const { Posts } = require("../models/Posts");

const postsController = {
  
    // get all posts
    getAllPosts(req, res) {
      Posts.find({})
      res.json({sortBy:"popularity", direction: "asc" })
        .then(PostsData => res.json(PostsData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        })
        if(`tag`!= ''){
          res.status(400).json({ message: 'Tag parameter is required!' });
            return;
        }
        if(!`sortBy`){
          res.status(400).json({ message: 'sortBy parameter is invalid!' });
            return;
        }
        if(!`direction`){
          res.status(400).json({ message: 'direction parameter is invalid!' });
            return;
        }

          return res.status(200)
       
    
    },
  
    // get one post by id
    getPostsById({ params }, res) {
      Posts.findOne({_id: params.posts })
        .then(PostsData => {
          // If no posts is found, send 404
          if (!PostsData) {
            res.status(404).json({ message: 'No posts found with this id!' });
            return;
          }
          res.json(PostsData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
        return res.status(200)
    },
  }

  module.exports = postsController;
  