"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePosts = exports.addPost = exports.addComment = void 0;
var removePosts = function removePosts(index) {
  return {
    type: 'REMOVE_POSTS',
    payload: index
  };
};
exports.removePosts = removePosts;
var addPost = function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  };
};
exports.addPost = addPost;
var addComment = function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      comment: comment,
      postId: postId
    }
  };
};
exports.addComment = addComment;